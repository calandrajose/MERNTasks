import React, { useState } from 'react';

import { toggleState } from '../utility'
import Error from './Error'
import PropTypes from 'prop-types'

const Form = ({ setSearchParam }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (input.trim() === '') {
            toggleState(1500, setError);
            return
        }
        setSearchParam(input)
    }

    return (
        <form
            onSubmit={onSubmitHandler}>
            <div className='row'>
                <div className='form-group col-md-8'>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Que estas buscando?'
                        onChange={e => setInput(e.target.value)}
                        value={input} />
                </div>
                <div className='form-group col-md-4'>
                    <input
                        type='submit'
                        className='btn btn-lg btn-danger btn-block'
                        value='Buscar' />
                </div>
            </div>
            {error ? <Error message='No ingreso ningun termino de busqueda' /> : null}
        </form>
    );
};

Form.propTypes = {
    setSearchParam: PropTypes.func.isRequired
}

export default Form;