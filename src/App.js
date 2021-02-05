import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
      <Route exact path="/GA-Project2/" component={Homepage}/>
      <Route exact path="/GA-Project2/panel" component={Panel}/>
      <Route exact path="/GA-Project2/pane1" component={Panel}/>
      <Route path="/GA-Project2/details/:id" component={Details} />
    </Switch>
  </BrowserRouter>

)

export default App