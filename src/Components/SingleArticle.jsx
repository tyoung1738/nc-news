import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { getSingleArticle} from '../utils/api'
import NewComment from './NewComment'
import Comments from './Comments'
import { useAuth } from '../Contexts/UserContext'
import ArticleVotes from './ArticleVotes'

export default function SingleArticle ({isLoading, setIsLoading}){
    const { article_id } = useParams()
    const [singleArticle, setSingleArticle] = useState({})
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState(false)
    const [newVotes, setNewVotes] = useState(0)

    function handleShowComments(){
        setShowComments((currValue)=>!currValue)
    }

    useEffect(()=>{
        getSingleArticle(article_id)
        .then(({data})=>{
            const {article} = data
            setSingleArticle(article)
            setNewVotes(article.votes)
        })
    }, [article_id])

    return (<div className='single-article'>
                <h2>{singleArticle.title}</h2>
                <h3>{singleArticle.author}'s take on: {singleArticle.topic} </h3>
                <p>Votes {newVotes} Comments: {singleArticle.comment_count}</p>
                <img src={singleArticle.article_img_url} width='50%'/>
                <p>{singleArticle.body}</p>
                <ArticleVotes newVotes={newVotes} setNewVotes={setNewVotes}/>
                <NewComment article_id={article_id} comments={comments} setComments={setComments} isLoading={isLoading} setIsLoading={setIsLoading}/>
                <button onClick={handleShowComments}>{showComments ? "Hide Comments" : "View Comments"}</button>
                {showComments ? <Comments comments={comments} setComments={setComments} article_id={article_id}/> : null}
                
            </div>)
    
}
