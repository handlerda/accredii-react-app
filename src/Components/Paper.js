import React from "react";

function Paper(props) {
  return (
    <div className="shadow sm:rounded-md sm:overflow-hidden">
      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
        {props.children}
      </div>
    </div>
  );
}

export default Paper;
