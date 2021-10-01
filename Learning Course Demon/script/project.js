"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt("How many films you watched?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("How many films you watched?", "");
    }
  },
  rememberMyfilms: function () {
    for (let i = 0; i < 2; i++) {
      getFilm();
      getRating();

      if (
        film != null &&
        rating != null &&
        film != "" &&
        rating != "" &&
        film.length < 50
      ) {
        personalMovieDB.movies[film] = rating;
        console.log("Done");
      } else {
        i--;
        console.log("Error");
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count <= 10) {
      alert("Watched to few movies!");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
      alert("You are typical movie lover!");
    } else if (personalMovieDB.count > 30) {
      alert("You are movie fan!!!");
    } else {
      alert("Error");
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Your favorite genre? ${i}`, "");
      while (personalMovieDB.genres == "" || personalMovieDB.genres == null) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre? ${i}`, "");
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favorite genre ${i + 1} is  ${item}!`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else if (personalMovieDB.private === false) {
      personalMovieDB.private = true;
    } else {
      console.log("Error");
    }
  },
};
let film;
let rating;

const getFilm = function () {
  film = prompt("Last watched film?", "");
  return film;
};

const getRating = function () {
  rating = +prompt("How will you rate it?", "");
  return rating;
};

function showMyDB(hidden) {
  if (!hidden) console.log(personalMovieDB);
}

showMyDB(personalMovieDB.private);

personalMovieDB.start();
