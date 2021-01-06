import Form from "../components/Dashboard/dashboard";
import React from "react";


const Dashboard = ({query}) => {
    return (
        <Form/>
    );
};

Dashboard.getInitialProps = ({query}) => {
    return {query}
}

export default Dashboard;
