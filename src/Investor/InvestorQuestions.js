const questions = [
  {
    title: "American Citizen",
    helpText:
      "Are you an American Citizen? Check yes if you have a valid U.S passport",
    choices: [
      {
        label: "Yes",
        question_name: "american_citizen",
      },
      {
        label: "No",
        question_name: "american_citizen",
      },
    ],
  },
  {
    title: "Income Requirement",
    helpText:
      "Is your personal yearly income over 200k or is your joint income over 300k",
    choices: [
      {
        label: "Yes",
        question_name: "income_req",
      },
      {
        label: "No",
        question_name: "income_req",
      },
    ],
  },
  {
    title: "Networth Requirement",
    helpText: "Is your accumulated net worth over 1M in total assets?",
    choices: [
      {
        label: "Yes",
        question_name: "networth_req",
      },
      {
        label: "No",
        question_name: "networth_req",
      },
    ],
  },
  {
    title: "Legal Standing",
    helpText: "Are you in good legal standing according to the SEC?",
    choices: [
      {
        label: "Yes",
        question_name: "good_standing_req",
      },
      {
        label: "No",
        question_name: "good_standing_req",
      },
    ],
  },
  {
    title: "Family Office",
    helpText: "Do you work with or control a family office",
    choices: [
      {
        label: "Yes",
        question_name: "family_client_req",
      },
      {
        label: "No",
        question_name: "family_client_req",
      },
    ],
  },
];

export default questions;
