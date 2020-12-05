import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoutes = ({ isAuth, component: Component, ...rest }) => {
    return (
        <Route 
            { ...rest }
            component={
                (props)=>(
                    isAuth 
                    ?
                    <Redirect to='/' />
                    :
                    <Component {...props} />
                )
            }
        />
    )
}

PublicRoutes.propTypes={
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PublicRoutes
