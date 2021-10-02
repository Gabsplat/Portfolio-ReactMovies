import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import SearchBar from '../components/SearchBar';

import { Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// ASSETS
import lucaTest from "../assets/images/luka.jpg"
import avengersBg from "../assets/images/AvengersEndgame.jpg"
import mkBg from "../assets/images/Mk.jpg"

SwiperCore.use([Autoplay, Pagination, Navigation]);

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
                                    <h1>{movie.title}</h1>
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
