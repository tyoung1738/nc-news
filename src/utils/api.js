import axios from 'axios'

const sendNews = axios.create({
    baseURL: 'https://ty-news-api.onrender.com/api'
})

export function getArticles(){
    return sendNews.get('/articles')
}