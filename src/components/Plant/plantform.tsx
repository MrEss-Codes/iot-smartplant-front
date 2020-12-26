import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {getplantdata} from "../../state/actions/plant";
import ChartLine from "../Charts/line"
import mockdata from "./mockdata"



const PlantForm = ({plantID}) => {

    const [tempData, setTempData] = useState([{}]);
    const [moistData, setMoistData] = useState([{}]);

    const { plant } = useSelector(state => state.plant);

    const dispatch = useDispatch();

    //mock temp data
    const{
        temp,
        moist
    } = mockdata()

    //put in mockdata
    useEffect(() => {
        setTempData(temp)
        setMoistData(moist)
    },[]);

    /* To be used for updating data
    useEffect(() => {
        dispatch(getplantdata())
            .then(() => {
                console.log('here is the data' + plant)
            })
            .catch(() => { });
    }, []);
    */

    return (
        <div>
            <h2>Device: {plantID}</h2>
            <h3>Temperature</h3>
            <ChartLine data={tempData}/>
            <h3>Moisture</h3>
            <ChartLine data={moistData}/>
        </div>
    );
};

export default PlantForm;

