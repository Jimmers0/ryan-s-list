import React, {useEffect} from 'react'
import { useSelector} from 'react-redux'
import { getPost } from '../actions/example.actions';

export default props => {

    const {title, content}  = useSelector(appState => appState.post)


    useEffect(() => {
        getPost(props.match.params.id)
    }, [props.match.params.id])

    return (

        
        <div className="subcontainer2">
            <div className="header">
        
            </div>
        <div className="posting">
        <h1>{title}</h1>
        <p>{content}</p>
        </div>
        </div>

    )
}