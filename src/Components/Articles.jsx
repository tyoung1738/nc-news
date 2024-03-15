import { useEffect, useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getArticles } from '../utils/api'
import ArticleCard from "./ArticleCard"
import SortBy from "./SortBy"

export default function Articles ({articles, setArticles}){
    const { topic } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const sortByQuery = searchParams.get('sort_by')
    const orderQuery = searchParams.get('order')

    useEffect(()=>{
        getArticles(topic, sortByQuery, orderQuery)
            .then(({data})=>{
                const { articles } = data
                setArticles(articles)
            })
    }, [topic, sortByQuery, orderQuery])

    
    return (<div>
        {topic ? <h2>Let me tell you all about {topic}</h2> : <h2>I give you all articles</h2>}
        <SortBy searchParams={searchParams} setSearchParams={setSearchParams}/>
        <ul className="articles-list">
            {articles.map((article)=>{
                return (
                    <ArticleCard article={article} key={article.article_id}/>
                )
            })}
        </ul>
        </div>)
}