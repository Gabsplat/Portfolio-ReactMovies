import React, { useState, useEffect } from 'react';

import styled, { keyframes }from 'styled-components';

// COMPONENTES
import HeaderMovies from '../components/HeaderMovies';
import CardCarousel from '../components/CardCarousel';
import Navbar from '../components/Navbar';

import SearchBar from '../components/SearchBar';
import logo from '../assets/images/logo.svg';

const Wrapper = styled.div`
    width: 90%;
    position: relative;
    margin: 0 auto;
`

const Title = styled.h1`
    font-size: 4vh;
    font-weight: 900;
    color: #FFF;
    padding: 0;
    margin-bottom: 0;

    @media screen and (max-width: 1024px) {
        font-size: 3vh;
    }
`

function Home() {
    const [movies, setMovies] = useState([]);
    const [movies2, setMovies2] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=2124e5c8e952a88bda6db8c13e5846ea&language=en-US&page=1")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setMovies(data.results);
            })
            .catch(e => {
                // if error occurs on fetch..
                console.log('Error')
                console.log(e);
            });

        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=2124e5c8e952a88bda6db8c13e5846ea&language=en-US&page=1")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setMovies2(data.results);
            })
            .catch(e => {
                // if error occurs on fetch..
                console.log('Error')
                console.log(e);
            });
    },[]);

    return (
        <>
            <Wrapper>
                <HeaderMovies movies={movies.slice(0, 3)}/>
                <Title>Popular movies</Title>
            </Wrapper>
            <CardCarousel movies={movies.slice(0, 10)}/>
            <Wrapper>
                <Title>Top Rated movies</Title>
            </Wrapper>
            <CardCarousel movies={movies2.slice(0, 10)}/>
        </>
    )
}

export default Home;

