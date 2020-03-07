import axios from "axios";

// Action type imports
import {
  FETCH_ALL_SMURFS_START,
  FETCH_ALL_SMURFS_SUCCESS,
  FETCH_ALL_SMURFS_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAIL
} from "./../constants/ActionTypes";

/**
 * @function: Sends a GET request using axios to fetch the smurfs from the API endpoint
 * @param: none
 * @returns: A thunk that takes dispatch as an argument
 */
export const getSmurfs = () => dispatch => {
  const urlAPI = "/smurfs";
  dispatch({ type: FETCH_ALL_SMURFS_START });
  axios
    .get(urlAPI)
    .then(res => {
      dispatch({ type: FETCH_ALL_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ALL_SMURFS_FAIL, payload: err.response });
    });
};

/**
 * @function: Sends a POST request using axios to add a smurf to the smurfs via the API endpoint
 * @param: none
 * @returns: A thunk that takes dispatch as an argument
 */
export const addSmurf = () => dispatch => {
  const urlAPI = "/smurfs";
  dispatch({ type: ADD_SMURF_START });
  axios
    .post(urlAPI)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_FAIL, payload: err.response });
    });
}

/**
 * @function: Sends a PUT request using axios to a smurf in the smurfs using the API endpoint
 * @param: none
 * @returns: A thunk that takes dispatch as an argument
 */
export const updateSmurf = (smurf) => dispatch => {
  const urlAPI = `/smurfs/{smurf.id}`;
  dispatch({ type: UPDATE_SMURF_START });
  axios
    .put(urlAPI, smurf)
    .then(res => {
      dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_SMURF_FAIL, payload: err.response });
    });
}