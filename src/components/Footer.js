import React from 'react'

import styled from 'styled-components'

import { BsGithub } from 'react-icons/bs';
import { IconContext } from "react-icons";


const FooterStyled = styled.footer`
    width: 90%;
    position: relative;
    margin: 0 auto;
    padding: 4vh 2vh;
    box-sizing: border-box;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media screen and (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

function Footer() {
    return (
        <FooterStyled>
            <h1 style={{fontSize: '1.2em', textAlign: 'center'}}>Made by Gabriel Pérez Diez - Portfolio Project</h1>
            <a href="https://github.com/Gabsplat" target="_blank" rel="noopener noreferrer">
                <IconContext.Provider value={{color: 'white', size: '2em', style: {cursor: 'pointer'}}}>
                    <BsGithub/>
                </IconContext.Provider>
            </a>
        </FooterStyled>
    )
}




export default Footer
