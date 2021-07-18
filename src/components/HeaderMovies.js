import React, { useState, useEffect } from 'react'

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

SwiperCore.use([Autoplay, Pagination, Navigation]);

// STYLES
const Logo = styled.img`
    width: 12em;
`

const Navbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4em 2em;
    box-sizing: border-box;  
`

const MovieTitle = styled.h1`
    font-size: clamp(2em, 3em, 4em);
    font-weight: 900;
    color: #FFF;
    padding: 0;
    margin-bottom: 0;
`

function HeaderMovies(props) {

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

    return (
        <>
            <Navbar style={{position: 'absolute', margin: '0 auto', zIndex: 2}}>
                <Logo src={logo}/>
                <SearchBar key="searchBar"/>
            </Navbar>
            <Swiper key={1}  autoplay={{delay: 5000}} allowTouchMove={false} navigation pagination style={{height: '50%', borderBottomRightRadius: 30, borderBottomLeftRadius: 30}} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                {movies.map(movie => {
                    return(
                        <SwiperSlide>
                            <div style={{position:'relative', display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: 'flex-end', height: '100%'}}>
                                <div style={{position: 'absolute', backgroundImage: `url(${movie.background})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8, height: "100%", width: "100%", zIndex: -1}}></div>
                                <MovieTitle style={{marginBottom: '1%'}}>{movie.title}</MovieTitle>
                            </div>
                        </SwiperSlide>
                    )
                })}
                {/* <SwiperSlide>
                    <div style={{position:'relative', display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: 'flex-end', height: '100%'}}>
                        <div style={{position: 'absolute', backgroundImage: `url(${avengersBg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8, height: "100%", width: "100%", zIndex: -1}}></div>
                        <MovieTitle style={{marginBottom: '1%'}}>Avengers</MovieTitle>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{position:'relative', display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: 'flex-end', height: '100%'}}>
                        <div style={{position: 'absolute', backgroundImage: `url(${lucaTest})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8, height: "100%", width: "100%", zIndex: -1}}></div>
                        <MovieTitle style={{marginBottom: '1%'}}>Luca</MovieTitle>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{position:'relative', display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: 'flex-end', height: '100%'}}>
                        <div style={{position: 'absolute', backgroundImage: `url(${mkBg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8, height: "100%", width: "100%", zIndex: -1}}></div>
                        <MovieTitle style={{marginBottom: '1%'}}>Mortal Kombat</MovieTitle>
                    </div>
                </SwiperSlide> */}
                

            </Swiper>
            {/* <HeaderMovies /> */}
        </>
    )
}

export default HeaderMovies
