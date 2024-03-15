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
import ErrorPage from './Components/ErrorPage'



function App() {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [topicSelection, setTopicSelection] = useState("")
  const [err, setErr] = useState(null)
  
  return (
    <div className='app-grid'>
      <UserProvider>
      <Header/>
      <Nav topicSelection={topicSelection} setTopicSelection={setTopicSelection}/>
      <Routes>
      
        <Route path='/' element = {<Home articles={articles} setArticles={setArticles} setErr={setErr}/>}/>
        <Route path='/login' element={<Account/>}/>
        <Route path='/articles' element = {<Articles articles={articles} setArticles={setArticles} err={err} setErr={setErr}/>}/>
        <Route path='/articles/topics/:topic' element = {<Articles articles={articles} setArticles={setArticles} topicSelection={topicSelection} err={err} setErr={setErr}/>}/>
        <Route path='/articles/:article_id' element={<SingleArticle isLoading={isLoading} setIsLoading={setIsLoading} err={err} setErr={setErr}/>}/>
        
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/articles/*' element={<ErrorPage/>}/>
      </Routes>
      </UserProvider>
    </div>
  )
}

export default App
