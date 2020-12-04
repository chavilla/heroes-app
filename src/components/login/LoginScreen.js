import React, { useContext } from 'react'
import {AuthContext} from '../auth/AuthContext'
import { types } from '../types/types';

export const LoginScreen = ({history}) => {

    const { dispatch }= useContext(AuthContext);

    const handleLogin=()=>{
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Jesús'
            }
        });

        history.replace('/')
    }

    return (
        <div className='container pt-5'>
            <h1 className='text-center'>Login</h1>
            <hr/>
            <button 
            className='btn btn-primary w-25 m-auto' onClick={handleLogin}>
                Ingresar
            </button>        
        </div>
    )
}
