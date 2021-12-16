import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

import SearchBar from '../components/SearchBar';

import { Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
`

function HeaderMovies(props) {
    const history = useHistory();
    return (
        <>
            <Swiper className="swiperHeader" key={1}  autoplay={{delay: 5000}} allowTouchMove={false} navigation pagination style={{height: '50vh', zIndex: 1, borderBottomRightRadius: 30, borderBottomLeftRadius: 30}}>
                {props.movies.map((movie, i) => {
                    return(
                        <SwiperSlide key={i}>
                            <Container>
                                <div style={{position: 'absolute', backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + movie.backdrop_path})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: .8, height: "100%", width: "100%", zIndex: -1}}></div>
                                <h1 onClick={() => { history.push(`/movie/${movie.id}`, { movieObj: movie }) }} style={{fontSize: '2.3em',color: '#fff', cursor: 'pointer', textAlign: 'center', margin: 0, textDecoration: 'none', marginBottom: '.7em', fontFamily: 'Asap'}}>{movie.title.toUpperCase()}</h1>
                            </Container>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default HeaderMovies
