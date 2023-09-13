import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_DATA_DETAILS,
  } from "./actionTypes";
  
  import axios from "axios";
  export const coursesRequest = () => {
    return {
      type: FETCH_DATA_REQUEST,
    };
  };
  
  export const coursesSuccess = (payload) => {
    return {
      type: FETCH_DATA_SUCCESS,
      payload,
    };
  };
  
  export const coursesFailure = (error) => {
    return {
      type: FETCH_DATA_FAILURE,
      error,
    };
  };
  
  export const getCoursesData = (params) => (dispatch) => {
    dispatch(coursesRequest());
    return axios
      .get("http://localhost:3000/courseData",params)
      .then((response) => {
        dispatch(coursesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(coursesFailure(error));
      });
  };
  export const getoverviewData = (params) => (dispatch) => {
    dispatch(coursesRequest());
    return axios
      .get("http://localhost:3000/overviewData",params)
      .then((response) => {
        dispatch(coursesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(coursesFailure(error));
      });
  };
  export const getregData = (params) => (dispatch) => {
    dispatch(coursesRequest());
    return axios
      .get("http://localhost:3000/regData",params)
      .then((response) => {
        dispatch(coursesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(coursesFailure(error));
      });
  };