import { Link } from 'react-router-dom'
export default function Header (){
    return (<div className='header'>
        <Link to={'/'}>
            <h1 id='title'>Send</h1>
            <img id='home-icon' src="../../newsIcon.png"></img>
        </Link>
    </div>)
}