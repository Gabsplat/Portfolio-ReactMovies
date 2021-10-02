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
`

function Home() {

    return (
        <>
            <Wrapper>
                <HeaderMovies />
                <Title>Popular movies</Title>
            </Wrapper>
            <CardCarousel />
        </>
    )
}

export default Home;

