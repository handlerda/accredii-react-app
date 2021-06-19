import axios from "axios";
const CREATE_NEW_TEMPLATE = "document/template/new";
const GET_DOCUMENT_INFO = "document/info";
const UPDATE_DOCUMENT = "document/update";
const CREATE_NEW_DOCUMENT = "document/create/new";
const GET_VIEWABLE_DOCUMENT = "document/get/viewable";
const RESET_DOCUMENT = "document/reset";
const api_path = process.env.REACT_APP_SERVER_URI_PROD;

//helper functions
const addNewTemplateHelper = (payload) => {
  return {
    type: CREATE_NEW_TEMPLATE,
    payload,
  };
};

const getDocumentDetailsHelper = (payload) => {
  return {
    type: GET_DOCUMENT_INFO,
    payload,
  };
};

const updateDocumentDetailsHelper = (payload) => {
  return {
    type: UPDATE_DOCUMENT,
    payload,
  };
};

const createNewDocumentHelper = (payload) => {
  return {
    type: CREATE_NEW_DOCUMENT,
    payload,
  };
};

const getViewableDocumentHelper = (payload) => {
  return {
    type: GET_VIEWABLE_DOCUMENT,
    payload,
  };
};

export const uploadNewForm = (form_data) => async (dispatch) => {
  const url = `${api_path}document/upload/new`;
  const documentPayload = {
    encoded_form: form_data,
  };
  const response = await axios.post(url, documentPayload);
  const upload = response.data;
  dispatch(addNewTemplateHelper(upload));
  return upload;
};

export const getDocumentInfo = (doc_id, token) => async (dispatch) => {
  const url = `${api_path}document?doc_obj_id=${doc_id}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const documentDetails = response.data;
  console.log(documentDetails);
  dispatch(getDocumentDetailsHelper(documentDetails));
  return documentDetails;
};

export const updateDocument = (payload) => async (dispatch) => {
  const url = `${api_path}document/update`;
  const response = await axios.post(url, payload);
  const updatedDocument = response.data;
  dispatch(updateDocumentDetailsHelper(updateDocument));
  return updatedDocument;
};

export const createNewDocument =
  (investor_id, attorney_id, company_id = "", template_id = "", token) =>
  async (dispatch) => {
    const url = `${api_path}document`;
    const data = {
      data: {
        investor_auth0_id: investor_id,
        attorney_auth0_id: attorney_id,
        company_auth0_id: company_id,
        template_id: template_id,
      },
    };
    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(createNewDocumentHelper(response.data));
      return response.status;
    } catch (error) {
      dispatch(createNewDocumentHelper(error.response));
      return error.response.status;
    }
  };

export const getViewableDocument = (id, token) => async (dispatch) => {
  const url = `${api_path}document/view?doc_obj_id=${id}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  console.log(`hello world`);
  //should return the res.url and dispatch in the component
  dispatch(getViewableDocumentHelper(response));
  console.log(response);
  return response.data;
};

const inititalState = { document: null };

const documentReducer = (state = inititalState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_NEW_TEMPLATE:
      newState = Object.assign({}, state);
      newState.newTemplate = action.payload;
      return newState;
    case GET_DOCUMENT_INFO:
      newState = Object.assign({}, state);
      newState.documentInfo = action.payload;
      return newState;
    case UPDATE_DOCUMENT:
      newState = Object.assign({}, state);
      newState.updatedDocument = action.payload;
      return newState;
    case CREATE_NEW_DOCUMENT:
      newState = Object.assign({}, state);
      newState.newDocument = action.payload;
      return newState;
    case GET_VIEWABLE_DOCUMENT:
      newState = Object.assign({}, state);
      newState.viewableDocument = action.payload;
      return newState;
    case RESET_DOCUMENT:
      return newState;
    default:
      return state;
  }
};

export default documentReducer;
