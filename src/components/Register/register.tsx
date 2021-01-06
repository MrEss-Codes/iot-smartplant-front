import React, { useState, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import "bootstrap/dist/css/bootstrap.min.css";
import {useRouter} from "next/router";
import useForm from "./useForm";

const Register = ({query}, props) => {

    const{
        values,
        handleRegister,
        handleChange,
        successful,
        required,
        message,
        validEmail,
        vpassword,


    } = useForm(props)

    const router = useRouter();

    const onClickExistingUser = () => {
        console.log("redirect to login with id: " + query.id)
        return router.push('/?id=' + query.id)
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
                                    value={values.email}
                                    onChange={handleChange}
                                    validations={[required, validEmail]}
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
                                    validations={[required, vpassword]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Password</label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="password2"
                                    value={values.password2}
                                    onChange={handleChange}
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
                <button className="btn" onClick={onClickExistingUser}>Already have an account?</button>
            </div>
        </div>
    );
};

Register.getInitialProps = ({query}) => {
    return {query}
}
export default Register;




