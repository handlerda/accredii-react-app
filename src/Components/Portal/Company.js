import React from "react";
import NoData from "../NoData";

function Company() {
  return (
    <NoData
      title="Looks like you are a new user!"
      text="Please create a new document or wait to get invited to a fund"
      buttonText="Go back"
      relativeLink="investor"
    />
  );
}

export default Company;
