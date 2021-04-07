import React, { useState } from "react";
import HelloSign from "hellosign-embedded";
import { generateInvestorEmbeddedDocument } from "../../Service/Backend";

function GridItem({ id, investor, status, title, document_id, type }) {
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

  if (sign === "!sign")
    return (
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">
                {investor}
              </h3>
              <span class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                {status}
              </span>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">{title}</p>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <a
                href="mailto:janecooper@example.com"
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <span class="ml-3">View</span>
              </a>
            </div>
            <div class="-ml-px w-0 flex-1 flex">
              <a
                onClick={embeddedSigning}
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <span class="ml-3">Sign</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    );

  if ("sign") {
    console.log(helloSignData);
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
    console.log(`the iframe tried to open`);
    return <h1>The doc has been generated</h1>;
  }

  if ("signed") return <h1>You aint signing today</h1>;
}

export default GridItem;
