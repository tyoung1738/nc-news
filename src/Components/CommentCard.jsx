import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCommentsByArticleId } from '../utils/api'

export default function CommentCard(){
    const { article_id } = useParams()
    const [comments, setComments] = useState([])
    
    useEffect(()=>{
        getCommentsByArticleId(article_id)
            .then(({data})=>{
                const { comments } = data
                setComments(comments)
            })
    }, [article_id])
    
    return (<div>
            <h3>Comments</h3>
            <ul>
                {comments.map((comment)=>{
                return (<div className='comment-card' key={comment.comment_id}>
                <p> {comment.author}: {comment.body} </p>
                <p> {'Posted on ' + comment.created_at.slice(0,10)
                + ' at ' + comment.created_at.slice(11, 19)}
                </p>
                </div>)
                })}
            </ul>
        </div>)
}