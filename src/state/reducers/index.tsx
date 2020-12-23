import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import plant from "./plant";

export default combineReducers({
    auth,
    message,
    plant,
});
