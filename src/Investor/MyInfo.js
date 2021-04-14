import React, { useEffect, useState } from "react";
import FormTemplate from "./FormTemplate";
import { getInvestor } from "../Service/Backend";

function MyInfo({ id }) {
  const [investorInfo, setInvestorInfo] = useState(null);

  useEffect(() => {
    const getInvestorInfo = async (id) => {
      const response = await getInvestor(id);
      console.log(response);
      const data = await response;
      setInvestorInfo(data[0]);
    };
    getInvestorInfo(id);
  }, []);
  return (
    investorInfo && (
      <div className="pt-6">
        <FormTemplate data={investorInfo} />
      </div>
    )
  );
}

export default MyInfo;
