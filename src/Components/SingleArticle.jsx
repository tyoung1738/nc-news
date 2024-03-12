import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ArticleCard from './ArticleCard'
import { getSingleArticle } from '../utils/api'

export default function SingleArticle (){
    const { article_id } = useParams()
    const [singleArticle, setSingleArticle] = useState({})

    useEffect(()=>{
        getSingleArticle(article_id)
        .then(({data})=>{
            const {article} = data
            setSingleArticle(article)
        })
    }, [article_id])

    return (<div className='single-article'>
            <h2>{singleArticle.title}</h2>
            <h3>{singleArticle.author}'s take on: {singleArticle.topic} </h3>
            <p>Votes: {singleArticle.votes} Comments: {singleArticle.comment_count}</p>
            <img src={singleArticle.article_img_url} width='50%'/>
            <p>{singleArticle.body}</p>
        </div>)
    
}
