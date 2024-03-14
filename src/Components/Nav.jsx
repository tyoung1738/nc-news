import { Link } from 'react-router-dom'
import { useAuth } from '../Contexts/UserContext'
import TopicDropdown from './TopicDropdown'

export default function Nav ({topicSelection, setTopicSelection}){
    const {authUser, isLoggedIn} = useAuth()

    return (<>
        <nav className='nav'>
            <Link to={'/articles'}><li>All Articles</li></Link>
            <TopicDropdown topicSelection={topicSelection} setTopicSelection={setTopicSelection}/>
            {isLoggedIn ? <Link to={'/login'}><li>{"Logged in as " + authUser.username}</li></Link> : <Link to={'/login'}><li>{"Login"}</li></Link>}
        </nav>
    </>)
}
