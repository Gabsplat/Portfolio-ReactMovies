import React, { useState } from 'react'

import { Link, useParams, useLocation } from 'react-router-dom'

import styled from 'styled-components'

// ASSETS
import logo from '../assets/images/logo.svg'
import searchIconSvg from '../assets/images/searchIcon.svg'
import SearchBar from '../components/SearchBar';

// STYLES
const Logo = styled.img`
    width: 20vh;
`

const Wrapper = styled.div`
    width: 90%;
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

    & #searchIconMobile{
        display: none;
    }

    @media screen and (max-width: 48em){
        flex-wrap: wrap;
        /* padding: 1.4em 1em; */
        padding: 3vh 2vh;


        & .searchBody{
            width: 100%;
            display: ${props => {
                if(props.navActive){
                    return "flex"
                }
                return "none"
            }};
        }
        
        & #searchIconMobile{
            display: block;
        }

        
    }
`

const SearchIcon = styled.img`
    width: 5vh;
`

function Movie(props) {
    const [navActive, setNavActive] = useState(false);

    const toggleSearch = () => {
        setNavActive(!navActive)
    }

    const { movieId } = useParams();
    const location = useLocation();
    const movieInfo = location.state;
    return (
        <Wrapper>
            <Navbar navActive={navActive}>
                <Link to="/"><Logo src={logo}/></Link>
                <SearchIcon id="searchIconMobile" onClick={toggleSearch} src={searchIconSvg}/>
                <SearchBar id="searchBar" key="searchBar"/>
            </Navbar>
            <h1>Peli:</h1>
            <h1>{movieInfo.title}</h1>
            <h1>{movieId}</h1>
        </Wrapper>
    )
}

export default Movie
