import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function ErrorPage({err}){
    return (<div className='error-page'>
    <h1>Oh no!</h1> 
    <h2> {err ? err : "Turn back, you've come to the wrong place"}</h2>
    <h2>Click <Link to='/'>home</Link> and try again.</h2>
    </div>)
}  