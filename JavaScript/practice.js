let numberOfFilms;
function firstQuestion() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
firstQuestion();
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
function rememberMyFilms () {
for (let i = 0; i < 1; i++) {
  const movie = prompt("Один из последних просмотренных фильмов?", "");
  const rate =  prompt("Как вы его оцените?", "");
  if (movie != null && rate != null && movie != "" && rate != "" && movie.length < 50 && rate.length < 50) {
    personalMovieDB.movies[movie] = rate;
  } else {
    console.log("error");
    i--;
  }
}
}
rememberMyFilms();
console.log(personalMovieDB);
function showLevel() {
if (personalMovieDB.count <= 10 && personalMovieDB.count > 0) {
  alert("Просмотрено слишком мало фильмов");
} else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
   alert("вы обычный зритель");
} else if (personalMovieDB.count >= 30) {
  alert("Вы - киноман");
} else {
  alert("Произошла ошибка");
}
}
showLevel();
function showMyDB() {
  if (personalMovieDB.privat == false) {
  console.log(personalMovieDB);
}
}
showMyDB();
function favouriteGenres() {
  for (let i = 1; i <= 3; i++) {
  personalMovieDB.genres[i - 1] = prompt("Ваш любимый жанр?");
}
}
favouriteGenres();
console.log(personalMovieDB.genres);
