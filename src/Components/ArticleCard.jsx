import { Link } from 'react-router-dom'
import { SlLike } from "react-icons/sl";
import { BsChatLeftQuote } from "react-icons/bs";



export default function ArticleCard({article}){
    const {article_img_url, author, title, topic, votes, comment_count, article_id, created_at} = article

    return (<div className='article-card'>
            <img src={article_img_url} width='60%'></img>
            <section>
               <Link to={`/articles/${article_id}`}> <h2>{title}</h2> </Link>
                <h3>{author} <span id='article-card-time'>{created_at.slice(0,10)}</span></h3>
                <h4>{votes} <SlLike id='like-icon'/> {comment_count} <BsChatLeftQuote id='comment-icon'/></h4>
            </section>
        </div>)
} 