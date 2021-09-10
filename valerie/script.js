"use strict";

const numberOfFilms = +prompt("How many films have you watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {
    // movies. [lastWatchedMovie],
    // movies. [movieRating]
  },
  actors: {},
  genres: [],
  private: false,
};

const lastWatchedMovie = prompt("what was your last watched movie ?", ""),
  movieRating = +prompt("how would you rate the movie ?", ""),
  lastWatchedMovie2 = prompt("what was your last watched movie ?", ""),
  movieRating2 = +prompt("how would you rate the movie ?", "");

personalMovieDB.movies[lastWatchedMovie] = movieRating;
personalMovieDB.movies[lastWatchedMovie2] = movieRating2;
console.log(personalMovieDB);
console.log(movieRating + movieRating2 / 2);
