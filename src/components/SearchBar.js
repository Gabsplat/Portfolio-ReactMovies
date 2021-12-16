import React, { useState } from 'react'

import styled from 'styled-components'

import { IoSearch as SearchIcon } from 'react-icons/io5'
import { IconContext } from 'react-icons'

import { useHistory } from 'react-router-dom'


const SearchBody = styled.form`
    padding: 0.4em 0.8em;
    margin: 0.5em;
    background: #fff;

    border-radius: .8em;
    border: 3px solid rgba(0, 0, 0, 0.24);

    width: 28%;
    transition: opacity 0.1s ease-in;
    display: flex;
    box-sizing: border-box;
    transition: border 0.1s ease-in;

    &:hover{
        border: 3px solid rgba(0, 0, 0, 0.678);
    }

    @media screen and (max-width: 1024px) {
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        position: absolute;
        height: 7vh;
        width: calc(100% - 2em);
        display: none;
    }
`

const Input = styled.input`
    display: flex;
    background: transparent;

    color: black;

    font-size: 1em;
    font-weight: 600;
    
    flex: 1;
    width: 100%;
    border: none;
    outline: none;

    &:hover ${SearchBody}{
        background: blue;
    }

    &:focus ${SearchBody}{
        background: rgba(0, 0, 0, 0.144);
    }
` 

const SearchButton = styled.button`
    border: none;
    margin: 0;
    padding: 0;
    overflow: visible;
    
    display: flex;
    align-items: center;

    background: transparent;

    color: inherit;
    font: inherit;

    line-height: normal;

    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    -webkit-appearance: none;
`

function SearchBar(props) {

    const [inputValue, setInputValue] = useState("");
    
    const history = useHistory();

    const changeInputValue = (e) => {
        setInputValue(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue !== ""){
            history.push(`/search/${inputValue}`);
        }
    }

    return (
        <>
            <SearchBody onSubmit={handleSubmit}>
                <Input type="text" key="searchBar2" value={inputValue} placeholder="Search for a movie..." onChange={changeInputValue} />
                <SearchButton>
                    <IconContext.Provider value={{color: '#cabcbb', size: '1.5em', style: {cursor: 'pointer'}}}>
                        <SearchIcon />
                    </IconContext.Provider>
                </SearchButton>
            </SearchBody>
        </>
    )
}

export default SearchBar;
