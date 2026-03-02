const links = [
  { id: 1, name: "Новости", src: "#" },
  { id: 2, name: "Тест 1", src: "#" },
  { id: 3, name: "Тест 2", src: "#" },
];

const list = document.querySelector(".header__nav");

// 1. Рендерим список один раз
list.innerHTML = `
  <ul class="header__nav__list">
    ${links.map((link, index) => `
      <li class="header__nav__item">
        <a href="${link.src}" class="header__nav__link ${index === 0 ? "active" : ""}">
          ${link.name}
        </a>
      </li>
    `).join("")}
  </ul>
`;

// 2. Добавляем один обработчик на весь список (делегирование)
list.addEventListener("click", (event) => {
  const target = event.target;

  // Проверяем, что кликнули именно по ссылке
  if (target.classList.contains("header__nav__link")) {
    // Удаляем active у старой ссылки
    list.querySelector(".active")?.classList.remove("active");
    
    // Добавляем active новой
    target.classList.add("active");
  }
});