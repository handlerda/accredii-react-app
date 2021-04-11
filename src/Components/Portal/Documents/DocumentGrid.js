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
                name={doc.investor_name}
                status={doc.investor_status}
                title={doc.title}
                text_to_left="Document Details"
                link_to_left={`/investor/documents/${doc.doc_obj_id}`}
                text_to_right="Sign"
                link_to_right={`/investor/documents/sign/${doc.doc_obj_id}`}
              />
            );
          })}
        </GridListContainer>
      </div>
    )
  );
}

export default Documents;
