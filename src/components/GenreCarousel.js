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

SwiperCore.use([Pagination,Navigation]);

const GenreButton = styled.div`
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    border-radius: 2.5vh;
    background: rgb(26, 29, 41);
    box-shadow: inset 0px 0px 0px 3px rgba(255, 255, 255, 0.76);  
    color: white;
    font-family: 'Nunito';
    font-weight: 600;
`

const SwiperWrapper = styled.div`
    margin: 0;
    margin-top: 2vh;
    width: 100%;
`

function CardCarousel(props) {
    const history = useHistory();

    return (
        <SwiperWrapper>
            <Swiper 
                allowTouchMove={true} 
                watchSlidesVisibility={true} 
                navigation 
                spaceBetween={10}
                direction={'horizontal'}
                className={"swiperGenres"}
                slidesPerView={"auto"}
                breakpoints={{
                    992:{
                        allowTouchMove: false,
                        spaceBetween: 15,
                    }
                }}
            >
                <SwiperSlide className="genreSwiper">
                    <GenreButton id="car">
                        Action
                    </GenreButton>
                </SwiperSlide>
                <SwiperSlide className="genreSwiper">
                    <GenreButton id="car">
                        Action
                    </GenreButton>
                </SwiperSlide>
                <SwiperSlide className="genreSwiper">
                    <GenreButton id="car">
                        Action
                    </GenreButton>
                </SwiperSlide>
                <SwiperSlide className="genreSwiper">
                    <GenreButton id="car">
                        Action
                    </GenreButton>
                </SwiperSlide>
                <SwiperSlide className="genreSwiper">
                    <GenreButton id="car">
                        Action
                    </GenreButton>
                </SwiperSlide>
                <SwiperSlide className="genreSwiper">
                    <GenreButton id="car">
                        Action
                    </GenreButton>
                </SwiperSlide>
            </Swiper>
        </SwiperWrapper>
    )
}

export default CardCarousel