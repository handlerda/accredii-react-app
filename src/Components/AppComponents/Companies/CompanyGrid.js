import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getDocuments } from "../../../Service/Backend";
import GridItem from "../../GridList/GridItem";
import GridListContainer from "../../GridList/GridListContainer";
import Report from "../Report";

function CompanyGrid({ type, id }) {
  const companies = useSelector((state) => state.companies.status);
  // useEffect(() => {
  //   const getStatus = async () => {
  //     const data = await getDocuments(type, id);
  //     setCompanies(data.data.by_company);
  //   };
  //   getStatus();
  // }, []);
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

export default CompanyGrid;
