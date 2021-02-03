import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

// import Homepage from '/GA-Project2/components/Homepage'
import Panel from './components/Panel'
import GenresLiked from './components/Panel'
// import Searches from '/GA-Project2/components/Searches'
// import Details from '/GA-Project2/components/Details'
// import NavBar from '/GA-Project2/components/Navbar'

import 'bulma'
import './styles/style.scss'

const App = () => (
  <Panel />


  // <BrowserRouter>
  //   <NavBar />
  //   <Switch>
  //     <Route exact path="/GA-Project2/" component={Homepage}/>
  //     <Route path="/GA-Project2/searches" component={Searches}/>
  //     <Route path="/GA-Project2/details" component={Details} />
  //   </Switch>
  // </BrowserRouter>

)

export default App