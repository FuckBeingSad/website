
const links = [
    {
        name: 'sownah',
        link: 'https://twitter.com/sownah777',
    },
    {
        name: 'audit',
        link: 'https://twitter.com/playeraudit',
    },
    {
        name: 'vops',
        link: 'https://twitter.com/vopswtf',
    },
    {
        name: 'samu',
        link: 'https://twitter.com/444samu',
    },
    {
        name: 'jfared',
        link: 'https://twitter.com/Jfaredlol',
    },
    {
        name: 'tech',
        link: 'https://twitter.com/tech843',
    },
    {
        name: 'st6xy',
        link: 'https://twitter.com/St6xyFoxHoppin',
    },
];

for (let i in links) {
    let link = links[i];

    $('.footer__links').append(`<li class="footer__links__item"><a href="${link.link}" target="_blank">${link.name}</a></li>`);

    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' - ');
}