import PlantService from "../../services/plant.service";
import {DATA_RECEIVED, DATA_NOT_RECEIVED, SET_MESSAGE} from "./type";


export const getplantdata = () => (dispatch) => {
    return PlantService.GetPlantData().then(
        (data) => {
            dispatch({
                type: DATA_RECEIVED,
                payload: { plant: data },
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: DATA_NOT_RECEIVED,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};
