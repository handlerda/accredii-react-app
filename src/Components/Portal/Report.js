import React, { useState, useEffect } from "react";
import Table from "../../Components/Table/Table";
import { getDocuments } from "../../Service/Backend";

function Report({ tableHeaders, type, id, keys }) {
  //hit api on load
  const [documentStatus, setDocumentStatus] = useState(null);
  useEffect(() => {
    const getStatus = async () => {
      const data = await getDocuments(type, id);
      setDocumentStatus(data);
    };
    getStatus();
  }, []);
  return (
    documentStatus && (
      <Table
        tableHeads={tableHeaders}
        tableRows={documentStatus.data.docs}
        keys={keys}
      />
    )
  );
}

export default Report;
