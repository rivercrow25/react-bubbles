import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios.post('http://localhost:5000/api/login', user)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        history.push('/bubblesPage')
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>User Name</label>
      <input name='username' type='text' id='username' onChange={handleChange} />
      <label htmlFor='password'>Password</label>
      <input name='password' type='password' id='password' onChange={handleChange} />
      <button type='submit'>Log In</button>
    </form>
  );
};

export default Login;
