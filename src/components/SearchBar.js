import React from 'react'

import styled from 'styled-components'

function SearchBar() {

    const Input = styled.div`
        padding: 0.5em;
        margin: 0.5em;
        background: transparent;
        border: 2px solid  rgb(21, 96, 128);
        border-radius: 3px;
    `

    return (
        <Input>
            <input type="text" value="test" placeholder="test"/>
        </Input>
    )
}

export default SearchBar;
