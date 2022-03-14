import languages from "../fixtures/languages";

export const createFormFooterButtons = (langId) => {
  const buttons = [
    {
      id: 1,
      type: "submit",
      label: languages[langId]?.buttonLabel.submit
    },
    {
      id: 2,
      type: "reset",
      label: languages[langId]?.buttonLabel.reset
    },
  ];

  return buttons;
};