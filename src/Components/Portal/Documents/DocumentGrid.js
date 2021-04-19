import React, { useEffect, useState } from "react";
import GridListContainer from "../../GridList/GridListContainer";
import { getDocuments } from "../../../Service/Backend";
import GridItem from "../../GridList/GridItem";
import NoData from "../../NoData";

function Documents({ type, id }) {
  const [documents, setDocuments] = useState(null);
  useEffect(() => {
    const getStatus = async () => {
      const data = await getDocuments(type, id);
      if (data.data.docs.length) setDocuments(data.data);
      else setDocuments(false);
    };
    getStatus();
  }, []);
  console.log(documents);

  if (documents === false) {
    return (
      <NoData
        title="No Documents"
        text="Please create a new document or wait to get invited to a fund"
        buttonText="Go back"
        relativeLink={type}
      />
    );
  }
  return (
    documents && (
      <div>
        <GridListContainer>
          {documents.docs.map((doc) => {
            console.log(doc);
            return (
              <GridItem
                name={doc.investor_name}
                status={doc.status}
                title={doc.title}
                text_to_left="Document Details"
                link_to_left={`/${type}/documents/${doc.doc_obj_id}`}
                id={doc.viewable === true ? doc.doc_obj_id : null}
                text_to_middle={"View"}
                text_to_right={doc.status === "completed" ? "View" : "sign"}
                link_to_right={
                  doc.status === "completed"
                    ? `/${type}/documents/view?id=${doc.doc_obj_id}`
                    : `/${type}/documents/sign/${doc.doc_obj_id}`
                }
              />
            );
          })}
        </GridListContainer>
      </div>
    )
  );
}

export default Documents;
