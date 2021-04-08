import React, { useEffect, useState } from "react";
import FormTemplate from "./FormTemplate";
import { getInvestor } from "../Service/Backend";

function MyInfo() {
  const [investorInfo, setInvestorInfo] = useState(null);

  useEffect(() => {
    const getInvestorInfo = async (id) => {
      const response = await getInvestor(id);
      console.log(response);
      const data = await response;
      setInvestorInfo(data[0]);
    };
    getInvestorInfo("auth0|60688e791549f20070e6281a");
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
