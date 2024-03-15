import { getArticles } from '../utils/api'
import Account from './Account'
import ArticleCard from './ArticleCard'
import { useState, useEffect } from 'react'

export default function Home({articles, setArticles, setErr}){

    const [latestFiveArticles, setLatestFiveArticles] = useState([])

    useEffect(()=>{
        setErr(null)
        getArticles()
            .then(({data})=>{
                const { articles } = data
                const filteredArticles = articles.filter((article, i)=> i > articles.length-6)
                setLatestFiveArticles(filteredArticles)
            })
    }, [])

    return (<div id='home'>
            <p>Welcome to Send News' homepage!</p>
            <p>See below for a selection of our latest articles</p>
            <ul className='articles-list'>
                {latestFiveArticles.map((article)=>{
                    return <ArticleCard article={article} key={article.article_id}/>
                })}
            </ul>
        </div>)
}