import { useAuth } from "../Contexts/UserContext"
import { useState } from 'react'
import { deleteComment } from "../utils/api"
import Deleting from "./Deleting"

export default function CommentCard({comment}){
    const { comment_id } = comment
    const {authUser} = useAuth()
    const [showDelete, setShowDelete] = useState(false)
    const [showDeleting, setShowDeleting] = useState(false)

    function handleShowDelete(e){
        if(authUser.username===comment.author){
            setShowDelete(true)
        }
    }
    function handleHideDelete(){
        setShowDelete(false)
    }
    function handleClick(){
        setShowDeleting(true)
        return deleteComment(comment_id)
            .catch((err)=>{
                alert("Uh oh, we're having trouble deleting your comment. Please refresh and try again")
            })
    }

    
    return (<div className='comment-card' onMouseEnter={handleShowDelete} onMouseLeave={handleHideDelete}>
                {showDeleting ? <Deleting/> : null}
                <p> {comment.author}: {comment.body} </p>
                <p> {'Posted on ' + comment.created_at.slice(0,10)
                + ' at ' + comment.created_at.slice(11, 19)}
                </p>
                {showDelete ? <button onClick={handleClick}>Delete</button> : null}
                 
            </div>)
}