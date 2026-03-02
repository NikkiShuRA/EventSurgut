const links = [
  {
    id: 1,
    name: "Новости",
    src: "#",
  },
  {
    id: 2,
    name: "ntcn",
    src: "#",
  },
  {
    id: 3,
    name: "test",
    src: "#",
  },
];

const list = document.querySelector(".header__nav");1
let currentLink = 0;

list.innerHTML = `<ul class="header__nav__list"> ${links.map((link, index) => {
    let activeLink = currentLink === index;
    return (`<li class="header__nav__item"><a class="header__nav__link ${activeLink ? "active" : ""}" onclick="currentLink = ${link.id - 1}">${link.name}</a></li></ul>`)
}).join("")}`
