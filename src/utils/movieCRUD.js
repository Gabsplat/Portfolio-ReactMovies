import API_KEY from './api'

export const getMovieById = (id) => {
    return fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + API_KEY + "&language=en-US")
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
}

export const getTrailerId = (id) => {
    return fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=" + API_KEY + "&language=en-US")
    .then(response => {
        return response.json();
    })
    .then(data => {
        let filteredData = data.results.find(obj => obj.site === "YouTube" && obj.type === "Trailer");
        if(filteredData === undefined) {
            return "dQw4w9WgXcQ";
        } else{
            return filteredData.key;
        }
    })
    .catch(err => {
        console.log(err);
    });
}

export const searchMovie = (title) => {
    return fetch("https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&language=en-US&query=" + title + "&page=1&include_adult=false")
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
}