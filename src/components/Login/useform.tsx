import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {login} from "../../state/actions/auth";

const useForm = () => {

    const [values, setValues] = useState({
        email: undefined,
        password: undefined
    });

    const dispatch = useDispatch();

    const handleLogin = (e, props) => {
        e.preventDefault();
        dispatch(login(values.email, values.password))
            .then(() => {
                props.history.push("/Dashboard");
                window.location.reload();
            })
            .catch(() => { });
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    const required = (value) => {
        if (!value) {
            return (
                <div className="alert alert-danger" role="alert">
                    Required!
                </div>
            );
        }
    };




    return {
        values,
        handleChange,
        handleLogin,
        required

    }
};

export default useForm;
