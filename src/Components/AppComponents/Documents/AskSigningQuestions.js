import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";
import { Form, UseForm } from "../../../Form/UseForm";
import TextInput from "../../Controls/TextInput";
import { updateDocument } from "../../../Service/Backend";
function AskSigningQuestions({ questions, doc_id, handleSubmit }) {
  const [open, setOpen] = useState(true);
  const [openDocument, setOpenDocument] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      doc_obj_id: doc_id,
      data: {
        amount: values.amount,
      },
    };
    const data = updateDocument(payload);
    console.log(data);
    if (data.status === `update successful`) {
      history.push(`/investor/documents/sign/${doc_id}`);
    }
    // setOpen(false);
    // history.push(`/hello`);
    console.log(values);
  }
  const initialValues = {
    amount: "",
  };
  //loop over all the input questions
  //label is our internal name

  const { values, handleInputChange } = UseForm(initialValues);
  console.log(values);
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
                      {console.log(questions)}
                      {questions.document.map((question) => {
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
                      })}
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

export default AskSigningQuestions;
