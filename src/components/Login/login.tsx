import React from "react";
import useSelector from "react-redux";
import Redirect from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import {login} from "../../state/actions/auth";
import useForm from "./useform";




const Login = () => {
    const {
        values,
        handleChange,
        handleLogin,
        required
    } = useForm(login);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);


    if (isLoggedIn) {
        return <Redirect to="/Dashboard" />;
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



export default Login;


