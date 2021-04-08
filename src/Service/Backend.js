import axios from "axios";

const getDocuments = async (type, id) => {
  console.log(type, id);
  const url = `http://localhost:5000/api/${type}/status?id=${id}`;
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
  const url = `http://localhost:5000/api/${type}/sign${queryParams}`;
  const documentDataURL = await axios(url);
  const generatedDocumentData = documentDataURL.data;
  console.log(generatedDocumentData);
  return generatedDocumentData;
};

const getInvestor = async (investor_id) => {
  const url = `http://localhost:5000/api/investor?id=${investor_id}`;
  const getInvestorData = await axios(url);
  const jsonData = await getInvestorData.data.investor_data;
  return jsonData;
};

export { getDocuments, generateInvestorEmbeddedDocument, getInvestor };
