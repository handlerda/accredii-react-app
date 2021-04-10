const NewClientInputs = [
  {
    name: "first_name",
    label: "First Name",
    text: "Please enter the client's first name",
  },
  {
    name: "last_name",
    label: "First Name",
    text: "Please enter the client's last name",
  },
  {
    name: "email",
    label: "Email",
    text: "Please enter the client's email",
  },
];

const NewClientDropDown = [
  {
    name: "client_company_select",
    label: "Please select the company",
    options: [
      {
        name: "stripe_llc",
        label: "Stripe LLC",
      },
      {
        name: "inspirato_llc",
        label: "Inspirato LLC",
      },
      {
        name: "tesla_inc",
        label: "Tesla Inc.",
      },
    ],
  },
];

const NewClientDocumentDropDown = [
  {
    name: "client_document_select",
    label: "Please select the accreditation document",
    options: [
      {
        name: "doc_1",
        label: "Document 1",
      },
      {
        name: "doc_2",
        label: "Document 2",
      },
      {
        name: "doc_3",
        label: "Document 3",
      },
    ],
  },
];

export { NewClientInputs, NewClientDropDown, NewClientDocumentDropDown };
