import { combineReducers } from "redux";

import isLogged from "./isLoggedInUser";
import toggleLoginModal from "./LoginModalToggle";

const allReducers = combineReducers({isLogged, toggleLoginModal});

export default allReducers;
