import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import { getDocuments } from "../../Service/Backend";
import { useAuth0 } from "@auth0/auth0-react";
import Popup from "../Popup";
import { useSelector } from "react-redux";

function Report({ tableHeaders, type, id, keys, content }) {
  //hit api on load
  const [documentStatus, setDocuments] = useState(null);

  const reduxValue = useSelector((state) => state);
  console.log(`here from documents`, reduxValue);
  useEffect(() => {
    function documentChecker(data) {
      // if data will return data
      // if no data will set status to false
      data.stats.total > 0 ? setDocuments(data) : setDocuments(false);
    }
    switch (type) {
      case "investor":
        documentChecker(reduxValue.investor.status);
        break;
      case "attorney":
        documentChecker(reduxValue.attorney.status);
        break;
      case "company":
        documentChecker(reduxValue.company.status);
        break;
      default:
        break;
    }
  }, [documentStatus]);

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
