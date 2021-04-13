import React from "react";
import Report from "../../Components/Portal/Report";

const api_names = [
  "name",
  "awaiting_company",
  "awaiting_investor",
  "awaiting_lawfirm",
  "completed",
];

const tableHeaders = [
  { name: "Name" },
  { name: "Awaiting Company" },
  { name: "Awaiting Investor" },
  { name: "Awaiting Lawfirm" },
  { name: "Completed" },
];

function CompanyList({ id, type }) {
  return (
    <Report
      content="by_company"
      tableHeaders={tableHeaders}
      keys={api_names}
      id={id}
      type={type}
    ></Report>
  );
}

export default CompanyList;
