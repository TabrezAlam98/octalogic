


import { applyMiddleware, combineReducers,  compose, legacy_createStore } from "redux";

import thunk from "redux-thunk";
import { CourseReducer } from "./TableDataRedecer/reducer";



// import {SearchJobsReducer} from "../Redux/FindJobsReducer/reducer"


const rootReducer = combineReducers({ 
  
  CourseReducer: CourseReducer,
  
});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);