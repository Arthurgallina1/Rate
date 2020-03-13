import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import store from '../store';
// import DefaultLayout from '../pages/_layouts/DefaultLayout';

//Custom Route component
//isPrivate: só pode acessar se tive logado;
//...rest
export default function RouteWrapper({component: Component, isPrivate, ...rest}) {
   
   const {signed} = store.getState().auth;

    if(!signed && isPrivate){
        return <Redirect to="/" />;
    }
    //Já está logado
    if(signed && !isPrivate){
        return <Redirect to="/dashboard" />
    }
    //Apenas retorna o componente
    return (
        // Render: função que recebe todas propriedades da tela.
        <Route {...rest} render={props => (
            <AuthLayout>
                <Component />
            </AuthLayout>
        )} />
    )

}
