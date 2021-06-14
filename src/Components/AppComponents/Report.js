import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import { getDocuments } from "../../Service/Backend";
import { useAuth0 } from "@auth0/auth0-react";
import Popup from "../Popup";

function Report({ tableHeaders, type, id, keys, content }) {
  //hit api on load
  const [documentStatus, setDocumentStatus] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    const getStatus = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: "https://accredii.com/investor",
        scope: "investor:all",
      });
      const data = await getDocuments(type, id, accessToken);
      if (data.stats.total === 0) setDocumentStatus(false);
      else setDocumentStatus(data);
    };
    getStatus();
  }, []);

  if (documentStatus === false) {
    return (
      <Popup
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
        tableRows={documentStatus[content]}
        keys={keys}
        type={type}
      />
    )
  );
}

export default Report;
