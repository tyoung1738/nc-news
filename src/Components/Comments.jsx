import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCommentsByArticleId } from '../utils/api'
import CommentCard from './CommentCard'
import ErrorPage from './ErrorPage'


export default function Comments({comments, setComments, article_id, err, setErr}){
    
    useEffect(()=>{
        setErr(null)
        getCommentsByArticleId(article_id)
            .then(({data})=>{
                const { comments } = data
                setComments(comments)
            })
            .catch((err)=>{
                setErr(`We're having trouble fetching your comments`)
            })
    }, [article_id, comments])
    
    return (err ? <ErrorPage err={err}/> : 
        <div>
            <h3>Comments</h3>
            <ul>
                {comments.map((comment)=>{
                return <CommentCard comment={comment} key={comment.comment_id} comments={comments} setComments={setComments}/>})
                }
            </ul>
        </div>)
}