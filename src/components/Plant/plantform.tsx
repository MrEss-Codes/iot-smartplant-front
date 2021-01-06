import React, {useEffect, useState} from 'react';
import ChartLine from "../Charts/line"
import mockdata from "./mockdata"
import axios from 'axios';




const PlantForm = ({plantID}) => {

    const [tempData, setTempData] = useState([{}]);
    const [soilHumidData, setSoilHumidData] = useState([{}]);
    const [humidData, setHumidData] = useState([{}]);
    const [plantOnOff, setPlantOnOff] = useState("True");
    const [buttonplantactive, setPlantactive] = useState("Turn plant on");
    const [bttnPlantData, setBttnPlantData] = useState("Get plant data");
    //mock temp data
    const{
        temp,
        soilHumidity,
        humidity
    } = mockdata()
    const baseURL = 'https://localhost:5001/'



    const onClickplantONOFF = async () => {
        const id = 1;
        if(plantOnOff === "True") {
            try {
                await axios.post(baseURL + "Plant/Change/" + id +"/" + plantOnOff, {})

            } catch (err) {
                console.error(err.message);
            }
            setPlantOnOff("False")
            setPlantactive("Turn plant off")
        }
        else{
            try {
                await axios.post(baseURL + "Plant/Change/" + id +"/" + plantOnOff, {})

            } catch (err) {
                console.error(err.message);
            }
            setPlantOnOff("True")
            setPlantactive("Turn plant on")
        }
    };

    const GetPlantData = async () => {


        try {
            const plantData = await axios.get(baseURL + "plant/1", {})

            return plantData;

        } catch (err) {
            console.error(err.message);
        }
    };

    const HandlePlantData = async () => {
        console.log("1. Getting plant data with id: " + plantID)
        GetPlantData().then((data) => {
            // @ts-ignore
            const pldata = data.data
            console.log("2. plant data received. first object is")
            const humidlist = [{}]
            const shumidlist = [{}]
            const tempClist = [{}]
            let n = 0
            for (let i = 0; i < pldata.length; i++) {
                const plo = pldata[i]
                let date = new Date(plo.timeStamp)
                //for humidity
                const humid = {time:date.toLocaleTimeString(),Humidity:plo.humidity}
                humidlist.push(humid)
                //for soil humidity
                const shumid = {time:date.toLocaleTimeString(), SoilHumidity:plo.soilHumidity}
                shumidlist.push(shumid)
                //for tempC
                const temp = {time:date.toLocaleTimeString(), Temperature:plo.temperatureC}
                tempClist.push(temp)
                n = i
                if (n == 10) {
                    setHumidData(humidlist)
                    setSoilHumidData(shumidlist)
                    setTempData(tempClist)
                    setBttnPlantData("Refresh plant data")
                    console.log("3.sending data to charts")
                    return;
                }
            }
            setHumidData(humidlist)
            setSoilHumidData(shumidlist)
            setTempData(tempClist)
            setBttnPlantData("Refresh plant data")
            console.log("3.sending data to charts")
        })
            .catch(() => { });
    }

    // Used to set data when we receive it
   /* useEffect(() => {
        GetPlantData().then((data) => {
            // @ts-ignore
            const pldata = data.data
            const humidlist = [{}]
            const shumidlist = [{}]
            const tempClist = [{}]
            for (let i = 0; i < pldata.length; i++) {
                const plo = pldata[i]

                //for humidity
                const humid = {name:plo.timeStamp,value:plo.humidity}
                humidlist.push(humid)
                //for soil humidity
                const shumid = {name:plo.timeStamp, value: plo.soilHumidity}
                shumidlist.push(shumid)
                //for tempC
                const temp = {name:plo.timeStamp, value: plo.temperatureC}
                tempClist.push(temp)
            }

            setHumidData(humidlist)
            setSoilHumidData(shumidlist)
            setTempData(tempClist)
        })
            .catch(() => { });
    }, []);
*/

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
            <ChartLine data={tempData} string={"Temperature in C"} valuename={"Temperature"} />
            <ChartLine data={soilHumidData} string={"Soil humidity"} valuename={"SoilHumidity"}/>
            <ChartLine data={humidData} string={"Humidity"} valuename={"Humidity"}/>
        </div>
    );
};

export default PlantForm;

