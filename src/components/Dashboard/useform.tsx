import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

const useForm = () => {

    const { user: currentUser } = useSelector((state) => state.auth);

    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        let results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };


    return {
        currentUser,
        getUrlParameter,
    }
};

export default useForm;









