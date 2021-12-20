import React, { useState, useEffect } from 'react';

import styled, { keyframes }from 'styled-components';

import { getUpcomingMovies, getTopRatedMovies, getPopularMovies } from '../utils/movieCRUD';

// COMPONENTES
import HeaderMovies from '../components/HeaderMovies';
import CardCarousel from '../components/CardCarousel';
import GenreCarousel from '../components/GenreCarousel';

const Main = styled.main`
`

const Wrapper = styled.div`
    width: 90%;
    position: relative;
    margin: 0 auto;
`

const Title = styled.h1`
    font-size: 3vh;
    font-weight: 900;
    color: #FFF;
    padding: 0;
`

const MovieRow = ({ title, movie }) => {

    return(
        <>
            <Wrapper>
                <Title style={{marginTop: '5vh', marginBottom: '1vh'}}>{title}</Title>
            </Wrapper>
            <CardCarousel movies={movie.slice(0, 10)} />
        </>
    )
}

function Home() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {

        getPopularMovies()
            .then(data => {
                setPopularMovies(data.results);
            });

        getUpcomingMovies()
            .then(data => {
                setUpcomingMovies(data.results);
            });

        getTopRatedMovies()
            .then(data => {
                setTopRatedMovies(data.results);
            });
    },[]);

    return (
        <Main>
            <Wrapper>
                <HeaderMovies movies={popularMovies.slice(0, 3)}/>
                {/* <GenreCarousel /> */}
            </Wrapper>
            <MovieRow title={'Popular movies'} movie={popularMovies}/>
            <MovieRow title={'Upcoming movies'} movie={upcomingMovies}/>
            <MovieRow title={'Top Rated movies'} movie={topRatedMovies}/>
        </ Main>
    )
}

export default Home;

