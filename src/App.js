import React, { useState } from 'react';


// EXTERNAL IMPORTS
import{ 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import styled from 'styled-components'


// PÁGINAS
import Home from "./pages/home";


// COMPONENTES
import SearchBar from './components/SearchBar';

// ASSETS
import logo from './assets/images/logo.svg'
import './assets/styles/main.css'


function App() {

  const BackgroundWrapper = styled.div`
        /* background-color: #0E1213; */
        background: linear-gradient(to right top, #101617, #161616); 
        width: 100%;
        height: 100%;
        padding: 1em 4em;
        box-sizing: border-box;
        overflow: auto;
  `

  const Logo = styled.img`
        width: 12em;
  `

  const Navbar = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.4em;
  `

  return(
    <Router>
      <BackgroundWrapper>
        <Navbar>
          <Logo src={logo}/>
          <SearchBar key="searchBar"/>
        </Navbar>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BackgroundWrapper>
    </Router>
  );
}

export default App;
