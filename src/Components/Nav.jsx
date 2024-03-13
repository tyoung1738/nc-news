import { Link } from 'react-router-dom'
import { useAuth } from '../Contexts/UserContext'

export default function Nav (){
    const {authUser, isLoggedIn} = useAuth()

    return (<>
        <nav className='nav'>
            <Link to={'/articles'}><li>All Articles</li></Link>
            {isLoggedIn ? <Link to={'/login'}><li>{"Logged in as " + authUser.username}</li></Link> : <Link to={'/login'}><li>{"Login"}</li></Link>}
        </nav>
    </>)
}
