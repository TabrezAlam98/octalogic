
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_DETAILS,
    FETCH_DATA_FAILURE,
  } from "./actionTypes";
  
  const initState = {
    isLoading: true,
    isError: false,
    course: [],
  };
  
  export const CourseReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          course: payload,
          isLoading: false,
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          isError: true,
        };
      default:
        return state;
    }
  };
  