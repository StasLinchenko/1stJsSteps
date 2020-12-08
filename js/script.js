const numberOfFilms = +prompt("how many movies u watched?", '')

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('last watched movie',""),
      b = prompt('review movie from 1 to 10',""),
      c = prompt('last watched movie',""),
      d = prompt('review movie from 1 to 10');

personalMovieDb.movies[a]=b;
personalMovieDb.movies[c]=d;

console.log(personalMovieDb);
