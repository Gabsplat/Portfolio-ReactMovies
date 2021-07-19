import React, { useState, useEffect } from 'react'

import styled, { keyframes }from 'styled-components'

// COMPONENTES
import HeaderMovies from '../components/HeaderMovies'

import SearchBar from '../components/SearchBar';
import logo from '../assets/images/logo.svg'





const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    position: relative;
    margin: 0 auto;
`

function Home() {

    return (
        <Wrapper>
            <HeaderMovies />
            {/* {headerImages.length !== 0 && <HeaderMovies imgs={headerImages} />} */}
        </Wrapper>
    )
}

export default Home;

