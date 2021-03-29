import React/* , { useState, useEffect } */ from 'react'
// import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// 
import Login from './components/auth/Login'
import NewAccount from './components/auth/NewAccount'
import Projects from './components/projects/Projects'
import ProjectState from './context/projects/ProjectState'


function App() {
  return (
    <ProjectState>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/nueva-cuenta' component={NewAccount} />
          <Route exact path='/proyectos' component={Projects} />
        </Switch>
      </Router>
    </ProjectState>
  );
}

export default App;
