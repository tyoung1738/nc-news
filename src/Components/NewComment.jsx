import { useState, useEffect } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { postComment } from '../utils/api'
import { useAuth } from '../Contexts/UserContext'
import Loading from './Loading'

export default function NewComment({article_id, comments, setComments, isLoading, setIsLoading, setShowComments}){
    const { authUser } = useAuth()
    const [newCommentBody, setNewCommentBody] = useState("")
    const [commentPlaceholder, setCommentPlaceholder] = useState('What would you like to say?')
    const [postErr, setPostErr] = useState(null)
    
    function handleComment(e){
        const body = e.target.value
        setNewCommentBody(body)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!authUser){
            alert('You must log in first to post a comment!')
            return
        }
        if(newCommentBody.length === 0){
            alert('Provide some content to post a comment!')
            return
        }
        setIsLoading(true)
        return postComment(article_id, newCommentBody, authUser)
            .then(({data})=>{
                setPostErr(null)
                const { comment } = data
                setComments((currList)=>[comment, ...currList])
                setIsLoading(false)
                setNewCommentBody('')
                setCommentPlaceholder('Posted!')
                setShowComments(true)
            })
            .catch((err)=>{
                setIsLoading(false)
                setPostErr(`Uh oh, your comment didn't go through. Please try again`)
            })

    }
    return (isLoading ? <Loading/> : <form className='new-comment' onSubmit={handleSubmit}>
            <TextareaAutosize placeholder={commentPlaceholder} onChange={handleComment} value={newCommentBody}/>
            <button type='submit'>Post Comment</button>
            {postErr ? <p>{postErr}</p> : null}
        </form>)
    
}