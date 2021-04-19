import React, { useState, useEffect } from "react";
import { generateInvestorEmbeddedDocument } from "../../../Service/Backend";
import HelloSign from "hellosign-embedded";
import { useParams } from "react-router";
import AskSigningQuestions from "./AskSigningQuestions";

function DocumentSignContainer({ user_id, type }) {
  let counter = 0;
  const [sign, setSigning] = useState("loading");
  const [helloSignData, setHelloSignData] = useState(null);
  const [questions, setQuestions] = useState(null);
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
        if (signedURL.status === "ask") {
          setSigning("ask");
          setQuestions(signedURL);
        } else {
          setHelloSignData(signedURL);
          console.log(`here is the raw payload from the render`, signedURL);
          setSigning("sign");
        }
      } catch (error) {
        console.log(error);
      }
    };
    embeddedSigningData();
  }, []);

  if (sign === "sign") {
    console.log(`hello from counter ${counter}`);
    console.log(helloSignData.sign_url);
    console.log(helloSignData.client_id);
    console.log(`hello sign data client id`, helloSignData);
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

  if (sign === "ask") {
    return <AskSigningQuestions questions={questions} doc_id={documentId} />;
  }
  if (sign === "loading") {
    return <h1>Loading</h1>;
  }
}

export default DocumentSignContainer;
