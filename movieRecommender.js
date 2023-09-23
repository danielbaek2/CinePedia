//TMDB

const API_KEY = '804511dd3d7ef6d6dcdd03d0d39cb243';
const BASE_URL = 'https://api.themoviedb.org/3/';
const SEARCH = '/search/movie?';
const QUERY = 'query=';
const ADULT = '&include_adult=false';
const LANGUAGE = '&language=';
const PAGE = '&page=1';

document.getElementById("search-button").addEventListener("click", getSearch);

function getSearch() {
    document.getElementById("baba").innerHTML = document.getElementById("search-bar").value;
    return document.getElementById("search-bar").value;
}

function searchFilm() {
    var searchTerm = getSearch();
    document.getElementById("baba").innerHTML = searchTerm;
    console.log(searchTerm);
    const response = fetch(BASE_URL + SEARCH + QUERY + searchTerm + ADULT + LANGUAGE + PAGE + API_KEY);
    const data = response.json();
    const movie = data.results[0];
}

searchFilm();
