import { Link } from 'react-router-dom'

export default function ArticleCard({article}){
    const {article_img_url, author, title, topic, votes, comment_count, article_id} = article

    return (<div className='article-card'>
            <img src={article_img_url} width='50%'></img>
            <section>
               <Link to={`/articles/${article_id}`}> <h2>{title}</h2> </Link>
                <p>{author}</p>
            </section>
        </div>)
} 