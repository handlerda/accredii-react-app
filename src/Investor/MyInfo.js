import React, { useEffect, useState } from "react";
import FormTemplate from "./FormTemplate";
//import { getInvestor } from "../Service/Backend";
import { useDispatch, useSelector } from "react-redux";
import { getInvestor } from "../store/investor";

function MyInfo({ id }) {
  const investor = useSelector((state) => state.investor.details);
  const [loaded, setLoading] = useState(false);
  const dispatch = useDispatch();
  console.log(investor);

  useEffect(() => {
    const getInvestorInfo = async (id) => {
      const response = await dispatch(getInvestor(id));
      setLoading(true);
      return response;
    };
    getInvestorInfo(id);
  }, [dispatch]);
  console.log(`here from investor`, investor);

  if (!loaded) {
    return <h1>Loading</h1>;
  }
  return (
    investor && (
      <div className="pt-6">
        <FormTemplate data={investor[0]} />
      </div>
    )
  );
}

export default MyInfo;
