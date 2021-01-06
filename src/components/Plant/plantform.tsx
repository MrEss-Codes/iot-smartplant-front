import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import ChartLine from "../Charts/line"
import mockdata from "./mockdata"
import axios from 'axios';




const PlantForm = ({plantID}) => {

    const dispatch = useDispatch();

    const [plantData, setPlantData] = useState([{}]);
    const [tempData, setTempData] = useState([{}]);
    const [soilHumidData, setSoilHumidData] = useState([{}]);
    const [humidData, setHumidData] = useState([{}]);
    //mock temp data
    const{
        temp,
        soilHumidity,
        humidity
    } = mockdata()



    const GetPlantData = async () => {
        const baseURL = 'https://localhost:5001/'

        try {
            const plantData = await axios.get(baseURL + "plant/QueryData", {})

            console.log(plantData.data);
            return plantData;

        } catch (err) {
            console.error(err.message);
        }
    };

    // Used to set data when we receive it
    useEffect(() => {
        GetPlantData().then((data) => {
            // @ts-ignore
            const pldata = data.data
            //get humidity from plantData and combine it to an object with timestamp then we set it.
            const humid = [{name: pldata.timeStamp, value:pldata.humidity}]
            setHumidData(humid)
            //same for Soil Humidity
            const shumid = [{name:pldata.timeStamp, value:pldata.soilHumidity}]
            setSoilHumidData(shumid)
            // lastly temperature
            const temp = [{name: pldata.timeStamp, value:pldata.temperatureC}]
            setTempData(temp)

        })
            .catch(() => { });


    }, []);


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

