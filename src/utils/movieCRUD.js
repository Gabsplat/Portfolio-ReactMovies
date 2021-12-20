import { API_KEY } from './api'

export const getTopRatedMovies = () => {
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                return response.json();
            })
            .catch(e => {
                // if error occurs on fetch..
                console.log('Error')
                console.log(e);
            });
}

export const getPopularMovies = () => {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                return response.json();
            })
            .catch(e => {
                // if error occurs on fetch..
                console.log('Error')
                console.log(e);
            });
}

export const getUpcomingMovies = () => {
    return fetch(` https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                return response.json();
            })
            .catch(e => {
                // if error occurs on fetch..
                console.log('Error')
                console.log(e);
            });
}


export const getMovieById = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
}

export const getTrailerId = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        let filteredData = data.results.find(obj => obj.site === "YouTube" && obj.type === "Trailer");
        if(filteredData === undefined) {
            return null;
        } else{
            return filteredData.key;
        }
    })
    .catch(err => {
        console.log(err);
    });
}

export const searchMovie = (title, page) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=${page}&include_adult=false`)
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
}