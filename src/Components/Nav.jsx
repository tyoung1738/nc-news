import { Link } from 'react-router-dom'

export default function Nav (){
    return (<>
        <nav className='nav'>
            <Link to={'/articles'}><p>All Articles</p></Link>
        </nav>
    </>)
}
