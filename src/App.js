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


//ASSETS
import './assets/styles/main.css'

const BackgroundWrapper = styled.div`
    background-color: #0A070C;
    /* background: linear-gradient(to right top, #101617, #161616);  */
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    overflow: auto;
`

function App() {

  return(
    <Router className="App">
      <BackgroundWrapper>
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
