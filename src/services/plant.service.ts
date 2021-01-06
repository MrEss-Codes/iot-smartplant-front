import axios from 'axios';

// base api url
const baseURL = 'https://localhost:5001/'



const GetPlantData = () => {
    return axios
        .get(baseURL + "plant/QueryData", {})

        .then((response) => {
            console.log(response.data)
            return response.data;
        });
};

export default {
    GetPlantData,
};
