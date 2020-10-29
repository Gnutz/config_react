import configReducer from "./configReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	config: configReducer,
	auth: null,
});

export default rootReducer;
