import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getArticles } from '../utils/api'
import ArticleCard from "./ArticleCard"

export default function Articles ({articles, setArticles, topicSelection}){
    const { topic } = useParams()

    useEffect(()=>{
        getArticles(topic)
            .then(({data})=>{
                const { articles } = data
                setArticles(articles)
            })
    }, [topic])

    
    return (<div>
        {topic ? <h2>Let me tell you all about {topic}</h2> : <h2>I give you all articles</h2>}
        <ul className="articles-list">
            {articles.map((article)=>{
                return (
                    <ArticleCard article={article} key={article.article_id}/>
                )
            })}
        </ul>
        </div>)
}