import React, { useState } from 'react';


// EXTERNAL IMPORTS
import{ 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import styled from 'styled-components';


// PÁGINAS
import Home from "./pages/home";
import Movie from "./pages/movie";
import Navbar from './components/Navbar';


//ASSETS
import './assets/styles/main.css';

const Background = styled.div`
    background-color: rgb(18, 4, 31);
    /* background: linear-gradient(to right top, #101617, #161616);  */
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow: auto;
`

const Wrapper = styled.div`
    width: 90%;
    position: relative;
    margin: 0 auto;
`

function App() {

  return(
    <Router className="App">
      <Background>
        <Wrapper>
          <Navbar />
        </ Wrapper>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/movie/:movieId">
            <Movie />
          </Route>
        </Switch>
      </Background>
    </Router>
  );
}

export default App;
