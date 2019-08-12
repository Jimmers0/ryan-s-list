import React, { useEffect } from 'react'
import { getData, getMainCat } from '../actions/example.actions'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import Axios from 'axios';




export default props => {

     let state = {
        list : []
    }
    
    
 Axios.get('api/home/${name}').then(resp => {
    
    let data = (resp.data)
    this.state.list = data
  
    })

  return (

    <div className="container" > 
    subcat
        
    </div>
  
  )
}