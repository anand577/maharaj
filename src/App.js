/* eslint-disable no-tabs */
// import React, { Component, Fragment } from 'react'
// import { Route } from 'react-router-dom'
// import { v4 as uuid } from 'uuid'
import React from 'react'
// import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
// import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import Home from './components/portfolio/Home'
import About from './components/portfolio/About'
import Resume from './components/portfolio/Resume'
import Projects from './components/portfolio/Projects'
import Contact from './components/portfolio/Contact'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import SignUp from './components/auth/SignUp'
// import SignIn from './components/auth/SignIn'
// import SignOut from './components/auth/SignOut'
// import ChangePassword from './components/auth/ChangePassword'
function App () {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/resume'>
          <Resume />
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

      </div>
    </Router>
  )
}

export default App
