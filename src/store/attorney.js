import axios from "axios";
const GET_ATTORNEY_STATUS = "attorney/getStatus";
const GET_ATTORNEY_INFO = "attorney/GetInfo";
const api_path = process.env.REACT_APP_SERVER_URI_PROD;

const getAttorneyStatusHelper = (payload) => {
  return {
    type: GET_ATTORNEY_STATUS,
    payload,
  };
};

const getAttorneyInfoHelper = (payload) => {
  return {
    type: GET_ATTORNEY_INFO,
    payload,
  };
};

export const getAttorneyStatus = (id) => async (dispatch) => {
  const url = `${api_path}attorney/status?id=${id}`;
  const response = await axios(url);
  const status = await response.data;
  dispatch(getAttorneyStatusHelper(status));
  return status;
};

export const getAttorneyInfo = (attorney_id) => async (dispatch) => {
  const url = `${api_path}lawfirm/info?id=${attorney_id}`;
  const response = await axios.get(url);
  const attorneyInfo = response.data;
  dispatch(getAttorneyInfoHelper(attorneyInfo));
};

const inititalState = { attorney: null };

const attorneyReducer = (state = inititalState, action) => {
  let newState;
  switch (action.type) {
    case GET_ATTORNEY_STATUS:
      newState = Object.assign({}, state);
      newState.status = action.payload;
      return newState;
    case GET_ATTORNEY_INFO:
      newState = Object.assign({}, state);
      newState.info = action.payload;
      return newState;
    default:
      return state;
  }
};

export default attorneyReducer;
