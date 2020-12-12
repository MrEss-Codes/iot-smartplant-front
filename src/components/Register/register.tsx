import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import { register } from "../../state/actions/auth";
import {useRouter} from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};


const Register = ({query}) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [id] = useState(query.id);
    const [successful, setSuccessful] = useState(false);


    const { message } = useSelector(state => state.message);


    const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const onChangePassword2 = (e) => {
        const password = e.target.value;
        setPassword2(password);
    };


    const vpassword = (value) => {

        if (value.length < 6 || value.length > 40) {
            return (
                <div className="alert alert-danger" role="alert">
                    The password must be between 6 and 40 characters.
                </div>
            );
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setSuccessful(false);
        if (password !== password2){
            return (
                alert('password does not match')
            );
        }
        dispatch(register(email, password, id))
            .then(() => {
                setSuccessful(true);
                })
            .catch(() => {
                setSuccessful(false);
                });
    };
    return (
        <div className="col-md-12">
            <div className="card card-container">
                <Form onSubmit={handleRegister}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    validations={[required, validEmail]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required, vpassword]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Password</label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="password2"
                                    value={password2}
                                    onChange={onChangePassword2}
                                    validations={[required, vpassword]}
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Sign Up</button>
                            </div>
                        </div>
                    )}

                    {message && (
                        <div className="form-group">
                            <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

Register.getInitialProps = ({query}) => {
    return {query}
}
export default Register;




