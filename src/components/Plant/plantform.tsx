import React from 'react';
import ChartLine from "../Charts/line"
import useForm from "./useForm"




const PlantForm = ({plantID}) => {
   //get functions from the useForm
    const{
        buttonplantactive,
        bttnPlantData,
        tempData,
        humidData,
        soilHumidData,
        errMsg,
        onClickplantONOFF,
        HandlePlantData,
    } = useForm(plantID)

    return (
        <div>
            <h2>Device: {plantID}</h2>
            <p>How to: Click plant on button and then click get plant data.</p>
            <button className="btn btn-primary btn-block" onClick={onClickplantONOFF}>
                <span>{buttonplantactive}</span>
            </button>
            <button className="btn btn-primary btn-block" onClick={HandlePlantData}>
                <span>{bttnPlantData}</span>
            </button>
            <p>{errMsg}</p>
            <ChartLine data={tempData} string={"Temperature in C"} valuename={"Temperature"} />
            <ChartLine data={soilHumidData} string={"Soil humidity"} valuename={"SoilHumidity"}/>
            <ChartLine data={humidData} string={"Humidity"} valuename={"Humidity"}/>
        </div>
    );
};

export default PlantForm;

