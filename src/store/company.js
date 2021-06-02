import axios from "axios";
const CREATE_NEW_COMPANY = "company/addNew";
const CREATE_NEW_EMBEDDED_DOCUMENT = "company/newEmbedded";
const GET_COMPANY_STATUS = "company/getStatus";
const api_path = process.env.REACT_APP_SERVER_URI_PROD;

// helpers
const createNewCompanyHelper = (payload) => {
  return {
    type: CREATE_NEW_COMPANY,
    payload,
  };
};

const newEmbeddedHelper = (payload) => {
  return {
    type: CREATE_NEW_EMBEDDED_DOCUMENT,
    payload,
  };
};

const getCompanyStatusHelper = (payload) => {
  return {
    type: GET_COMPANY_STATUS,
    payload,
  };
};

export const createNewCompany = (data) => async (dispatch) => {
  const url = `${api_path}company/new`;
  const payload = {
    data,
  };
  const response = await axios.post(url, payload);
  const newCompany = response.data;
  dispatch(createNewCompanyHelper(newCompany));
  return response.data;
};

export const generateInvestorEmbeddedDocument =
  (id, documentId, type) => async (dispatch) => {
    const url = `${api_path}company/sign?doc_obj_id=${documentId}`;
    const documentDataURL = await axios(url);
    const generatedDocumentData = documentDataURL.data;
    dispatch(newEmbeddedHelper(generatedDocumentData));
    return generatedDocumentData;
  };

export const getCompanyStatus = (id) => async (dispatch) => {
  const url = `${api_path}company/status?id=${id}`;
  const response = await axios(url);
  const companyStatus = response.data;
  dispatch(getCompanyStatusHelper(companyStatus));
  return companyStatus;
};

const inititalState = { company: null };
const companyReducer = (state = inititalState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_NEW_COMPANY:
      newState = Object.assign({}, state);
      newState.newCompany = action.payload;
      return newState;
    case CREATE_NEW_EMBEDDED_DOCUMENT:
      newState = Object.assign({}, state);
      newState.newEmbeddedDocument = action.payload;
      return newState;
    case GET_COMPANY_STATUS:
      newState = Object.assign({}, state);
      newState.status = action.payload;
      return newState;
    default:
      return state;
  }
};

export default companyReducer;
