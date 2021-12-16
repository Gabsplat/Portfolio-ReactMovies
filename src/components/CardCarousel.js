import {useEffect, useState} from 'react'

/* EXTERNAL LIBS */
import { Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, { Navigation, Pagination } from 'swiper';
import styled from 'styled-components'

import { Link, useHistory } from 'react-router-dom'

/* EXTERNAL STYLES */
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

/* ASSETS */
import lucaTest from '../assets/images/luka.jpg'

SwiperCore.use([Pagination,Navigation]);

const CARD_WIDTH = 'w342';

const CardDiv = styled.div`
    height: 100%;
    border-radius: 2.5vh;
    background: url(${(props) => {return 'https://image.tmdb.org/t/p/' + CARD_WIDTH + props.coverImage}});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const SwiperWrapper = styled.div`
    margin: 0;
    width: 100%;
`

function CardCarousel(props) {
    const history = useHistory();

    return (
        <>
            <SwiperWrapper>
                <Swiper 
                    allowTouchMove={true} 
                    watchSlidesVisibility={true} 
                    loop={true} 
                    loopedSlides={19}
                    watchOverflow={true}
                    centeredSlides={true}
                    navigation 
                    initialSlide={1}
                    spaceBetween={10}
                    className={"mySwiper swiperCards"}
                    slidesPerView={"auto"}
                    breakpoints={{
                        992:{
                            centeredSlides: false,
                            allowTouchMove: false,
                            spaceBetween: 15
                        }
                    }}
                >
                    {props.movies.map((movie, i) =>{
                        return(
                            <SwiperSlide key={i} onClick={() => {history.push(`/movie/${movie.id}`, { movieObj: movie })}} className="cardSwiper">
                                <CardDiv id="card" coverImage={movie.poster_path}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </SwiperWrapper>
        </>
    )
}

export default CardCarousel