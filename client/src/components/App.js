import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import Subcategory from './Subcategory'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Post from './Post'
import Posting from './Posting'
import Mainpage from './Mainpage';

export default props => {
  return (
   <Provider store={store}>
    
    <Router>
      <Switch>
    
       
        <div className="container">
        
        <Route exact path="/" component={Mainpage} />
        
        <Route exact path="/:slug/post" component={Post} />
        <Route exact path="/post/:id" component={Posting} />
        <Route exact path="/:slug" component={Subcategory} />
        

      </div>
      </Switch>
      </Router>
      
      </Provider>
   
  )
}