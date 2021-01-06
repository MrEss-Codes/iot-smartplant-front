import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {register} from "../../state/actions/auth";
import { isEmail } from "validator";
import {useRouter} from "next/router";

const useForm = (props) => {

    const [values, setValues] = useState({
        email: undefined,
        password: undefined,
        password2: undefined,
    });

    const { message } = useSelector(state => state.message);

    const [successful, setSuccessful] = useState(false);

    const [id, setId] = useState("");

    const dispatch = useDispatch();

    const router = useRouter();

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

    const redirecttologin = () => {
        router.push('/')
    }

    const handleRegister = (e) => {
        e.preventDefault();
        setSuccessful(false);
        if (values.password !== values.password2){
            return (
                alert('password does not match')
            );
        }
        dispatch(register(values.email, values.password, id))
            .then(() => {
                setSuccessful(true);
                redirecttologin();
            })
            .catch(() => {
                setSuccessful(false);
            });
    };

    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        let results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    useEffect(() => {
        var prmid = getUrlParameter("id")
        setId(prmid)
    }, []);

    const validEmail = (value) => {
        if (!isEmail(value)) {
            return (
                <div className="alert alert-danger" role="alert">
                    This is not a valid email.
                </div>
            );
        }
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


    return {
        values,
        handleChange,
        required,
        handleRegister,
        successful,
        message,
        validEmail,
        vpassword,

    }
};

export default useForm;
