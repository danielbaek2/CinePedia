//TMDB

const API_KEY = 'api_key=804511dd3d7ef6d6dcdd03d0d39cb243';
const BASE_URL = 'https://api.themoviedb.org/3/';
const SEARCH = '/search/movie?';
const TRENDING = 'trending/movie/week?language=en-US&'
const QUERY = 'query='
const TRENDING_URL = BASE_URL + TRENDING + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');

getMovies(TRENDING_URL);

// function getSearch() {
//     document.getElementById("baba").innerHTML = document.getElementById("search-bar").value;
//     return document.getElementById("search-bar").value;
// }

// function searchFilm(url) {
//     var searchTerm = getSearch();
//     document.getElementById("baba").innerHTML = searchTerm;
//     const response = fetch(url);
//     const data = response.json();
//     const movie = data.results[0];
// }

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        getTrending(data.results);
    })
}

function getTrending(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, overview, vote_average} = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${IMG_URL+poster_path}" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="green">${vote_average}</span>
            </div>

            <div class="plot">

                <h3>Overview</h3>
                ${overview}
            </div>
            `
        main.appendChild(movieElement);
    })
}
