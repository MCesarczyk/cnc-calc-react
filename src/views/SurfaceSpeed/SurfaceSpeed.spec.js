import { calculateCuttingSpeed } from "../../assets/utils/equations";

const cases = [
  { description: "calculates result based on D=50 and n=1200", D: "50", n: "1200", Vc: "188.50" },
  { description: "calculates result based on D=0 and n=0", D: "0", n: "0", Vc: "0.00" },
  { description: "calculates result based on D=50 and n=0", D: "50", n: "0", Vc: "0.00" },
  { description: "calculates result based on D=0 and n=1200", D: "0", n: "1200", Vc: "0.00" },
  { description: "calculates result based on D=-50 and n=-1200", D: "-50", n: "-1200", Vc: "188.50" },
  { description: "calculates result based on D=-50 and n=1200", D: "-50", n: "1200", Vc: "-188.50" },
  { description: "calculates result based on D=50 and n=-1200", D: "50", n: "-1200", Vc: "-188.50" }
];

describe("Surface Speed form", () => {
  for (let i = 0; i < cases.length; i++) {
    const description = cases[i].description;
    const diameter = cases[i].D;
    const rotationSpeed = cases[i].n;
    const cuttingSpeed = cases[i].Vc;

    it(description, () => {
      expect(calculateCuttingSpeed(diameter, rotationSpeed)).toBe(cuttingSpeed);
    });
  }
});