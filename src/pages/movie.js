import React, { useEffect, useState } from 'react'


// External Libs
import { useLocation, useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import ContentLoader from 'react-content-loader'
import Modal from 'react-modal';

// ASSETS
import { IconContext } from 'react-icons'
import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'
import { getMovieById, getTrailerId } from '../utils/movieCRUD'

// STYLES
const Wrapper = styled.div`
    width: 86%;
    position: relative;
    margin: 0 auto;
`

const PageContent = styled.main`
    display: flex;
    height: 79vh;
    min-height: 79vh;
    flex-direction: row;
    box-sizing: border-box;
    color: white;
    width: 100%;

    @media screen and (max-width: 1024px) {
        height: 100%;
        flex-direction: column;
    }
`


const LeftContent = styled.aside`
    width: 100%;
    height: 30%;
    flex: 0 0 auto;
    border-radius: .8em;

    @media screen and (min-width: 1024px) {
        background-size: cover;
        background-position: center;
        width: 30%;
        height: 100%;
    }
`

const RightContent = styled.section`
    position: relative;
    padding: 1em 2em;
    background: linear-gradient(to right, #4425B5, #7551F5);
    border-radius: .8em;
    margin-left: 2%;
    width: 68%;
    height: auto;
    box-sizing: border-box;

    

    @media screen and (max-width: 1024px) {
        margin-top: 1.25rem;
        margin-left: 0;
        width: 100%;
    }
`

const ColoredBadge = styled.a`
    font-size: 1em;
    padding: 5px 8px;
    background-color: ${(props) => {return props.color}};
    margin-top: 2%;
    color: ${(props) => {return props.textColor}};
    font-weight: 900;
    border-radius: 12px;
    display: inline-block;

    & *{
        display: inline-block;
        margin: 0;
    }

`

const GenreBadge = styled.div`
    font-family: 'Asap';
    font-size: 1em;
    padding: 5px 8px;
    margin-left: 1%;
    height: 20px;
    background-color: #0F0B1E;

    word-break: keep-all;

    font-weight: 900;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    & *{
        margin: auto;
    }

`

const TrailerButton = styled.button`
    position: absolute;
    bottom: 2%;
    right: 2%;
    padding: .5em .7em;
    background-color: #0F0B1E;
    border: 0;
    border-radius: .8em;
    color: white;
    font-weight: 900;
    font-size: 1.5em;
    cursor: pointer;
    display: block;
    transition: all .3s;

    &:hover{
        transition: all .2s;
        transform: scale(.9);
    }

    @media screen and (max-width: 1024px) {
        margin-top: .5rem;
        position: relative;
        margin-left: auto;
        bottom: 0;
        right: 0;
    }
`

const BodyText = styled.p`
    margin: 0;
    width: 100%;
    margin-bottom: 2vh;
    
    @media screen and (min-width: 500px) {
        width: 65%;
        margin-bottom: 0;
    }
`

const Genres = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 2vh;
    margin-bottom: 2vh;
    
    @media screen and (min-width: 500px) {
        margin-top: 1vh;
        margin-bottom: 2%;
    }
`

Modal.setAppElement('#root');

function Movie(props) {
    const [movie, setMovie] = useState({});
    const [trailerId, setTrailerId] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [isImageLoading, setImageLoading] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false);

    const location = useLocation();
    const history = useHistory();
    const params = useParams();

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
    setIsOpen(false);
    }
    
    useEffect(() => {
        let id;
        if(location.state === undefined){
            id = params.movieId;
        } else{
            id = location.state.movieObj.id;
        }

        getMovieById(id)
            .then(data => {
                setMovie(data);
                setLoading(false);
            }); 
        
        getTrailerId(id)
            .then(data => {
                setTrailerId(data);
            }); 
    }, []);
    
    return (
        <Wrapper>
            <PageContent>
                <LeftContent>
                    {isImageLoading &&
                    <ContentLoader style={{width: '100%', height: '100%', borderRadius: '.8em'}}
                        speed={2}
                        backgroundColor="#dfdfdf"
                        foregroundColor="#ffffff"
                        backgroundOpacity="0.5"
                        foregroundOpacity="0.5"
                    >
                        <rect x="-16" y="-9" rx="0" ry="0" width="5000" height="5000" />
                    </ContentLoader>
                    }
                    <img alt={movie.title + " poster"} onLoad={() => { setImageLoading(false); }} style={{display: isImageLoading ? 'none' : 'block',width: '100%', height: '100%', objectFit: "cover", borderRadius: '.8em'}} src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path} />
                </LeftContent>
                <RightContent>
                    <IconContext.Provider 
                        value={{
                            color: '#0F0B1E', 
                            size: '2.5em', 
                            style: {
                                position: 'absolute',
                                right: '2%',
                                top: '2%',
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <IoIosArrowBack onClick={() => { history.goBack(); }}/>
                    </IconContext.Provider>
                    {isLoading ? 
                    <MainLoader />
                    :
                    <>
                        

                        <h1 style={{margin: 0, fontSize: '3em', lineHeight: 1, fontWeight: 800}}>{movie.title}</h1>
                        <h4 style={{margin: 0, fontSize: '.9em', fontWeight: 700}}>{movie.release_date}</h4>
                        <ColoredBadge style={{marginRight: '.4vw'}} textColor="white" color="#032541" href={"https://www.themoviedb.org/movie/" + movie.id} target="_blank">
                            <p>TMDb</p>
                            <p style={{marginLeft: '4px', fontWeight: 'normal'}}>{movie.vote_average}</p>
                        </ColoredBadge>
                        <ColoredBadge textColor="black" color="#FFDF40" href={"https://www.imdb.com/title/" + movie.imdb_id} target="_blank">
                            <p>View on IMDb</p>
                        </ColoredBadge>
                        <Genres>
                            <h3 style={{fontSize: '1.1em', margin: 0, fontWeight: '700'}}>GENRES:</h3>
                            {movie.genres?.map(val => {
                                return <GenreBadge key={val.id}>{val.name}</GenreBadge>
                            })}
                        </Genres>
                        <h2 style={{fontSize: '1.4em', fontWeight: '800', margin: 0}}>SYNOPSIS</h2>
                        <BodyText>{movie.overview}</BodyText>

                        <TrailerButton onClick={openModal}>WATCH TRAILER</TrailerButton>
                    </>
                    }
                    
                </RightContent>
            </PageContent>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Modal-Overlay"
            >   
                <button style={{position: 'absolute', top: '2%', right: '1%', background: 'none', outline: 'none', border: 'none', cursor: 'pointer'}} onClick={closeModal}>
                    <IconContext.Provider 
                        value={{
                            color: 'white', 
                            size: '2.5em', 
                        }}
                    >
                        <AiOutlineClose/>
                    </IconContext.Provider>
                </button>
                <YoutubeEmbed embedId={trailerId}/>
            </Modal>
        </Wrapper>
    )
}

const MainLoader = () => {
    return(
        <ContentLoader 
            speed={4}
            width={476}
            height={500}
            viewBox="0 0 476 500"
            backgroundColor="#dfdfdf"
            foregroundColor="#ffffff"
            backgroundOpacity="0.3"
            foregroundOpacity="0.3"
        >
            <rect x="0" y="10" rx="5" ry="5" width="211" height="24" /> 
            <rect x="0" y="43" rx="8" ry="8" width="100" height="15" /> 
            <rect x="0" y="87" rx="8" ry="8" width="80" height="20" /> 
            <rect x="0" y="113" rx="8" ry="8" width="431" height="22" /> 
            <rect x="0" y="165" rx="8" ry="8" width="91" height="25" /> 
            <rect x="0" y="197" rx="8" ry="8" width="438" height="219" />
        </ContentLoader>
    )
}

const YoutubeEmbed = ({ embedId }) => {
    return(
        <iframe
            style={{width: '90%', height: '80%', borderRadius: '.8em'}}
            src={'https://www.youtube.com/embed/' + embedId}
            frameBorder='0'
            allow='fullscreen; autoplay; encrypted-media'
            title='video'
        />
    )
}

export default Movie
