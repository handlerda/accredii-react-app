import axios from "axios";

const getDocuments = async (type, id) => {
  console.log(type, id);
  const url = `http://localhost:5000/api/${type}/status?id=${id}`;
  console.log(url);
  const getDocuments = await axios(url);
  const documentJson = await getDocuments.data;
  return documentJson;
};

export default getDocuments;
