import {createStore, combineReducers, applyMiddleware} from "redux";
//Redux Logger
import { createLogger } from "redux-logger";
//Redux Thunk
import thunk from "redux-thunk";
//Redux Promise
import promise from "redux-promise-middleware";

import resumeReducer from "./reducers/resumeReducer";

export default createStore(combineReducers({
	resume: resumeReducer,
}), {}, applyMiddleware(createLogger(), thunk, promise()));