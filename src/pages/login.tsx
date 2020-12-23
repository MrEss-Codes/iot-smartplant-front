import React from 'react';
import Form from '../components/Login/login';
import "bootstrap/dist/css/bootstrap.min.css";


const Login = ({query}) => {
    return (
        <Form query={query}/>
    );
};

Login.getInitialProps = ({query}) => {
    return {query}
}

export default Login;
