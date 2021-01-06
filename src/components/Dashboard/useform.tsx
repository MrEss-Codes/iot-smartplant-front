import {useState} from "react";
import { useSelector } from "react-redux";


const useForm = () => {

    const { user: currentUser } = useSelector((state) => state.auth);

    const newDeviceDetected = (newid) => {
        console.log("The new id is: " + newid)
    };
    return {
        currentUser,
        newDeviceDetected,
    }
};

export default useForm;









