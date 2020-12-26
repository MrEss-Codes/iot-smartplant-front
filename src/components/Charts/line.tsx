import React, {useEffect, useState} from 'react';

import {
    Line,
    LineChart,
    XAxis,
    YAxis,
} from 'recharts';


const ChartLine = ({data}) => {

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
