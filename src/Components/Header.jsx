import { Link } from 'react-router-dom'
export default function Header (){
    return (<div className='header'>
       <Link to={'/'}><h1>Send News</h1></Link>
    </div>)
}