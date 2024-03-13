import { useState } from 'react'
import { Routes, Route, Router} from 'react-router-dom'
import './App.css'
import Articles from './Components/Articles'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'
import SingleArticle from './Components/SingleArticle'
import { UserProvider } from './Contexts/UserContext'
import Account from './Components/Account'



function App() {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  return (
    <div className='app-grid'>
      <UserProvider>
      <Header/>
      <Nav/>
      <Routes>
        <Route path='/' element = {<Home articles={articles} setArticles={setArticles}/>}/>
        <Route path='/login' element={<Account/>}/>
        <Route path='/articles' element = {<Articles articles={articles} setArticles={setArticles}/>}/>
        <Route path='/articles/:article_id' element={<SingleArticle isLoading={isLoading} setIsLoading={setIsLoading}/>}/>
      </Routes>
      </UserProvider>
    </div>
  )
}

export default App
