import { useState } from 'react'

import styled from 'styled-components'

import logo from '../assets/images/logo.svg'

import SearchBar from '../components/SearchBar';
import searchIconSvg from '../assets/images/searchIcon.svg'


// STYLES
const Logo = styled.img`
    width: 20vh;
`

const NavStyled = styled.div`
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

function Navbar() {

    const [navActive, setNavActive] = useState(false);

    const toggleSearch = () => {
        setNavActive(!navActive)
    }


    return (
        <NavStyled navActive={navActive} style={{position: 'absolute', zIndex: 2}}>
            <Logo src={logo}/>
            <SearchIcon id="searchIconMobile" onClick={toggleSearch} src={searchIconSvg}/>
            <SearchBar id="searchBar" key="searchBar"/>
        </NavStyled>
    )
}

export default Navbar
