import { useState } from 'react'
import { Routes, Route, Router} from 'react-router-dom'
import './App.css'
import Articles from './Components/Articles'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'
import SingleArticle from './Components/SingleArticle'

function App() {
  const [articles, setArticles] = useState([])

  return (
    <div className='app-grid'>
      <Routes>
        <Route path='/' element = {<> <Header/> <Nav/> <Home articles={articles} setArticles={setArticles}/></>}/>
        <Route path='/articles' element = {<> <Header/> <Nav/> <Articles articles={articles} setArticles={setArticles}/> </>}/>
        <Route path='/articles/:article_id' element={<> <Header/> <Nav/> <SingleArticle/></>}/>
      </Routes>
    </div>
  )
}

export default App
