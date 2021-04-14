import React, { useState, useEffect } from "react";
import Table from "../../Components/Table/Table";
import { getDocuments } from "../../Service/Backend";
import NoData from "../NoData";

function Report({ tableHeaders, type, id, keys, content }) {
  //hit api on load
  const [documentStatus, setDocumentStatus] = useState(null);
  useEffect(() => {
    const getStatus = async () => {
      const data = await getDocuments(type, id);
      if (data.data.stats.total === 0) setDocumentStatus(false);
      else setDocumentStatus(data);
    };
    getStatus();
  }, []);

  if (documentStatus === false) {
    return (
      <NoData
        title="Looks like you are a new user!"
        text="Please create a new document or wait to get invited to a fund"
        buttonText="Go back"
        relativeLink={type}
      />
    );
  }

  return (
    documentStatus && (
      <Table
        tableHeads={tableHeaders}
        tableRows={documentStatus.data[content]}
        keys={keys}
      />
    )
  );
}

export default Report;
