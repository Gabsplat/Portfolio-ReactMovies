import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components';

import { searchMovie } from '../utils/movieCRUD'

const Wrapper = styled.main`
    display: flex;
    width: 86%;
    position: relative;
    margin: 0 auto;
`

const Grid = styled.main`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
`

const CARD_WIDTH = "w342";

const SearchCard = styled.div`
    height: 300px;
    width: 200px;
    cursor: pointer;
    border-radius: 2.5vh;
    background: url(${(props) => {return 'https://image.tmdb.org/t/p/' + CARD_WIDTH + props.coverImage}});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const SearchCardNoBg = styled.div`
    height: 300px;
    width: 200px;
    cursor: pointer;
    border-radius: 2.5vh;
    background: #ffffff31;
    color: white;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2%;
    box-sizing: border-box;
`

function Search() {
    const [movieArray, setMovieArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        searchMovie(params.query)
            .then(data =>{
                setMovieArray(data.results);
                setIsLoading(false);
                console.log(data.results);
            })
    }, params);


    return (
        <Wrapper>
            {!isLoading && movieArray.length !== 0 ?
                <Grid>
                    {movieArray.map(movie => {
                        console.log("Movie poster path: ", movie.poster_path);
                        return <Card title={movie.title} movieId={movie.id} coverImg={movie.poster_path}/>
                    })}
                </Grid>
            :
                <p style={{width: '100%', color: 'white'}}>There are no results for that query..</p>
                // <h1 style={{width: '100%', color: 'white'}}>There are no results for that query..</h1>
            }
        </Wrapper>
    )
}

const Card = ({ title, movieId: id, coverImg }) => {

    const history = useHistory();

    if(coverImg !== null){
        return(
            <SearchCard id="card" onClick={() => {history.push(`/movie/${id}`)}} coverImage={coverImg}/>
            )
    } else{
        return(
            <SearchCardNoBg>
                {title}
            </SearchCardNoBg>
        )        
    }
    
}

export default Search
