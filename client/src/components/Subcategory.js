import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { getPosts, getCategoryName } from '../actions/example.actions'
import moment from 'moment'




export default props => {

    const posts = useSelector(appState => appState.posts)
    const category = useSelector(appState => appState.category)

   useEffect (() => { 
       getPosts(props.match.params.slug)
       getCategoryName(props.match.params.slug)
   }, [props.match.params.slug])


    


  return (

   

    <div className="subcontainer" > 



    <div className="header">

        <div className="space"> </div>

        <div className="info">
        <div className="cl">CL</div>
        <select className="lasvegas">
            <option>las vegas</option>
        </select>
        <div className="arrow">></div>
        <select className="category">
            <option>{category}</option>
        </select>


        </div>

        


        </div>



        <Link to="/" className="home">Go To Home</Link>
    <div className="categoryname">{category} - <Link to={"/" + props.match.params.slug + "/post"}>Add Post</Link> </div>
    
    {posts.map(post => (
        <div className="post">

        <Link to={"/post/" + post.id}><p className="posttitle">{post.title}</p></Link>
        
        <p className="posttime">Posted{' '}
        {moment(post.time_created).fromNow()}
        </p>
        </div>

        

    ))}
    
        
    </div>
  
  )
}