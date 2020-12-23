import React from 'react';
import { useEffect, useState, } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {getplantdata} from "../../state/actions/plant"
import {
    Line,
    LineChart,
    XAxis,
    YAxis,
    Tooltip
} from 'recharts';


const ChartLine = () => {

    const { plant } = useSelector(state => state.plant);

    const [data, setData] = useState([
        {
            "name": "12:00",
            "value": 16.5,
        },

        {
            "name": "12:01",
            "value": 18,
        },

    ]);

    const dispatch = useDispatch();

    // 1. Listen for new data and update the state
    useEffect(() => {
        dispatch(getplantdata())
            .then(() => {
                console.log('here is the data' + plant)
            })
            .catch(() => { });
    }, []);

    // 2. render the line chart using the state
    return (
        <div>
            <h1></h1>
            <LineChart width={500} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="value" />
            </LineChart>
        </div>
    );
};

export default ChartLine;
