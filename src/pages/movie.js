import React, { useState } from 'react'

import { Link, useParams, useLocation } from 'react-router-dom'

import styled from 'styled-components'

// ASSETS
import logo from '../assets/images/logo.svg'
import searchIconSvg from '../assets/images/searchIcon.svg'
import SearchBar from '../components/SearchBar';

import lucaTest from '../assets/images/luka.jpg'

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

const PageContent = styled.div`
    display: flex;
    max-width: 100%;
    min-height: 80vh;
    flex-direction: row;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #fff;

`

const RightContent = styled.div`
    background-color: #fff;
    height: 100px;
    width: 100%;
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
            <PageContent>
                <div style={{backgroundColor: 'blue',width: '35%', height:'100%'}}>
                    test
                </div>
                <RightContent style={{width: '65%'}}>
                    <h1>test</h1>
                </RightContent>
            </PageContent>
        </Wrapper>
    )
}

export default Movie
