import axios from 'axios'

const sendNews = axios.create({
    baseURL: 'https://ty-news-api.onrender.com/api'
})

export function getArticles(){
    return sendNews.get('/articles')
}

export function getSingleArticle(article_id){
    return sendNews.get(`/articles/${article_id}`)
}

export function getCommentsByArticleId(article_id){
    return sendNews.get(`/articles/${article_id}/comments`)
}

export function incrementArticleVoteCount(article_id, increment){
    return sendNews.patch(`/articles/${article_id}`, {
        "inc_votes": increment ? 1 : -1
    })
}

export function postComment(article_id, body, user){
    return sendNews.post(`/articles/${article_id}/comments`, {
        username: user.username,
        body: body
    })
}

export function getAllUsers(){
    return sendNews.get(`/users`)
}