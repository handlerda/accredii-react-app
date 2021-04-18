const InvestorMCQuestions = [
  {
    title: "American Citizen",
    helpText:
      "Are you an American Citizen? Check yes if you have a valid U.S passport",
    question_name: "is_us_person",
    choices: [
      {
        label: "Yes",
        value: true,
        question_name: "is_us_person",
      },
      {
        label: "No",
        value: false,
        question_name: "is_us_person",
      },
    ],
  },
  {
    title: "Income Requirement",
    helpText:
      "Is your personal yearly income over 200k or is your joint income over 300k",
    question_name: "income_req",
    choices: [
      {
        label: "Yes",
        value: true,
        question_name: "income_req",
      },
      {
        label: "No",
        value: false,
        question_name: "income_req",
      },
    ],
  },
  {
    title: "Networth Requirement",
    helpText: "Is your accumulated net worth over 1M in total assets?",
    question_name: "networth_req",
    choices: [
      {
        label: "Yes",
        value: true,
        question_name: "networth_req",
      },
      {
        label: "No",
        value: false,
        question_name: "networth_req",
      },
    ],
  },
  {
    title: "Legal Standing",
    helpText: "Are you in good legal standing according to the SEC?",
    question_name: "good_standing_req",
    choices: [
      {
        label: "Yes",
        value: true,
        question_name: "good_standing_req",
      },
      {
        label: "No",
        value: false,
        question_name: "good_standing_req",
      },
    ],
  },
  {
    title: "Family Office",
    helpText: "Do you work with or control a family office",
    question_name: "family_client_req",
    choices: [
      {
        label: "Yes",
        value: true,
        question_name: "family_client_req",
      },
      {
        label: "No",
        value: false,
        question_name: "family_client_req",
      },
    ],
  },
];

const InvestorInputQuestions = [
  {
    name: "first_name",
    label: "First Name",
    type: "text",
  },
  {
    name: "middle_name",
    label: "Middle Name",
    type: "text",
  },
  {
    name: "last_name",
    label: "Last Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "number",
  },
  {
    name: "address",
    label: "Address",
    text: "text",
  },
];

export { InvestorMCQuestions, InvestorInputQuestions };
