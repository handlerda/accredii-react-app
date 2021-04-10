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
    text: "Choose from the list below:",
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
  {
    name: "client_document_select",
    label: "Please select the accreditation document",
    text: "Choose from the list below:",
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

const NewCompanyInputs = [
  {
    name: "name",
    label: "Name",
    text: "Please enter the name of the company",
  },
  {
    name: "primary_contact_name",
    label: "Primary Contact Name",
    text: "Please enter the primary company contact's first name",
  },
  {
    name: "address",
    label: "Company Address",
    text: "Please enter the primary company contact's physical address",
  },
  {
    name: "phone_number",
    label: "Phone Number",
    text: "Please enter the primary company contact's phone number",
  },
  {
    name: "email",
    label: "Email",
    text: "Please enter the primary company contact's email",
  },
];

const NewDocumentDropDown = [
  {
    name: "document_investor_select",
    label: "Please select the investor",
    text: "Choose from the list below:",
    options: [
      {
        name: "investor_1",
        label: "Investor 1",
      },
      {
        name: "investor_2",
        label: "Investor 2",
      },
      {
        name: "investor_3",
        label: "Investor 3",
      },
    ],
  },
  {
    name: "document_company_select",
    label: "Please select the company",
    text: "Choose from the list below:",
    options: [
      {
        name: "company_1",
        label: "Company 1",
      },
      {
        name: "company_2",
        label: "Company 2",
      },
      {
        name: "company_3",
        label: "Company 3",
      },
    ],
  },
  {
    name: "document_template_select",
    label: "Please select the accredidation form",
    text: "Choose from the list below:",
    options: [
      {
        name: "template_1",
        label: "Template 1",
      },
      {
        name: "template_2",
        label: "Template 2",
      },
      {
        name: "template_3",
        label: "Template 3",
      },
    ],
  },
];

export {
  NewClientInputs,
  NewClientDropDown,
  NewCompanyInputs,
  NewDocumentDropDown,
};
