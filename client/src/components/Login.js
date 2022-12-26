import {useState} from 'react'

const Login = ({setUser}) => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const handleInput = (e) => {
        setLoginData({
          ...loginData,
          [e.target.name]: e.target.value
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        })
        .then(r => r.json())
        .then(setUser)
      }

    return (
        <div>
            <form id="login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={loginData.username}
                    onChange={handleInput}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={loginData.password}
                    onChange={handleInput}
                />
                <input type="submit" value="Log in" />
            </form>
        </div>
    )
}

export default Login