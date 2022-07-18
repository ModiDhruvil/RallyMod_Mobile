import API_ACTION_TYPES from "../actions/ApiActionType";

const initialState = {
    loading: false,
    data: '',
    error: '',
  };
  
  const ApiReducer = (state = initialState, action) => {
    switch (action.type) {
      case API_ACTION_TYPES.API_PENDING:
        return {
          ...state,
          loading: true,
        };
      case API_ACTION_TYPES.API_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
      case API_ACTION_TYPES.API_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default ApiReducer;