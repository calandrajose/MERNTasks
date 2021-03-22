import React from 'react';

const Login = () => {
    const onChangeHandler = (e)=>{
        
    }
    return (
        <div className='form-user' >
            <div className='container-form shadow-dark'>
                <h1>Iniciar Sesion</h1>
                <form>
                    <div className='field-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu email'
                            onChange={onChangeHandler}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;