import React, { useState } from 'react'

import styled from 'styled-components'

import searchIconSvg from '../assets/images/searchIcon.svg'


const SearchBody = styled.div`
    padding: 0.4em 0.8em;
    margin: 0.5em;
    background: transparent;
    border: .2em solid  #182224;

    border-radius: .6em;

    width: 28%;

    display: flex;

    box-sizing: border-box;
`

const Input = styled.input`
    display: flex;
    background: transparent;

    color: #2BEBC8;


    &::placeholder{
        color: #2BEBC8;
    }

    font-size: 1.1em;
    font-weight: 400;
    
    flex: 1;
    width: 100%;
    border: none;
    outline: none;
` 

const SearchIcon = styled.img`
    color: #2BEBC8;
    width: 1.6em;
`

function SearchBar() {

    const [inputValue, setInputValue] = useState("");

    const changeInputValue = (e) => {
        setInputValue(e.target.value)
        
    }

    return (
        <SearchBody>
            <Input type="text" key="searchBar2" value={inputValue} placeholder="Search" onChange={changeInputValue} />
            <SearchIcon src={searchIconSvg}/>
        </SearchBody>
    )
}

export default SearchBar;
