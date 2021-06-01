import axios from "axios";
const api_path = process.env.REACT_APP_SERVER_URI_PROD;
const GET_INVESTOR_STATUS = "investor/getStatus";
const GET_INVESTOR_DETAILS = "investor/getDetails";
const GENERATE_INVESTOR_DOCUMENT = "investor/generateDocument";
const ADD_NEW_INVESTOR = "investor/addInvestor";
const UPDATE_INVESTOR = "investor/updateDetails";
const GENERATE_INVESTOR_EMBEDDED_DOCUMENT = "investor/generateEmbedded";

// helpers
const getStatus = (payload) => {
  return {
    type: GET_INVESTOR_STATUS,
    payload,
  };
};

const getDetails = (payload) => {
  return {
    type: GET_INVESTOR_DETAILS,
    payload,
  };
};

const generateDocument = (payload) => {
  return {
    type: GENERATE_INVESTOR_DOCUMENT,
    payload,
  };
};

const addNewInvestor = (payload) => {
  return {
    type: ADD_NEW_INVESTOR,
    payload,
  };
};

const updateCurrentInvestor = (payload) => {
  return {
    type: UPDATE_INVESTOR,
    payload,
  };
};

const generateInvestorEmbedded = (payload) => {
  return {
    type: GENERATE_INVESTOR_EMBEDDED_DOCUMENT,
    payload,
  };
};

export const getInvestorStatus = (id) => async (dispatch) => {
  const url = `${api_path}/investor/status?id=${id}`;
  const response = await axios(url);
  const investorStatus = response.data;
  dispatch(getStatus(investorStatus));
  return investorStatus;
};

export const getInvestor = (investor_id) => async (dispatch) => {
  const url = `${api_path}investor?id=${investor_id}`;
  const response = await axios(url);
  const investorDetails = response.data.investor_data;
  dispatch(getDetails(investorDetails));
  return investorDetails;
};

export const generateInvestorDocument =
  (investor_id, lawfirm_id) => async (dispatch) => {
    const url = `${api_path}document?investor_id=${investor_id}&lawfirm_id=${lawfirm_id}`;
    const response = await axios(url);
    const newDocument = response.data;
    dispatch(generateDocument(newDocument));
    return newDocument;
  };

export const insertInvestor =
  (data, attorney_id, lawfirm_id) => async (dispatch) => {
    const investorPayload = {
      attorney_id,
      lawfirm_id,
      data,
    };
    const newInvestor = (
      await axios.post(
        `${api_path}investor/new`,
        JSON.stringify(investorPayload)
      )
    ).data;
    dispatch(addNewInvestor(newInvestor));
    return newInvestor;
  };

export const updateInvestor = (investor_id, data) => async (dispatch) => {
  const investorPayload = {
    // we will add an id in the backend and return the id in the payload
    user_id: investor_id,
    data,
  };
  const response = await axios.post(
    `${api_path}investor/update`,
    investorPayload
  );
  const updatedInvestor = response.data;
  dispatch(updateCurrentInvestor(updatedInvestor));
  return updatedInvestor;
};

export const generateInvestorEmbeddedDocument =
  (id, documentId) => async (dispatch) => {
    // investor only -- the query params will be diffrent for non investors
    const url = `${api_path}investor/sign?id=${id}&doc_obj_id=${documentId}`;
    const response = await axios(url);
    const generatedEmbeddedDocument = response.data;
    dispatch(generateInvestorEmbedded(generatedEmbeddedDocument));
    return generatedEmbeddedDocument;
  };

const inititalState = { investors: null };

const investorReducer = (state = inititalState, action) => {
  let newState;
  switch (action.type) {
    case GET_INVESTOR_STATUS:
      newState = Object.assign({}, state);
      newState.status = action.payload;
      return newState;
    case GET_INVESTOR_DETAILS:
      newState = Object.assign({}, state);
      newState.details = action.payload;
      return newState;
    case GENERATE_INVESTOR_DOCUMENT:
      newState = Object.assign({}, state);
      newState.generatedDocument = action.payload;
      return newState;
    case ADD_NEW_INVESTOR:
      newState = Object.assign({}, state);
      newState.newInvestor = action.payload;
      return newState;
    case UPDATE_INVESTOR:
      newState = Object.assign({}, state);
      newState.updatedInvestor = action.payload;
      return newState;
    case GENERATE_INVESTOR_EMBEDDED_DOCUMENT:
      newState = Object.assign({}, state);
      newState.generatedEmbedded = action.payload;
      return newState;
    default:
      return state;
  }
};