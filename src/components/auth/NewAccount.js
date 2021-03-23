import React, {useState} from "react";
import {Link} from 'react-router-dom'

const NewAccount = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
        confirm: ''
    })

    const { username, email, password, confirm } = credentials

    const onChangeHandler = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };

    const onSubmitHandler = e => {
        e.preventDefault()
    }
    return (
        <div className="form-user">
            <div className="container-form shadow-dark">
                <h1>Registrarse</h1>
                <form>
                <div className="field-form">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={onChangeHandler}
                        />
                    </div>
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
                        <label htmlFor="confirm">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Repite tu password"
                            value={confirm}
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
                <Link to={'/'} className='link-account'>
                    Volver a Iniciar Sesión
          </Link>
            </div>
        </div>
    )
}

export default NewAccount;