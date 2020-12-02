import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin=()=>{
        history.replace('/');
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
