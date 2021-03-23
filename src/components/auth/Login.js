import React, {useState} from "react";
import {Link} from 'react-router-dom'

const Login = () => {
  //Login state
  const [credentials, setCredentials] = useState({
      email: '',
      password: ''
  })

  const {email, password} = credentials

  const onChangeHandler = e => {
      setCredentials({
          ...credentials,
          [e.target.name]: e.target.value
      })
  };

  const onSubmitHandler = e =>{
      e.preventDefault()
  }
  return (
    <div className="form-user">
      <div className="container-form shadow-dark">
        <h1>Iniciar Sesion</h1>
        <form>
          <div className="field-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email"
              value={email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="field-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu password"
              value={password}
              onChange={onChangeHandler}
            />
          </div>
          <div className="field-form">
            <input 
                type='btn' 
                className='btn btn-primary btn-block'
                value='Iniciar Sesión' 
                onSubmit={onSubmitHandler}   
            />
          </div>
        </form>
        <Link to={'/nueva-cuenta'} className='link-account'>
            Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
