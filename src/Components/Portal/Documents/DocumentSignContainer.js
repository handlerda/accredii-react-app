import React, { useState } from "react";
import { generateInvestorEmbeddedDocument } from "../../../Service/Backend";

function DocumentSignContainer() {
  const [sign, setSigning] = useState("!sign");
  const [helloSignData, setHelloSignData] = useState(null);
  async function embeddedSigning() {
    try {
      const signedURL = await generateInvestorEmbeddedDocument(
        id,
        document_id,
        type
      );
      console.log(`here comes the signed url`, signedURL);
      if (!signedURL["sign_url"]) setHelloSignData("signed");
      setHelloSignData(signedURL);
      setSigning("sign");
    } catch (error) {
      console.log(error);
    }
  }
  if ("sign") {
    console.log(helloSignData);
    const client = new HelloSign({
      clientId: helloSignData.client_id,
      debug: true,
    });
    client.open(helloSignData.sign_url, {
      testMode: true,
      container: document.querySelector("#hello-sign-doc"),
    });

    client.on("sign", () => {
      alert("The document has been signed!");
    });
    client.on("error", () => {
      console.log(`there was an error`);
    });
    console.log(`the iframe tried to open`);
  }
  if (sign) return <h1>Hello world</h1>;
  return <div id="hello-sign-container"></div>;
}

export default DocumentSignContainer;
