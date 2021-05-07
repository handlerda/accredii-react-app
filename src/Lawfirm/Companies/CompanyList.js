import React from "react";
import { useHistory } from "react-router";
import Report from "../../Components/AppComponents/Report";
import FormHeader from "../../Components/Form/FormHeader";
import NewButton from "../../Components/Controls/NewButton";

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
  const history = useHistory();
  return (
    <div>
      <div className="mt-4">
        <NewButton
          text="New Company"
          onClick={() => history.push(`/attorney/companies/new`)}
        ></NewButton>
      </div>

      <div>
        <Report
          content="by_company"
          tableHeaders={tableHeaders}
          keys={api_names}
          id={id}
          type={type}
        ></Report>
      </div>
    </div>
  );
}

export default CompanyList;
