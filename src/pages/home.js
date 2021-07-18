import React, { useState, useEffect } from 'react'

import styled, { keyframes }from 'styled-components'

// COMPONENTES
import HeaderMovies from '../components/HeaderMovies'

import SearchBar from '../components/SearchBar';
import logo from '../assets/images/logo.svg'





const Wrapper = styled.div`
    /* height: 40%;    */
    width: 90%;
    height: 100%;
    position: relative;
    margin: 0 auto;
`

const Navbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4em 2em;
    box-sizing: border-box;  
`

const Logo = styled.img`
    width: 12em;
`

function Home() {

    const [headerImages, setHeaderImages] = useState([])


    

    return (
        <Wrapper>
            <HeaderMovies />
            {/* {headerImages.length !== 0 && <HeaderMovies imgs={headerImages} />} */}
        </Wrapper>
    )
}

export default Home;

