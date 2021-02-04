import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// import axios from 'axios'

import Homepage from './components/Homepage'
import Panel from './components/Panel'
import Details from './components/Details'
import NavBar from './components/Navbar'

import 'bulma'
import './styles/style.scss'

const App = () => (


  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/panel" component={Panel}/>
      <Route path="/:id" component={Details} />
    </Switch>
  </BrowserRouter>

)

export default App