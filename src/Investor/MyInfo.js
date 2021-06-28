import React, { useEffect, useState } from "react";
import FormTemplate from "./FormTemplate";
//import { getInvestor } from "../Service/Backend";
import { useDispatch, useSelector } from "react-redux";
import { getInvestor } from "../store/investor";
import { useAuth0 } from "@auth0/auth0-react";

function MyInfo({ id }) {
  const { getAccessTokenSilently } = useAuth0();
  const investor = useSelector((state) => state.investor.details);
  const [loaded, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getInvestorInfo = async (id) => {
      const accessToken = await getAccessTokenSilently({
        audience: "https://accredii.com/authorization",
        scope: "investor:all",
      });
      const response = await dispatch(getInvestor(id, accessToken));
      setLoading(true);
      return response;
    };
    getInvestorInfo(id);
  }, [dispatch]);

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
