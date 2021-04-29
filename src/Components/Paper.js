import React from "react";

//default wrapperCSS = shadow sm:rounded-md sm:overflow-hidden
//default innerCSS = px-4 py-5 bg-white space-y-6 sm:p-6

function Paper({
  children,
  wrapperCSS = "shadow sm:rounded-md sm:overflow-hidden",
  innerCSS = "px-4 py-5 bg-white space-y-6 sm:p-6",
}) {
  return (
    <div className={wrapperCSS}>
      <div className={innerCSS}>{children}</div>
    </div>
  );
}

export default Paper;
