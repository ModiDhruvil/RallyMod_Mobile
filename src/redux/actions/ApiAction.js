import API_ACTION_TYPES from "./ApiActionType";

export const fetchData = () => ({
    type: API_ACTION_TYPES.API_PENDING,
  });
  
  export const fetchSuccess = (data) => ({
    type: API_ACTION_TYPES.API_SUCCESS,
    payload: data,
  });
  
  export const fetchError = (error) => ({
    type: API_ACTION_TYPES.API_ERROR,
    payload: error,
  });