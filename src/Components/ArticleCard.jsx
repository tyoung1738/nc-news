export default function ArticleCard({article}){
    const {article_img_url, author, title, topic, votes, comment_count} = article
    return (<div className='article-card'>
            <img src={article_img_url} width='50%'></img>
            <section>
                <h2>{title}</h2>
                <p>{author}</p>
            </section>
        </div>)
} 