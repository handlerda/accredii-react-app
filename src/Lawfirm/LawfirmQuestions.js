const NewClientInputs = [
  {
    name: "first_name",
    label: "First Name",
    text: "Please enter the client's first name",
  },
  {
    name: "last_name",
    label: "Last Name",
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
    name: "company",
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
    name: "template",
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
    name: "address",
    label: "Company Address",
    text: "Please enter the primary company contact's physical address",
  },
  {
    name: "phone",
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
    name: "companies",
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
    name: "templates",
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

  {
    name: "investors",
    label: "Please select a investor",
    text: "Choose from the list below:",
  },
];

export {
  NewClientInputs,
  NewClientDropDown,
  NewCompanyInputs,
  NewDocumentDropDown,
};
