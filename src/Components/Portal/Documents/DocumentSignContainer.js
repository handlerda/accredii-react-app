import React, { useState, useEffect } from "react";
import { generateInvestorEmbeddedDocument } from "../../../Service/Backend";
import HelloSign from "hellosign-embedded";
import { useParams } from "react-router";

function DocumentSignContainer({ user_id, type }) {
  let counter = 0;
  const [sign, setSigning] = useState("!sign");
  const [helloSignData, setHelloSignData] = useState(null);
  const { documentId } = useParams();

  useEffect(() => {
    counter++;
    console.log(`how many times did I run counter ${counter}`);
    const embeddedSigningData = async () => {
      try {
        const signedURL = await generateInvestorEmbeddedDocument(
          user_id,
          documentId,
          type
        );
        console.log(`here comes the signed url`, signedURL);
        setHelloSignData(signedURL);
        setSigning("sign");
      } catch (error) {
        console.log(error);
      }
    };
    embeddedSigningData();
  }, []);

  if (sign === "sign") {
    console.log(`hello from counter ${counter}`);
    const client = new HelloSign({
      clientId: helloSignData.client_id,
      debug: true,
    });
    client.open(helloSignData.sign_url, {
      testMode: true,
    });

    client.on("sign", () => {
      alert("The document has been signed!");
    });
    client.on("error", () => {
      console.log(`there was an error`);
    });

    client.on("open", () => {
      console.log("the frame has opened");
    });

    client.on("cancel", () => {
      console.log("hello from cancel");
    });
    return <div></div>;
  }

  if (sign === "!sign") {
    return <h1>Loading</h1>;
  }
}

export default DocumentSignContainer;
