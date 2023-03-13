$(window).blur(function () {
    document.title = 'see you next time';
});
$(window).focus(function () {
    document.title = 'fuckbeingsad.com';
});
if ($(window).width() > 1280) {
    $.ajax({
        type: 'GET',
        url: 'assets/config.json',
        dataType: 'json',
        success: function (config) {
            profiles = config.profiles;
            $.each(profiles, function (index, profile) {
                var bg = profile.bg;
                if (bg.includes('.mp4')) {
                    $('.video').append('<video class="vid ' + profile.name + '" src="assets/img/bgs/' + profile.bg + '" loop></video>');
                }
            });
        }
    });
    setInterval(function () {
        $('img').attr('draggable', false);
    }, 1000);
    var audio = $('audio').get(0);
    audio.volume = $('#volume-slider').val() / 100;
    $('#volume-slider').on('input', function () {
        var volume = $(this).val() / 100;
        audio.volume = volume;
    });
    var initialScale = 1;
    var maxScale = 1.2;
    var scrollOffset = 1500;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var scale = initialScale + scroll / scrollOffset;
        if (scale > maxScale) {
            scale = maxScale;
        }
        $('.bg').css({ transform: 'scale(' + scale + ')' });
    });
}