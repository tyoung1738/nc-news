import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import ArticleCard from './ArticleCard'
import { getSingleArticle, incrementArticleVoteCount } from '../utils/api'

export default function SingleArticle (){
    const { article_id } = useParams()
    const [singleArticle, setSingleArticle] = useState({})
    const [newVotes, setNewVotes] = useState(0)
    const [err, setErr] = useState(null)

    function handleUpvote(){
        console.log("inside function")
        setNewVotes((currVotes)=> currVotes + 1)
        setErr(null)
        return incrementArticleVoteCount(article_id, true)
            .then(({data})=>{
                const {article} = data
                setNewVotes(()=>article.votes)
            })
            .catch((err)=>{
                setNewVotes((currVotes)=>currVotes - 1)
                alert('Something went wrong, please try again')
                setErr('Something went wrong, please try again')
            })
    }

    function handleDownvote(){
        console.log("inside function")
        setNewVotes((currVotes)=> currVotes - 1)
        setErr(null)
        return incrementArticleVoteCount(article_id, false)
            .then(({data})=>{
                const {article} = data
                setNewVotes(()=>article.votes)

            })
            .catch((err)=>{
                setNewVotes((currVotes)=>currVotes + 1)
                alert('Something went wrong, please try again')
                setErr('Something went wrong, please try again')
            })
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
            <button onClick={handleUpvote}>Upvote</button>
            <button onClick={handleDownvote}>Downvote</button>
            <p><Link to={`/articles/${article_id}/comments`}>View Comments</Link></p>
        </div>)
    
}
