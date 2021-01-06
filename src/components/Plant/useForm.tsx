import axios from "axios";
import {useState} from "react";

const useForm = (plantID) => {

    const [tempData, setTempData] = useState([{}]);
    const [soilHumidData, setSoilHumidData] = useState([{}]);
    const [humidData, setHumidData] = useState([{}]);
    const [plantOnOff, setPlantOnOff] = useState("True");
    const [buttonplantactive, setPlantactive] = useState("Turn on");
    const [bttnPlantData, setBttnPlantData] = useState("Get plant data");
    const [errMsg,setErrMsg ] = useState("");

    const baseURL = 'https://localhost:5001/'

    //axios function for getting the data
    const GetPlantData = async () => {

        try {
            const plantData = await axios.get(baseURL + "plant/" + plantID, {})

            return plantData;

        } catch (err) {
            console.error(err.message);
            setErrMsg("Error: " + err.message)
        }
    };

    const Dataformatter = (data, n) => {

        const humidlist = [{}]
        const shumidlist = [{}]
        const tempClist = [{}]
        humidlist.pop()
        shumidlist.pop()
        tempClist.pop()

        for (let i = n; i < data.length; i++) {
            const plo = data[i]
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
        }
        setHumidData(humidlist)
        setSoilHumidData(shumidlist)
        setTempData(tempClist)

    }

    //get and format data so we can use it with charts.
    const HandlePlantData = async () => {
        clearerr()
        console.log("1. Getting plant data with id: " + plantID)
        GetPlantData().then((data) => {
            // @ts-ignore
            const pldata = data.data
            console.log("2. plant data received. length is: " + pldata.length)
            if(pldata.length > 10) {
                let n = pldata.length - 10
                Dataformatter(pldata, n)
            }
            else{
                let n = 0
                Dataformatter(pldata, n)
            }
            setBttnPlantData("Refresh plant data")
            console.log("3.sending data to charts")
        })
            .catch(() => { });
    }

    // Function for putting the plant in active or not active state.
    const onClickplantONOFF = async () => {
        const id = 1;
        if(plantOnOff === "True") {
            try {
                await axios.post(baseURL + "Plant/Change/" + id +"/" + plantOnOff, {})

            } catch (err) {
                console.error(err.message);
            }
            setPlantOnOff("False")
            setPlantactive("Turn Off")
        }
        else{
            try {
                await axios.post(baseURL + "Plant/Change/" + id +"/" + plantOnOff, {})

            } catch (err) {
                console.error(err.message);
            }
            setPlantOnOff("True")
            setPlantactive("Turn on")
        }
    };

    const clearerr = async () => {
        setErrMsg("")
    }


    return {
      onClickplantONOFF,
      HandlePlantData,
      tempData,
      soilHumidData,
      humidData,
      buttonplantactive,
      bttnPlantData,
        errMsg,
    }
};

export default useForm;
