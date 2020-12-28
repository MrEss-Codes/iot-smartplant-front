import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {getplantdata} from "../../state/actions/plant";
import ChartLine from "../Charts/line"
import mockdata from "./mockdata"


/* To be used for updating data
    useEffect(() => {
        dispatch(getplantdata())
            .then(() => {
                console.log('here is the data' + plant)
            })
            .catch(() => { });
    }, []);
    */


const PlantForm = ({plantID}) => {

    const [tempData, setTempData] = useState([{}]);
    const [soilHumidData, setSoilHumidData] = useState([{}]);
    const [humidData, setHumidData] = useState([{}]);

    const { plant } = useSelector(state => state.plant);

    const dispatch = useDispatch();

    //mock temp data
    const{
        temp,
        soilHumidity,
        humidity
    } = mockdata()

    //put in mockdata
    useEffect(() => {
        setTempData(temp)
        setSoilHumidData(soilHumidity)
        setHumidData(humidity)
    },[]);



    return (
        <div>
            <h2>Device: {plantID}</h2>
            <h3>Temperature</h3>
            <ChartLine data={tempData}/>
            <h3>Soil humidity</h3>
            <ChartLine data={soilHumidData}/>
            <h3>Humidity</h3>
            <ChartLine data={humidData}/>
        </div>
    );
};

export default PlantForm;

