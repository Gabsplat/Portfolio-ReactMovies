import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import SearchBar from '../components/SearchBar';

import { Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// ASSETS
import logo from '../assets/images/logo.svg'
import lucaTest from "../assets/images/luka.jpg"
import avengersBg from "../assets/images/AvengersEndgame.jpg"
import mkBg from "../assets/images/Mk.jpg"
import searchIconSvg from '../assets/images/searchIcon.svg'

SwiperCore.use([Autoplay, Pagination, Navigation]);

// STYLES
const Logo = styled.img`
    width: 20vh;
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

const MovieTitle = styled.h1`
    font-size: 7vh;
    font-weight: 900;
    text-align: center;
    color: #FFF;
    padding: 0;
    margin-bottom: 3vh;

    @media screen and (max-width: 48em) {
        margin-bottom: 6vh;
        font-size: 5vh
    }
`

function HeaderMovies(props) {

    const [navActive, setNavActive] = useState(false);

    const movies = [
        {
            title: "Avengers: Endgame",
            background: avengersBg
        },
        {
            title: "Luca",
            background: lucaTest
        },
        {
            title: "Mortal Kombat X",
            background: mkBg
        }
    ];

    const toggleSearch = () => {
        setNavActive(!navActive)
    }

    return (
        <>
            <Navbar navActive={navActive} style={{position: 'absolute', margin: '0 auto', zIndex: 2}}>
                <Logo src={logo}/>
                <SearchIcon id="searchIconMobile" onClick={toggleSearch} src={searchIconSvg}/>
                <SearchBar id="searchBar" key="searchBar"/>
            </Navbar>
            <Swiper className="swiperHeader" key={1}  autoplay={{delay: 5000}} allowTouchMove={false} navigation pagination style={{height: '50vh', borderBottomRightRadius: 30, borderBottomLeftRadius: 30}}>
                {movies.map((movie, i) => {
                    return(
                        <SwiperSlide key={i}>
                            <div style={{position:'relative', display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: 'flex-end', height: '100%'}}>
                                <div style={{position: 'absolute', backgroundImage: `url(${movie.background})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8, height: "100%", width: "100%", zIndex: -1}}></div>
                                <Link to={{
                                        pathname: `/movie/${123}`,
                                        state: {
                                            title: "Luca"
                                        }
                                    }}
                                    
                                    style={{textDecoration: 'none'}}
                                >
                                    <MovieTitle>{movie.title}</MovieTitle>
                                </Link>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default HeaderMovies
