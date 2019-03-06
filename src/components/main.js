import React from 'react';
import { Switch, Route } from 'react-router-dom';

// routes
import LandingPage from './landingpage'
import AboutMe from './aboutme'
import Projects from './projects'
import Resume from './resume'
import Contact from './contact'
import Music from './music'


const Main = () => (
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route exact path='/aboutme' component={ AboutMe } />
        <Route exact path='/projects' component={ Projects } />
        <Route exact path='/resume' component={ Resume } />
        <Route exact path='/contact' component={ Contact } />
        <Route exact path='/music' component={ Music } />
    </Switch>
)

export default Main