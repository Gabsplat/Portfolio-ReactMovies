import React, { useState } from 'react';
import { IconContext } from "react-icons";

// EXTERNAL IMPORTS
import{ 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import styled from 'styled-components';


// PÁGINAS
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Navbar from './components/Navbar';


//ASSETS
import './assets/styles/main.css';
import Search from './pages/Search';

const Background = styled.div`
    background-color: #0F0B1E;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow: auto;
`

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    position: ${(props) => props.sticky ? 'sticky' : 'relative'};
    background-color: #0F0B1E;
    z-index: 3;
    top: 0;
    left: 0;
`

const RouteWithNavbar = ({absolute, exact, stickyNav, path, component:Component}) => {
  return(
    <Route exact={exact} path={path}>
      <Wrapper sticky={stickyNav}>
        <Navbar absolute={absolute}/>
      </Wrapper>
      <Component/>
    </Route>
  )
}

function App() {
  return(
    <Router className="App">
      <Background>
        <Switch>
          <RouteWithNavbar absolute exact path='/' component={Home}/>
          <RouteWithNavbar absolute={false} exact={false} stickyNav={true} path='/search/:query' component={Search}/>
          <RouteWithNavbar absolute={false} exact={false} path='/movie/:movieId' component={Movie}/>
        </Switch>
      </Background>
    </Router>
  );
}

export default App;
