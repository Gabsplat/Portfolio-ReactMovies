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
        width: 12em;
  `

  const Navbar = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
