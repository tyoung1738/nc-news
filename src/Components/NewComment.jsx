import { useState, useEffect } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { postComment } from '../utils/api'
import { useAuth } from '../Contexts/UserContext'
import Loading from './Loading'
import ErrorPage from './ErrorPage'

export default function NewComment({article_id, setComments, isLoading, setIsLoading, setShowComments, err, setErr}){
    const { authUser } = useAuth()
    const [newCommentBody, setNewCommentBody] = useState("")
    const [commentPlaceholder, setCommentPlaceholder] = useState('What would you like to say?')
    
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
                const { comment } = data
                setComments((currList)=>[comment, ...currList])
                setIsLoading(false)
                setNewCommentBody('')
                setCommentPlaceholder('Posted!')
                setShowComments(true)
            })
            .catch((err)=>{
                setIsLoading(false)
                setErr(`We had trouble posting your comment`)
            })

    }
    return (
        err ? <ErrorPage/> :
        isLoading ? <Loading/> : 
        <form className='new-comment' onSubmit={handleSubmit}>
            <ul>
            <li>
            <TextareaAutosize placeholder={commentPlaceholder} onChange={handleComment} value={newCommentBody}/>
            </li>
            <li>
            <button type='submit'>Post Comment</button>
            </li>
            </ul>
        </form>)
    
}