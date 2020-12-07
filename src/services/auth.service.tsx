import axios from 'axios';

// base api url
const baseURL = 'https://localhost:5001/'



const register = (email, password, id) => {
    return axios.post( baseURL+ "register/" + id, {
        email,
        password,
    });
};

const login = (email, password) => {
    return axios
        .post(baseURL + "authenticate", {
               email,
               password,
            })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};


const logout = () => {
    localStorage.removeItem("user");
};


export default {
    register,
    login,
    logout,
};
