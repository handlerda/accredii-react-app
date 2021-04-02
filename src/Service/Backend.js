import axios from "axios";

const getDocuments = async () => {
  const url = `http://localhost:5000/api/investor/status?id=90275082340`;

  const getDocuments = await axios(url);
  const documentJson = await getDocuments.data;
  return documentJson;
};

export default getDocuments;
