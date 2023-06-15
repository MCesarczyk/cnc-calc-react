import { Language } from "types";
import languages from "../../assets/fixtures/languages";

export const createFeedOptions = (langId: Language) => {
  const feedOptions = [
    {
      id: "FPR",
      name: languages[langId]?.feedPerRev.name,
      sub: languages[langId]?.feedPerRev.sub,
      unit: languages[langId]?.feedPerRev.unit,
      placeholder: languages[langId]?.feedPerRev.placeholder,
      disabled: false
    },
    {
      id: "FPT",
      name: languages[langId]?.feedPerTooth.name,
      sub: languages[langId]?.feedPerTooth.sub,
      unit: languages[langId]?.feedPerTooth.unit,
      placeholder: languages[langId]?.feedPerTooth.placeholder,
      disabled: true
    }
  ];

  return feedOptions;
};