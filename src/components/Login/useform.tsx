import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {login} from "../../state/actions/auth";

const useForm = (callback) => {

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

    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        let results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };




    return {
        values,
        handleChange,
        handleLogin,
        required,
        getUrlParameter,

    }
};

export default useForm;
