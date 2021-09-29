// "use strict";

// // let numberOfFilms;
// let film;
// let rating;

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: true,
//   start: function () {
//     personalMovieDB.count = +prompt("How many films have you watched?", "");
//     while (
//       personalMovieDB.count == "" ||
//       personalMovieDB.count == null ||
//       isNaN(personalMovieDB.count)
//     ) {
//       personalMovieDB.count = +prompt("How many films have you watched?", "");
//     }
//   },
//   detectPersonalLevel: function () {
//     if (personalMovieDB.count >= 30) {
//       alert("Your are Kinoman");
//     } else if (personalMovieDB.count < 10) {
//       alert("You watch too few films");
//     } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
//       alert("Your are classic viewer");
//     } else {
//       console.log("Error numberoffilms");
//       console.log(personalMovieDB.count);
//     }
//   },

//   toggleVisibleMyDB: function () {
//     if (personalMovieDB.private) {
//       personalMovieDB.private = false;
//     } else {
//       personalMovieDB.private = true;
//     }
//   },
//   writeYourGenres: function () {
//     for (let i = 0; i < 3; i++) {
//       let askGenres = prompt(`Your Favorit genre number ${i + 1}?`, "");
//       while (askGenres == "" || askGenres == null) {
//         askGenres = prompt(`Your Favorit genre number ${i + 1}?`, "");
//       }
//       personalMovieDB.genres[i] = askGenres;
//     }
//     personalMovieDB.genres.forEach((genre, number) => {
//       console.log(`Favorite genre ${number + 1} is ${genre}`);
//     });
//   },

//   rememberMyfilms: function () {
//     const getFilm = function () {
//       film = prompt("Last watched film?", "");
//       return film;
//     };

//     const getRating = function () {
//       rating = +prompt("How will you rate it?", "");
//       return rating;
//     };
//     for (let i = 0; i < 2; i++) {
//       getFilm();
//       getRating();
//       console.log(i);

//       if (
//         film != null &&
//         rating != null &&
//         film.length < 50 &&
//         film != "" &&
//         rating != ""
//       ) {
//         personalMovieDB.movies[film] = rating;
//         console.log("Film added");
//       } else {
//         console.log("Error");

//         i--;
//       }
//     }
//   },

//   showMyDB: function (hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
// };
// //end

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyfilms();
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
