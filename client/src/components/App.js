import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import Subcategory from './Subcategory'
import nav from "./nav"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import Subcategories from './nav'
import Mainpage from './Mainpage';

export default props => {
  return (
   <Provider store={store}>
    
    <Router>
    
        <nav /> 
        <div className="container">
        <Route exact path="/" component={nav}/>
        <Route exact path="/home" component={Mainpage}/>
        <Route exact path="/home/:name" component={Subcategory}/>
        

      </div>
     
      </Router>
      
      </Provider>
   
  )
}