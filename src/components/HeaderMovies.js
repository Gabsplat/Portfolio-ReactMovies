import React from 'react'

import styled from 'styled-components'

import lucaTest from "../assets/images/luka.jpg"

function HeaderMovies() {

    const HeaderMovies = styled.div`
        position: relative;

        width: 100%;
        height: 20em;

        border-radius: 1em;

        &::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background: url(${lucaTest});
            background-position-y: 20%;
            filter: blur(1.5px);
        }

    `

    const HeaderInfo = styled.div`
        position: absolute;
        left:5%;
        bottom: 0;


        font-size: 3em;
        
        & > *{
            margin: 0;
            font-weight: 800;
        }
        color: #161616;
    `

    return (
        <HeaderMovies>
            <HeaderInfo>
                <h1>
                    Luca
                </h1>
                <h3>
                    x/x estrellas
                </h3>
            </HeaderInfo>
        </HeaderMovies>
    )
}

export default HeaderMovies
