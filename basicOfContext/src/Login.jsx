import React, { useContext, useState } from 'react'
import UserContext from './Context/UserContext'

const Login = () => {

    const [username, setUsername] = useState("")
    const { setUser } = useContext(UserContext)


    const loginToAccount = (e) => {
        e.preventDefault()
        setUser({ username })
    }


    return (
        <>
            <div>Login</div>
            <label htmlFor="username"> UserName: </label>
            <input
                type='text'
                name="username"
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <button onClick={(e) => loginToAccount(e)}> Login </button>
        </>

    )
}

export default Login