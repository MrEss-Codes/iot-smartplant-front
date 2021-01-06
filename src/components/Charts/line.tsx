import React, {useEffect, useState} from 'react';

import {
    Line,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,


} from 'recharts';


const ChartLine = ({data, string, valuename}) => {
    const [typeOfChart] = useState(string);
    const [dName, setDName] = useState("time");
    const [dValue, setDValue] = useState("value");


   useEffect(() => {
     setDValue(valuename)
  }, []);

    return (
        <div>
            <h3>{typeOfChart}</h3>
            <LineChart width={500} height={300} data={data}>
                <XAxis dataKey={dName} />
                <Tooltip />
                <YAxis />
                <Line dataKey={dValue} />
            </LineChart>
        </div>
    );
};

export default ChartLine;
