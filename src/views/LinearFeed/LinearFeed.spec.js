import { calculateFeedrate } from "./equation";

const cases = [
  { description: "calculates feed per revolution based on n=1440 and fr=1.25", type: "FPR", n: "1440", fr: "1.25", f: "1800" },
  { description: "calculates feed per revolution based on n=0 and fr=1.25", type: "FPR", n: "0", fr: "1.25", f: "0" },
  { description: "calculates feed per revolution based on n=1440 and fr=0", type: "FPR", n: "1440", fr: "0", f: "0" },
  { description: "calculates feed per revolution based on n=-1440 and fr=1.25", type: "FPR", n: "-1440", fr: "1.25", f: "-1800" },
  { description: "calculates feed per revolution based on n=1440 and fr=-1.25", type: "FPR", n: "1440", fr: "-1.25", f: "-1800" },
  { description: "calculates feed per revolution based on n=-1440 and fr=-1.25", type: "FPR", n: "-1440", fr: "-1.25", f: "1800" },
  { description: "calculates feed per tooth based on n=1440, fz=0.15 and t=5", type: "FPT", n: "1440", fz: "0.15", t: "5", f: "1080" },
  { description: "calculates feed per tooth based on n=0, fz=0.15, t=5", type: "FPT", n: "0", fz: "0.15", t: "5", f: "0" },
  { description: "calculates feed per tooth based on n=1440, fz=0, t=5", type: "FPT", n: "1440", fz: "0", t: "5", f: "0" },
  { description: "calculates feed per tooth based on n=1440, fz=0.15, t=0", type: "FPT", n: "1440", fz: "0.15", t: "0", f: "0" },
  { description: "calculates feed per tooth based on n=-1440, fz=0.15, t=5", type: "FPT", n: "-1440", fz: "0.15", t: "5", f: "-1080" },
  { description: "calculates feed per tooth based on n=1440, fz=-0.15, t=5", type: "FPT", n: "1440", fz: "-0.15", t: "5", f: "-1080" },
  { description: "calculates feed per tooth based on n=1440, fz=0.15, t=-5", type: "FPT", n: "1440", fz: "0.15", t: "-5", f: "-1080" },
  { description: "calculates feed per tooth based on n=-1440, fz=-0.15, t=-5", type: "FPT", n: "-1440", fz: "-0.15", t: "-5", f: "-1080" },
];

describe("Linear Feed form", () => {
  for (let i = 0; i < cases.length; i++) {
    const description = cases[i].description;
    const rotationSpeed = cases[i].n;
    const feedType = cases[i].type;
    const feedPerRevolution = cases[i].fr;
    const feedPerTooth = cases[i].fz;
    const toothNumber = cases[i].t;
    const feedrate = cases[i].f;

    it(description, () => {
      expect(calculateFeedrate(feedType, rotationSpeed, feedPerRevolution, feedPerTooth, toothNumber)).toBe(feedrate);
    });
  }
});