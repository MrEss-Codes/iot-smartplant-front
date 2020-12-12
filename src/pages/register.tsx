import React from 'react';
import Form from '../components/Register/register';
import "bootstrap/dist/css/bootstrap.min.css";


const Register = ({query}) => {

    return (
        <Form query={query} />
    );
};

Register.getInitialProps = ({query}) => {
    return {query}
}
export default Register;
