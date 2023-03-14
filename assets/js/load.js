jQuery(document).ready(function ($) {
    if ($(window).width() > 1280) {
        var scripts = [
            'console',
            'utilities'
        ];
    } else {
        var scripts = ['utilities'];
    }
    $.each(scripts, function (index, script) {
        $.getScript('/assets/js/' + script + '.js');
    });
    $('.team').load('assets/templates/member.html', function () {
        $.ajax({
            type: 'GET',
            url: 'assets/config.json',
            dataType: 'json',
            success: function (data) {
                function capitalize(string) {
                    return string.charAt(0).toUpperCase() + string.slice(1);
                }
                var profiles = data.profiles;
                var config = data.config;
                var memberTemplate = $('.member').clone();
                $('.member').remove();
                $.each(profiles, function (index, profile) {
                    var socials = profile.socials;
                    var member = memberTemplate.clone();
                    member.find('img:first').attr('src', profile.icon);
                    member.find('h2').text(profile.name);
                    if (profile.tag == '') {
                        member.find('.username span').remove();
                    }
                    member.find('.username span').text(profile.tag);
                    member.find('.username img').attr('src', 'assets/img/icons/' + profile.badge + '.png');
                    member.find('.username img').attr('title', capitalize(profile.badge));
                    function getPlayingAudio() {
                        var playingAudio = '';
                        $('audio').each(function () {
                            if (!this.paused) {
                                playingAudio = $(this).attr('class');
                                return false;
                            }
                        });
                        return playingAudio;
                    }
                    function getPlayingVideo() {
                        var playingVideo = '';
                        $('video').each(function () {
                            if (!this.paused) {
                                playingVideo = $(this).attr('class');
                                return false;
                            }
                        });
                        return playingVideo;
                    }
                    $(member).on({
                        mouseenter: function () {
                            $('.member').css('background', 'radial-gradient(120% 90% ellipse at center top, ' + profile.theme.bgcolor.color1 + ' 75%, ' + profile.theme.bgcolor.color2 + ' 150%)');
                            $('.member h2').css('color', profile.theme.text);
                            $(this).find('.username span').animate({ width: 'toggle' }, 100);
                            $('.member .socials-content').css('background', profile.theme.bgcolor.color1);
                            $(this).find('.socials').toggleClass('deg-180');
                            $(this).find('.socials').siblings('.socials-content').slideToggle(100, 'linear', { direction: 'down' });
                            var socialsContent = $(this).find('.socials-content');
                            var socialContentHeight = socialsContent.outerHeight();
                            member.height('160px' + socialContentHeight);
                            if ($(window).width() > 1280) {
                                let bg = profile.bg;
                                if (bg.endsWith('4')) {
                                    let profileVideo = $('video.' + profile.name)[0];
                                    if (profileVideo.paused) {
                                        $('.video').css('opacity', '1');
                                        let playingVideo = getPlayingVideo();
                                        if (playingVideo != '') {
                                            playingVideo = playingVideo.replace('vid ', '');
                                            $('video.' + playingVideo).get(0).pause();
                                            $('video.' + playingVideo).css('z-index', '0');
                                        }
                                        $('img.bg').css('z-index', '0');
                                        $('video.' + profile.name).css('z-index', '1');
                                        profileVideo.volume = $('#volume-slider').val() / 100;
                                        $('#volume-slider').on('input', function () {
                                            var videoVolume = $(this).val() / 100;
                                            profileVideo.volume = videoVolume;
                                        });
                                        profileVideo.play();
                                    }
                                } else {
                                    let playingVideo = getPlayingVideo();
                                    if (playingVideo != '') {
                                        playingVideo = playingVideo.replace('vid ', '');
                                        $('video.' + playingVideo).get(0).pause();
                                        $('.video>video').css('z-index', '0');
                                    }
                                    $('.video').css('opacity', '0');
                                    $('img.bg').css('z-index', '1');
                                    if ($('img.bg').attr('src') !== 'assets/img/bgs/' + bg) {
                                        $('img.bg').fadeOut(0, function () {
                                            $(this).attr('src', 'assets/img/bgs/' + bg).bind('onreadystatechange load', function () {
                                                if (this.complete) {
                                                    $(this).fadeIn(100);
                                                }
                                            });
                                        });
                                    }
                                }
                            } else {
                                let mbg = profile.mbg;
                                if ($('img.bg').attr('src') !== 'assets/img/bgs/' + mbg) {
                                    $('img.bg').fadeOut(0, function () {
                                        $(this).attr('src', 'assets/img/bgs/' + mbg).bind('onreadystatechange load', function () {
                                            if (this.complete) {
                                                $(this).fadeIn(100);
                                            }
                                        });
                                    });
                                }
                            }
                            if (!$('.songs audio.' + profile.name).length) {
                                $('.songs').append('<audio class="' + profile.name + '" src="assets/songs/' + profile.song + '" loop></audio>');
                            }
                            let memberAudio = $('audio.' + profile.name)[0];
                            if (memberAudio.paused) {
                                let playingAudio = getPlayingAudio();
                                if (playingAudio != '') {
                                    $('audio.' + playingAudio)[0].pause();
                                }
                                if (profile.song) {
                                    memberAudio.volume = $('#volume-slider').val() / 100;
                                    $('#volume-slider').on('input', function () {
                                        var audioVolume = $(this).val() / 100;
                                        memberAudio.volume = audioVolume;
                                    });
                                    memberAudio.play();
                                }
                            }
                        },
                        mouseleave: function () {
                            $('.member').css('background', 'linear-gradient(' + $(this).data('theme.bgcolor.color1') + ' 60%, ' + $(this).data('theme.bgcolor.color1') + ' 1125)');
                            $('.member h2').css('color', $(this).data('theme.bgcolor.color1'));
                            $(this).find('.username span').animate({ width: 'toggle' }, 100);
                            $('.member .socials-content').css('background', $(this).data('theme.bgcolor.color1'));
                            let bg = $(this).data('bg');
                            if (!bg.endsWith('4')) {
                                $('img.bg').attr('src', 'assets/img/bgs/' + bg);
                            }
                            $(this).find('.socials').toggleClass('deg-180');
                            $(this).find('.socials').toggleClass('active');
                            $(this).find('.socials').siblings('.socials-content').slideToggle(100, 'linear', { direction: 'down' });
                            member.height('160px');
                        }
                    });
                    $(member).data('bg', profile.bg);
                    $(member).data('song', profile.song);
                    var socialsDiv = $('<div />', { class: 'wrap' });
                    var socialsIndex = 0;
                    for (var social in socials) {
                        if (socials.hasOwnProperty(social)) {
                            (function (platform) {
                                var socialHtml = $('<img />', {
                                    src: config.platforms[platform].icon,
                                    class: 'icon'
                                });
                                socialHtml.click(function () {
                                    window.open(config.platforms[platform].link + socials[platform]);
                                });
                                socialsDiv.append(socialHtml);
                                socialsIndex++;
                                if (socialsIndex % 3 == 0 || socialsIndex == Object.keys(socials).length) {
                                    if (socialsDiv.children().length == 2) {
                                        socialsDiv.addClass('wrap-2');
                                    }
                                    if (socialsDiv.find('img').length > 0) {
                                        if (socialsDiv.find('img').length != 3 || socialsIndex != Object.keys(socials).length) {
                                            member.find('.socials-content').append(socialsDiv);
                                            if (socialsIndex != Object.keys(socials).length) {
                                                socialsDiv = $('<div />', { class: 'wrap' });
                                            }
                                        }
                                    }
                                    if (socialsDiv.find('img').length == 0) {
                                        $(this).closest('.wrap').remove();
                                    }
                                }
                            }(social));
                        }
                    }
                    member.find('.socials-content').append(socialsDiv);
                    
                    if (index < 3) {
                        member.appendTo('.top');
                    } else {
                        member.appendTo('.team');
                    }
                });
            }
        });
    });
});