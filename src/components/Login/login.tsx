import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import {login} from "../../state/actions/auth";
import useForm from "./useform";

const Login = ({query}) => {
    const {
        values,
        handleChange,
        handleLogin,
        required,
        getUrlParameter,
    } = useForm(login);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    if (isLoggedIn) {
            const id = getUrlParameter('id')
            return <Redirect to={"/dashboard"} />;
    }

    return (
        <Form onSubmit={handleLogin}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    validations={[required]}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    validations={[required]}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block">
                    <span>Login</span>
                </button>
            </div>
            {message && (
                <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                        {message}
                    </div>
                </div> )}
        </Form>
    );
};

Login.getInitialProps = ({query}) => {
    return {query}
}

export default Login;


