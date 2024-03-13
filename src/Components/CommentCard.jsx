export default function CommentCard({comment}){
    
    return (<div className='comment-card'>
                <p> {comment.author}: {comment.body} </p>
                <p> {'Posted on ' + comment.created_at.slice(0,10)
                + ' at ' + comment.created_at.slice(11, 19)}
                </p>
            </div>)
}