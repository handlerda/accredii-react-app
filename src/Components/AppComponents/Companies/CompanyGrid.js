import React, { useState, useEffect } from "react";
import { getDocuments } from "../../../Service/Backend";
import GridItem from "../../GridList/GridItem";
import GridListContainer from "../../GridList/GridListContainer";
import Report from "../Report";

function CompanyGrid({ type, id }) {
  const [companies, setCompanies] = useState(null);
  useEffect(() => {
    const getStatus = async () => {
      const data = await getDocuments(type, id);
      setCompanies(data.data.by_company);
    };
    getStatus();
  }, []);
  console.log(companies);
  return (
    companies && (
      <div>
        <GridListContainer>
          {Object.entries(companies).map(([key, value]) => {
            return (
              <GridItem
                name={key}
                title={"hello from title"}
                text_to_left="Company Details"
                link_to_left={`/investor/documents/`}
                text_to_right=""
                link_to_right={`/investor/documents/sign/`}
              />
            );
          })}
        </GridListContainer>
      </div>
    )
  );
}

// function Documents({ type, id }) {
//     const [documents, setDocuments] = useState(null);
//     useEffect(() => {
//       const getStatus = async () => {
//         const data = await getDocuments(type, id);
//         setDocuments(data.data);
//       };
//       getStatus();
//     }, []);
//     console.log(documents);
//     return (
//       documents && (
//         <div>
//           <GridListContainer>
//             {documents.docs.map((doc) => {
//               return (
//                 <GridItem
//                   name={doc.investor_name}
//                   status={doc.investor_status}
//                   title={doc.title}
//                   text_to_left="Document Details"
//                   link_to_left={`/investor/documents/${doc.doc_obj_id}`}
//                   text_to_right="Sign"
//                   link_to_right={`/investor/documents/sign/${doc.doc_obj_id}`}
//                 />
//               );
//             })}
//           </GridListContainer>
//         </div>
//       )
//     );

export default CompanyGrid;
