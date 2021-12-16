import styled from 'styled-components';

const CARD_WIDTH = 'w342';

export const SearchCard = styled.div`
    height: 30vh;
    width: 15vw;
    border-radius: 2.5vh;
    background: url(${(props) => {return 'https://image.tmdb.org/t/p/' + CARD_WIDTH + props.coverImage}});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export const SwiperWrapper = styled.div`
    margin: 0;
    width: 100%;
`