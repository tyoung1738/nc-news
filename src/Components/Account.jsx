import { useContext, useState } from "react";
import { getAllUsers } from "../utils/api";
import { useAuth } from '../Contexts/UserContext'

export default function Account() {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  
  const [usernameAttempt, setUsernameAttempt] = useState('')
  const [pwdAttempt, setPwdAttempt] = useState('')

  function handleLogin(e){
    e.preventDefault()
    setIsLoggedIn(currVal => !currVal)
    
    if(authUser){
        setAuthUser(null)
    } else {
        setAuthUser({
            username: usernameAttempt
        })
        setUsernameAttempt('')
    }
  }

  function handleUsername(e){
    setUsernameAttempt(e.target.value)
  }

  function handlePassword(e){
    setPwdAttempt(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    return getAllUsers()
        .then(({data})=>{
            const {users} = data
            console.log(users)
            const matchedUsers = users.filter((user) => user.username===usernameAttempt)
            matchedUsers.length ? handleLogin(e) : null;
            })
            //no pwd authentication yet, but only allowing existing users to login            
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {authUser.username}!</h2>
          <button onClick={handleLogin}>Logout</button>
        </div>
      ) : (
        <div>
        <p>Please log in to view your account and post comments.</p>
        <p>(Currently not dependent on pwd, but set to only accept existing user names - try e.g. tickle122)</p>
        <form id='login-form' onSubmit={handleSubmit}>
            <ul>
                <li>
                <label>Username</label>
                <input type='text' onChange={handleUsername}></input>
                </li>
                <li>
                <button type='submit'>Log In</button>    
                </li>
            </ul>
        </form>
        </div>
      )}
    </div>
  )
}