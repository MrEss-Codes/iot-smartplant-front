import axios from "axios";
import {useState} from "react";

const useForm = (plantID) => {

    const [tempData, setTempData] = useState([{}]);
    const [soilHumidData, setSoilHumidData] = useState([{}]);
    const [humidData, setHumidData] = useState([{}]);
    const [plantOnOff, setPlantOnOff] = useState("True");
    const [buttonplantactive, setPlantactive] = useState("Turn plant on");
    const [bttnPlantData, setBttnPlantData] = useState("Get plant data");
    const [errMsg,setErrMsg ] = useState("");

    const baseURL = 'https://localhost:5001/'

    //axios function for getting the data
    const GetPlantData = async () => {

        try {
            const plantData = await axios.get(baseURL + "plant/1", {})

            return plantData;

        } catch (err) {
            console.error(err.message);
            setErrMsg("Error: " + err.message)
        }
    };

    //get and format data so we can use it with charts.
    const HandlePlantData = async () => {
        clearerr()
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
