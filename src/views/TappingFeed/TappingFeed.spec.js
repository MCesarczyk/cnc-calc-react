import { calculateTappingFeed, setPitchValue, tapPitchArray } from "../../assets/utils/equations";

const cases = [
  { description: "calculates result based on D=12 and n=133", D: "12", n: "133", f: "233" },
  { description: "calculates result based on D=0 and n=133", D: "0", n: "0", f: "" },
  { description: "calculates result based on D='' and n=133", D: "", n: "133", f: "" },
  { description: "calculates result based on D=12 and n=0", D: "12", n: "0", f: "0" },
  { description: "calculates result based on D=50 and n=133", D: "50", n: "133", f: "" },
  { description: "calculates result based on D=-12 and n=133", D: "-12", n: "133", f: "" },
  { description: "calculates result based on D=12 and n=-133", D: "12", n: "-133", f: "-233" },
  { description: "calculates result based on D=-12 and n=133", D: "-12", n: "133", f: "233" },
];

describe("Tapping Feed form", () => {
  for (let i = 0; i < cases.length; i++) {
    const description = cases[i].description;
    const diameter = cases[i].D;
    const rotationSpeed = cases[i].n;
    const feedrate = cases[i].f;

    it(description, () => {
      diameter > 0
        && Object.keys(tapPitchArray).includes(diameter)
        && expect(calculateTappingFeed(setPitchValue(diameter), rotationSpeed)).toBe(feedrate);
    });
  }
});