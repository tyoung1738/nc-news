import axios from 'axios'

const sendNews = axios.create({
    baseURL: 'https://ty-news-api.onrender.com/api'
})

export function getArticles(topic, sort_by, order){
    console.log(topic, sort_by, order)
    return sendNews.get('/articles', {
        params: {
            topic,
            sort_by,
            order
        }
        //BE can't sort by comment_count currently
    })
}

export function getSingleArticle(article_id){
    console.log("get by id")
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

export function deleteComment(comment_id){
    return sendNews.delete(`/comments/${comment_id}`)
}