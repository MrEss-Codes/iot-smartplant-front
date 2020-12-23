import React from "react";
import { Router, Switch, Route, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login";
import Register from "./register";
import Dashboard from "./dashboard";

//History is used for maintaining state, ie keeping the token with us when we redirect to the dashboard.
import { history } from "../helpers/history";

const Index = () => {
    return (
        <Router history={history}>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/login"]} component={Login} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </div>
        </Router>
    );
};

export default Index;
