const KEY = "63ef9c1da41cd3c843dcec9ed2264b73";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const search_api =`https://api.themoviedb.org/3/search/movie?&api_key=${KEY}&query=`;
const mainEl = document.querySelector("#main");
const buttonEl = document.querySelector(".button");
const searchEl = document.querySelector("#input");
buttonEl.addEventListener("click",searchMovie)
function fetchMovies(url) {
  fetch(url)
  .then((response) => response.json())
  .then((data) => movies(data.results));
}
fetchMovies(API_URL);

function movies(movies) {
  mainEl.innerHTML = "";
  movies.forEach((movie) => {
    const {poster_path,overview,original_title,release_date} = movie;
    const genre = document.createElement("div");
    genre.innerHTML = `
    <div class="movie_container">
    <div class="movie">
        <img src="${IMG_PATH + poster_path}" alt="" class="movie_img">
        <div class="overview">
        <h4 >${overview}</h4>
        </div>
    </div>
    </div>
    <div class="title_container">
    <h4 class="movie_title">${original_title}</h4>
    <p class="release_date">${release_date}</p>
    </div>
    `;
    mainEl.appendChild(genre);
  })
};
function searchMovie() {
  const search = searchEl.value;
  if(search.length !== 0){
    fetchMovies(search_api + search);
  } else {
    return fetchMovies(API_URL);

  }
};
searchMovie();
