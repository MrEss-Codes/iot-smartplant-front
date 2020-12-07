import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {logout} from "../state/actions/auth";

const Profile = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
    };


    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser.email}</strong> Profile
                </h3>
            </header>
            <p>
                <strong>{currentUser.email}</strong>
            </p>

            <button className="btn btn-primary btn-block" onClick={logOut}>
                <span>Logout</span>
            </button>
        </div>
    );
};

export default Profile;
