import React, { useState, useEffect, Fragment, useRef } from "react";
import HelloSign from "hellosign-embedded";
import { useHistory, useParams } from "react-router";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { Form, UseForm } from "../../../Components/Form/UseForm";
import TextInput from "../../Controls/TextInput";
import Popup from "../../Popup";
import { generateInvestorEmbeddedDocument } from "../../../store/investor";

import { useDispatch } from "react-redux";
import { generateCompanyEmbeddedDocument } from "../../../store/company";
import { updateDocument } from "../../../store/document";
import { useAuth0 } from "@auth0/auth0-react";

function DocumentSignContainer({ user_id, type }) {
  const [sign, setSigning] = useState("loading");
  const [helloSignData, setHelloSignData] = useState(null);
  const [questions, setQuestions] = useState(null);
  const { documentId } = useParams();
  const [open, setOpen] = useState(true);
  const history = useHistory();
  const hsClient = useRef();
  const hsNode = useRef(null);
  const dispatch = useDispatch();
  const { user, getAccessTokenWithPopup } = useAuth0();
  useEffect(() => {
    const embeddedSigningData = async () => {
      try {
        const accessToken = await getAccessTokenWithPopup({
          audience: "https://accredii.com/authorization",
          scope: "attorney:all",
        });
        // if investor
        const signedURL =
          type === "investor"
            ? await dispatch(
                generateInvestorEmbeddedDocument(documentId, accessToken)
              )
            : await dispatch(
                generateCompanyEmbeddedDocument(documentId, accessToken)
              );
        console.log(signedURL);
        if (signedURL.unanswered_document_questions) {
          console.log(signedURL);
          setSigning("ask");
          setQuestions(signedURL);
        } else if (signedURL.status === "investor") {
          setSigning("moreInfo");
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
  const initialValues = {
    amount: "",
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const accessToken = await getAccessTokenWithPopup({
      audience: "https://accredii.com/authorization",
      scope: "attorney:all",
    });
    const payload = {
      data: {
        doc_obj_id: documentId,
        amount: values.amount,
      },
    };
    console.log(`the submit was called`);
    const data = await dispatch(updateDocument(payload, accessToken));
    if (data.status === `update successful`) {
      const signedURL =
        type === "investor"
          ? await dispatch(
              generateInvestorEmbeddedDocument(documentId, accessToken)
            )
          : await dispatch(
              generateCompanyEmbeddedDocument(documentId, accessToken)
            );
      console.log(`signedURL from the sign`, signedURL);
      setHelloSignData(signedURL);
      setSigning("sign");
    } else {
      setSigning("moreInfo");
    }
    // setOpen(false);
    // history.push(`/hello`);
    console.log(values);
  }
  const { values, handleInputChange } = UseForm(initialValues);

  if (sign === "sign") {
    hsClient.current = new HelloSign({
      clientId: helloSignData.client_id,
      debug: true,
      container: hsNode.current,
    });
    hsClient.current.open(helloSignData.sign_url, {
      testMode: true,
      container: hsNode.current,
    });

    hsClient.current.on("sign", () => {
      history.push(`/${type}/documents`);
    });
    hsClient.current.on("error", () => {
      console.log(`there was an error`);
    });

    hsClient.current.on("open", () => {
      console.log("the frame has opened");
    });

    hsClient.current.on("cancel", () => {
      console.log("hello from cancel");
      history.push(`/${type}/documents`);
    });
    return <section ref={hsNode}> Hello from container </section>;
  }

  if (sign === "ask") {
    return (
      questions && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed z- inset-0 overflow-y-auto"
            open={open}
            onClose={setOpen}
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-sm sm:w-full">
                  <div>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <ExclamationIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        We just have a few more questions
                      </Dialog.Title>
                      <Form onSubmit={handleSubmit}>
                        {console.log(typeof questions)}
                        {console.log(questions)}
                        {questions.unanswered_document_questions.map(
                          (question) => {
                            console.log(question);
                            return (
                              <TextInput
                                label={question.accredii_version}
                                id={question.label}
                                name={question.label}
                                onChange={handleInputChange}
                                value={initialValues["amount"]}
                              ></TextInput>
                            );
                          }
                        )}
                        <button
                          type="submit"
                          className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm mt-8"
                        >
                          Sign
                        </button>
                      </Form>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6"></div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      )
    );
  }
  if (sign === "loading") {
    return <h1>Loading</h1>;
  }
  if (sign === "moreInfo") {
    return (
      <Popup
        title="You need to fill out some more questions"
        text="You have general investor questions to fill out"
        buttonText="Fill out info"
        handleClick={() => history.push("/investor/info")}
      ></Popup>
    );
  }
}

export default DocumentSignContainer;
