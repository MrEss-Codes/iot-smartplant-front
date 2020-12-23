import {
    DATA_RECEIVED,
    DATA_NOT_RECEIVED
} from "../actions/type";

let plant;


let initialState: { receivedData: boolean; plant: any };
initialState = plant
    ? {receivedData: true, plant}
    : {receivedData: false, plant: null};


export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case DATA_RECEIVED:
            return {
                ...state,
                receivedData: true,
                plant: payload.plant,
            };
        case DATA_NOT_RECEIVED:
            return {
                ...state,
                receivedData: false,
                plant: null,
            };
        default:
            return state;
    }
}
