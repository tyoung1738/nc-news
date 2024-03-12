import { useEffect, useState } from "react"
import { getArticles } from '../utils/api'
import ArticleCard from "./ArticleCard"

export default function Articles ({articles, setArticles}){
    
    useEffect(()=>{
        getArticles()
            .then(({data})=>{
                const { articles } = data
                setArticles(articles)
            })
    }, [])

    
    return (<div>
        <h2>I give you all articles</h2>
        <ul className="articles-list">
            {articles.map((article)=>{
                return (
                    <ArticleCard article={article} key={article.article_id}/>
                )
            })}
        </ul>
        </div>)
}