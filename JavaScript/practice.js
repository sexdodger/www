let numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
console.log(personalMovieDB.count);
const movie = prompt("Один из последних просмотренных фильмов?", "");
const rate = prompt("Как вы его оцените?", "");
personalMovieDB.movies[movie] = rate;
console.log(personalMovieDB);
