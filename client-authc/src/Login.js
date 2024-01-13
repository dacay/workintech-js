import { useState } from 'react';

import axios from 'axios';

import logo from './logo.svg';
import './App.css';

const login = (email, password) => {

  axios
    .post('https://reqres.in/api/login', {
      email, password
    })
    .then(res => {

      localStorage.setItem('token', res.data.token);
    });
}

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleLogin = () => {

    const { email, password } = formData;

    login(email, password);
  }


  return (
    <div className="Login">
      <p>
          <label>
            Email:&nbsp;&nbsp;
            <input type="email" name="email" value={formData.email} onChange={handleChange}></input>
          </label>
        </p>
        <p>
          <label>
            Password:&nbsp;&nbsp;
            <input type="password" name="password" value={formData.password} onChange={handleChange}></input>
          </label>
        </p>
        <p>
          <input type='button' value='Login' onClick={handleLogin} />
        </p>
    </div>
  );
}

export default Login;
