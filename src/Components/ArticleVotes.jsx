import { incrementArticleVoteCount } from '../utils/api'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


export default function ArticleVotes({newVotes, setNewVotes}){
    const [err, setErr] = useState(null)
    const { article_id } = useParams()

    function handleUpvote(){
        setNewVotes((currVotes)=> currVotes + 1)
        setErr(null)
        return incrementArticleVoteCount(article_id, true)
            .then(({data})=>{
                const {article} = data
                setNewVotes(()=>article.votes)
            })
            .catch((err)=>{
                setNewVotes((currVotes)=>currVotes - 1)
                setErr('Something went wrong, please try again')
                alert('Something went wrong, please try again')
            })
    }

    function handleDownvote(){
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

    return (<>
        <button onClick={handleUpvote}>Upvote</button>
        <button onClick={handleDownvote}>Downvote</button>
    </>)
}