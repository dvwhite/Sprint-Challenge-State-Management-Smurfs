// Action types
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

// Initial redux state
const initialState = {
  smurfs: [],
  error: "",
  isFetching: false
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_ALL_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      };
    case FETCH_ALL_SMURFS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: [...action.payload]
      };
    case ADD_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case UPDATE_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload]
      };
    case UPDATE_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
