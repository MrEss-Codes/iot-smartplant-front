import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {logout} from "../../state/actions/auth";
import {Redirect} from 'react-router-dom';
import Line from '../Charts/line';
import useForm from "./useform";

const Dashboard = () => {

    const dispatch = useDispatch();

    const {
        currentUser,
        getUrlParameter,
    } = useForm();

    console.log('oi that id is ' + getUrlParameter('id'))

    const logOut = () => {
        dispatch(logout());
    };


    if (!currentUser) {
        return <Redirect href="/login" />;
    }

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser.email}</strong> Profile
                </h3>
            </header>
            <h3>List of your devices and relevant sensor information</h3>
            <p>
                <strong>Device ids:</strong> {currentUser.devices}
            </p>
            <h3>temperature</h3>
            <Line/>
            <button className="btn btn-primary btn-block" onClick={logOut}>
                <span>Logout</span>
            </button>
        </div>
    );
};


export default Dashboard;
