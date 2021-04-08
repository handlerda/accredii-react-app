import React, { useEffect, useState } from "react";
import GridListContainer from "../../GridList/GridListContainer";
import { getDocuments } from "../../../Service/Backend";
import GridItem from "../../GridList/GridItem";

function Documents({ type, id }) {
  const [documents, setDocuments] = useState(null);
  useEffect(() => {
    const getStatus = async () => {
      const data = await getDocuments(type, id);
      setDocuments(data.data);
    };
    getStatus();
  }, []);
  console.log(documents);
  return (
    documents && (
      <div>
        <GridListContainer>
          {documents.docs.map((doc) => {
            return (
              <GridItem
                investor={doc.investor_name}
                status={doc.investor_status}
                title={doc.title}
                document_id={doc.doc_obj_id}
                id={doc.investor_auth_zero_id}
                type={type}
              />
            );
          })}
        </GridListContainer>
      </div>
    )
  );
}

export default Documents;
