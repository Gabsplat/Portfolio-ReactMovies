import React, { useState } from 'react';

import{ 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from "./pages/home";

import SearchBar from './components/SearchBar';

import styled from 'styled-components'
import logo from './assets/images/logo.svg'





function App() {

  const BackgroundWrapper = styled.div`
        background: linear-gradient(to right, #5c258d, #4389a2); 
        width: 100%;
        height: 100%;
        padding: 1em 4em;
        box-sizing: border-box;
        overflow: auto;
  `

  const Logo = styled.img`
        width: 14em;
  `

  const Navbar = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
  `

  return(
    <BackgroundWrapper>
        <Navbar>
          <Logo src={logo}/>
          <SearchBar />
        </Navbar>
        <Router>
          <Route>
            <Home/>
          </Route>
          {/* <Route>
          </Route> */}
        </Router>
    </BackgroundWrapper>
  );
}

export default App;
