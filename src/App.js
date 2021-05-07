import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import TvShows from './components/pages/Tvshows';
import SignUp from './components/pages/SignUp';
import ComingSoon from './components/pages/ComingSoon';

import './App.css';

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/movies' exact component={Movies}/>
                <Route path='/tvshows' exact component={TvShows}/>
                <Route path='/sign-up' exact component={SignUp}/>
                <Route path='/content/' component={ComingSoon}/>
            </Switch>
        </Router>
    </>
  );
}

export default App;