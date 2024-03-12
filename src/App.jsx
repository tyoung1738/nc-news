import { useState } from 'react'
import { Routes, Route, Router} from 'react-router-dom'
import './App.css'
import Articles from './Components/Articles'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'
import SingleArticle from './Components/SingleArticle'
import CommentCard from './Components/CommentCard'

function App() {
  const [articles, setArticles] = useState([])

  return (
    <div className='app-grid'>
      <Header/>
      <Nav/>
      <Routes>
        <Route path='/' element = {<Home articles={articles} setArticles={setArticles}/>}/>
        <Route path='/articles' element = {<Articles articles={articles} setArticles={setArticles}/>}/>
        <Route path='/articles/:article_id' element={<SingleArticle/>}/>
        <Route path='/articles/:article_id/comments' element={<><SingleArticle/> <CommentCard/></>}/>
      </Routes>
    </div>
  )
}

export default App
