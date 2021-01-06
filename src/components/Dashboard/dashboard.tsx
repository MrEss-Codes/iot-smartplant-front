import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {logout} from "../../state/actions/auth";
import {Redirect} from 'react-router-dom';
import useForm from "./useform";
import PlantForm from "../Plant/plantform";

const Dashboard = () => {

    const dispatch = useDispatch();

    const {
        currentUser,
        newDeviceDetected
    } = useForm();

    if(localStorage.getItem("newid") !== null || undefined){
        var id = localStorage.getItem("newid")
        newDeviceDetected(id)
    }


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
            <PlantForm plantID={currentUser.devices}/>
            <button className="btn btn-primary btn-block" onClick={logOut}>
                <span>Logout</span>
            </button>
        </div>
    );
};


export default Dashboard;
