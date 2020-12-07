import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, } from "react-router-dom";
import Link from "next/link";



import "bootstrap/dist/css/bootstrap.min.css";
//import "./Index.css";

import login from "./Login";
import register from "./Register";
import dashboard from "./Dashboard";


import { history } from "../helpers/history";

const Index = () => {

    return (
        <Router history={history}>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/login"]} component={login} />
                        <Route exact path="/dashboard" component={dashboard} />
                        <Route exact path="/register" component={register} />
                    </Switch>
                </div>
        </Router>
    );
};




export default Index;
