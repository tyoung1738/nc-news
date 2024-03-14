import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCommentsByArticleId } from '../utils/api'
import CommentCard from './CommentCard'


export default function Comments({comments, setComments, article_id}){
    
    useEffect(()=>{
        getCommentsByArticleId(article_id)
            .then(({data})=>{
                const { comments } = data
                setComments(comments)
            })
    }, [article_id, comments])
    
    return (<div>
            <h3>Comments</h3>
            <ul>
                {comments.map((comment)=>{
                return <CommentCard comment={comment} key={comment.comment_id} comments={comments} setComments={setComments}/>})
                }
            </ul>
        </div>)
}