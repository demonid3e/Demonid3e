/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const removeAdv = document.querySelector(".promo__adv");
const movieList = document.querySelectorAll(".promo__interactive-list");

const movieDB = {
  movies: [
    "Скотт Пилигрим против...",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Ааа",
  ],
};

movieDB.movies.sort();
removeAdv.style.visibility = "hidden";

function makeFilm() {
  movieList.forEach((element) => {
    element.innerHTML = "";
  });
  movieDB.movies.forEach((e, i) => {
    const createList = document.querySelector(".promo__interactive-list");
    const add = document.createElement("LI");
    add.className = "promo__interactive-item";
    add.innerHTML = `${i + 1} ${e}  <div class="delete"></div>`;
    createList.appendChild(add);

    console.log(e);
  });
}

makeFilm();
