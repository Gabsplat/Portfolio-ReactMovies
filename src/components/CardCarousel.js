import React from 'react'

/* EXTERNAL LIBS */
import { Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, { Navigation, Pagination } from 'swiper';
import styled from 'styled-components'

import { Link } from 'react-router-dom'

/* EXTERNAL STYLES */
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

/* ASSETS */
import lucaTest from '../assets/images/luka.jpg'

SwiperCore.use([Pagination,Navigation]);

const CardDiv = styled.div`
    height: 33vh;
    border-radius: 2.5vh;
    background: url(${(props) => {return props.coverImage}});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const SwiperWrapper = styled.div`
    margin: 0;
    width: 100%;

`

let cardName = 1

function CardCarousel() {
    return (
        <SwiperWrapper>
            <Swiper slidesPerView={'auto'} zoom={{maxRatio: 5}} watchSlidesVisibility={true} spaceBetween={10} loop={true} navigation centeredSlides={true} className="mySwiper swiperCards">
                {([0, 1, 2, 3, 4, 5, 6, 7, 8]).map((el, i) =>{
                    return(
                    <SwiperSlide key={i} className="cardSwiper"><Link to={{
                        pathname: `/movie/${123}`,
                        state: {
                            title: "Luca"
                        }
                    }}>
                        <CardDiv coverImage={lucaTest}/></Link>
                    </SwiperSlide>
                    )})
                }
            </Swiper>
        </SwiperWrapper>
    )
}

export default CardCarousel