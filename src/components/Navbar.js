import { useState } from 'react'

import styled from 'styled-components'

import logo from '../assets/images/logo.svg'

import SearchBar from '../components/SearchBar';

import { IoSearch as SearchIcon } from 'react-icons/io5';
import { IconContext } from "react-icons";

import { Link } from 'react-router-dom';

// STYLES
const Logo = styled.h1`
    font-size: 4em;
    font-weight: 800;
    margin: 0;
    padding: 0;
    color: white;
    underline: none;
`

const NavStyled = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4em 2em;
    box-sizing: border-box;  
    min-height: 100%;
    height: auto;
    z-index: 3;
    position: ${props => props.isAbsolute ? 'absolute' : props.isSticky ? 'sticky' : 'relative'};
    top: 0;
    left: 0;

    & #searchIconMobile{
        display: none;
    }

    @media screen and (max-width: 1024px){
        flex-wrap: wrap;
        padding: 3vh 2vh;
        
        & #searchIconMobile{
            display: block;
        }

        
    }
`

function Navbar(props) {

    const [navActive, setNavActive] = useState(false);

    const toggleSearch = () => {
        setNavActive(!navActive)
    }

    return (
        <NavStyled isSticky={props.sticky} isAbsolute={props.absolute} navActive={navActive} style={{zIndex: 2}}>
            <Link style={{ textDecoration: 'none' }} to="/">
                <Logo>Moove</Logo>
            </Link>
            <IconContext.Provider value={{color: 'white', size: '2em', style: {cursor: 'pointer'}}}>
                <SearchIcon id="searchIconMobile" onClick={toggleSearch}/>
            </IconContext.Provider>
            <SearchBar navActive={navActive} id="searchBar" key="searchBar"/>
        </NavStyled>
    )
}

export default Navbar
