import axios from "axios";

const api_path = process.env.REACT_APP_SERVER_URI_LOCAL;
const getDocuments = async (type, id) => {
  console.log(type, id);
  const url = `${api_path}${type}/status?id=${id}`;
  console.log(url);
  const getDocuments = await axios(url);
  const documentJson = await getDocuments.data;
  return documentJson;
};

const generateInvestorEmbeddedDocument = async (id, documentId, type) => {
  const queryParams =
    type === "investor"
      ? `?id=${id}&doc_obj_id=${documentId}`
      : `?doc_obj_id=${documentId}`;
  const url = `${api_path}${type}/sign${queryParams}`;
  const documentDataURL = await axios(url);
  const generatedDocumentData = documentDataURL.data;
  console.log(generatedDocumentData);
  return generatedDocumentData;
};

const getInvestor = async (investor_id) => {
  const url = `${api_path}investor?id=${investor_id}`;
  const getInvestorData = await axios(url);
  const jsonData = await getInvestorData.data.investor_data;
  return jsonData;
};

//THIS IS A SECURITY FLAW
const generateInvestorDocument = async (investor_id, lawfirm_id) => {
  const url = `${api_path}document?investor_id=${investor_id}&lawfirm_id=${lawfirm_id}`;
  const documentDataURL = await axios(url);
  const documentJSON = documentDataURL.data;
  console.log(documentJSON);
  return documentJSON.doc_id;
};

const insertInvestor = async (data, attorney_id, lawfirm_id) => {
  const investorPayload = {
    // we will add an id in the backend and return the id in the payload
    attorney_id,
    lawfirm_id,
    data,
  };
  console.log(JSON.stringify(investorPayload));
  console.log(`hello from insert`);
  const response = await axios.post(`${api_path}investor/new`, investorPayload);
  console.log(response.data);
  return response.data;
};

const updateInvestor = async (investor_id, data) => {
  const investorPayload = {
    // we will add an id in the backend and return the id in the payload
    user_id: investor_id,
    data,
  };
  console.log(JSON.stringify(investorPayload));
  const response = await axios.post(
    `${api_path}investor/update`,
    investorPayload
  );
  console.log(response);
  return response.data;
};

const uploadNewForm = async (form_data) => {
  const url = `${api_path}document/upload/new`;
  const documentPayload = {
    encoded_form: form_data,
  };
  console.log(`here was the upload`, documentPayload);
  const upload = await axios.post(url, documentPayload);
  console.log(`here was the upload`, documentPayload);
  return upload;
};

const getDocumentInfo = async (doc_id) => {
  const url = `${api_path}document?id=${doc_id}`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};

const updateDocument = async (payload) => {
  const url = `${api_path}document/update`;
  const response = await axios.post(url, payload);
  console.log(response);
  return response.data;
};

const createNewDocument = async (
  investor_id,
  attorney_id,
  lawfirm_id,
  company_id = "",
  company_name = "",
  template_id = ""
) => {
  const url = `${api_path}document/new?investor_id=${investor_id}&attorney_id=${attorney_id}&lawfirm_id=${lawfirm_id}&company_id=${company_id}&company_name=${company_name}&template_id=${template_id}`;
  console.log(url);
  const response = await axios.get(url);
  console.log(response);
  console.log(response.data);
  return response.data;
};

const getAttorneyInfo = async (attorney_id) => {
  const url = `${api_path}lawfirm/info?id=${attorney_id}`;
  const response = await axios.get(url);
  console.log(response);
  return response.data;
};

const createNewCompany = async (data) => {
  const url = `${api_path}company/new`;
  const payload = {
    data,
  };

  const response = await axios.post(url, payload);
  console.log(response.data);
  return response.data;
};

const getViewableDocument = async (id) => {
  const url = `${api_path}document/view?id=${id}`;
  const response = await axios.get(url);
  window.open(response.url);
  return response.data;
};

export {
  getDocuments,
  generateInvestorEmbeddedDocument,
  getInvestor,
  generateInvestorDocument,
  insertInvestor,
  uploadNewForm,
  createNewDocument,
  getAttorneyInfo,
  createNewCompany,
  updateInvestor,
  updateDocument,
  getViewableDocument,
  getDocumentInfo,
};
