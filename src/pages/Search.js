import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components';

import { FaArrowDown as ArrowDown } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import { searchMovie } from '../utils/movieCRUD'

const Wrapper = styled.main`
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
    transition: transform .1s ease-in-out;

    &:hover{
        transition: transform .1s ease-in-out;
        transform: scale(.98);
    }
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

    transition: transform .1s ease-in-out;

    &:hover{
        transition: transform .1s ease-in-out;
        transform: scale(.98);
    }
`

const MoreButton = styled.button`
    border: none;
    margin: 0;
    padding: 0;
    overflow: visible;
    
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    cursor: pointer;

    line-height: normal;
    -webkit-appearance: none;

    font-weight: 700;
    margin-top: 2vh;
    height: 4vh;
    border-radius: 2.5vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.50);

    transition: transform .2s ease-in-out;

    &:hover{
        transition: transform .2s ease-in-out;
        transform: scale(.98);
    }
`

function Search() {
    const [movieArray, setMovieArray] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [amountPages, setAmountPages] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [foundResults, setFoundResults] = useState(false);
    const [animationActive, setAnimationActive] = useState(false);
    const [beingClicked, setBeingClicked] = useState(false);

    const params = useParams();

    useEffect(() => {
        console.log(movieArray);
    }, [movieArray])

    useEffect(() => {
        setFoundResults(false);

        if(currentPage > 1){
            setCurrentPage(1);
        }
        searchMovie(params.query, 1)
            .then(data =>{
                setMovieArray(data.results);
                const totalPages = data.total_pages;
                if(totalPages > 0){
                    setFoundResults(true)
                }
                setAmountPages(totalPages);
                setIsLoading(false);
            })
    }, [params]);

    const fetchNextPage = () => {
        if(!beingClicked){
            searchMovie(params.query, currentPage+1)
                .then(data =>{
                    setMovieArray([...movieArray, ...data.results])
                })
            setAnimationActive(true);
            setCurrentPage(currentPage+1);
        }
    }

    return (
        <Wrapper>
            {!isLoading && foundResults ?
                <>
                    <Grid>
                        {movieArray.map(movie => {
                            return <Card title={movie.title} movieId={movie.id} coverImg={movie.poster_path}/>
                        })}
                    </Grid>
                    {amountPages > currentPage  && 
                        <MoreButton id={animationActive ? 'fetchMoreButton' : ''} onAnimationEnd={() => {setAnimationActive(false); setBeingClicked(false)}} onClick={fetchNextPage}>
                            See more results 
                            <IconContext.Provider value={{color: '#cabcbb', size: '1em',style: {cursor: 'pointer',  marginLeft: '1em'}}}>
                                <ArrowDown />
                            </IconContext.Provider>
                        </MoreButton>}
                </>
            :
                <p style={{width: '100%', color: 'white'}}>There are no results for that query..</p>
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
            <SearchCardNoBg id="card" onClick={() => {history.push(`/movie/${id}`)}}>
                {title}
            </SearchCardNoBg>
        )        
    }
    
}

export default Search
