import React, { useState } from 'react'

import styled from 'styled-components'

import searchIconSvg from '../assets/images/searchIcon.svg'


const SearchBody = styled.div`
    padding: 0.4em 0.8em;
    margin: 0.5em;
    background: transparent;
    border: .2em solid  #FFF;

    border-radius: .6em;

    width: 28%;

    display: flex;

    box-sizing: border-box;
`

const Input = styled.input`
    display: flex;
    background: transparent;

    color: #FFF;


    &::placeholder{
        color: #FFF;
    }

    font-size: 1.1em;
    font-weight: 600;
    
    flex: 1;
    width: 100%;
    border: none;
    outline: none;
` 

const SearchIcon = styled.img`
    width: 1.6em;
`

function SearchBar() {

    const [inputValue, setInputValue] = useState("");

    const changeInputValue = (e) => {
        setInputValue(e.target.value)
        
    }

    return (
        <>
            <SearchBody className="searchBody">
                <Input type="text" key="searchBar2" value={inputValue} placeholder="Search" onChange={changeInputValue} />
                <SearchIcon src={searchIconSvg}/>
            </SearchBody>
        </>
    )
}

export default SearchBar;
