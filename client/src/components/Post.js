import React, {useState, useEffect} from 'react'
import { sendPost, getCategoryName } from '../actions/example.actions'
import { useSelector } from 'react-redux'



export default props => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const category = useSelector(appState => appState.category)

    useEffect(() => {
        getCategoryName(props.match.params.slug)
    }, [props.match.params.slug])

    function handleSubmit(e) {
        e.preventDefault()
        sendPost(title, content,props.match.params.slug)
        props.history.push('/' + props.match.params.slug)
    
    }

    return (
        <div className="containerpost"> 
        <div className="header"></div>

            <div><h1>Posting to {category}</h1></div>
        <form className="postform" onSubmit={handleSubmit}>
            <div className="titlepost"><label htmlFor="title" className="label">Title</label>
            <input id="title" type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/> </div>
            <div className="contentpost">
            <label htmlFor="content" className="label">Post Content</label>
            <textarea id="content" name="content" value={content} onChange={e => setContent(e.target.value)}></textarea>
            </div>
            <button className="buttonpost" type="submit">submit</button>
        </form>
        </div>
    )
}