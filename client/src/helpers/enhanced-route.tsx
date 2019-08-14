// @ts-ignore
import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';

// @ts-ignore
export const EnhancedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{pathname: '/signin', state: {from: props.location}}}/>
    )}/>
);
