import React, { useState, useEffect } from "react";
import Table from "../../Components/Table/Table";
import getDocuments from "../../Service/Backend";

function Report() {
  //hit api on load
  const [documentStatus, setDocumentStatus] = useState(null);
  useEffect(() => {
    const getStatus = async () => {
      const data = await getDocuments();
      setDocumentStatus(data);
    };
    getStatus();
  }, []);
  console.log(documentStatus);
  return documentStatus && <Table data={documentStatus} />;
}

export default Report;
