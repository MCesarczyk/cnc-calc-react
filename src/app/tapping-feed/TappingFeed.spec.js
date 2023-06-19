import { calculateTappingFeed } from './equation';

const cases = [
  { description: 'calculates result based on D=12 and n=133', D: 12, n: 133, f: 232.75 },
  { description: 'calculates result based on D=0 and n=133', D: 0, n: 0, f: undefined },
  { description: "calculates result based on D='' and n=133", D: undefined, n: 133, f: undefined },
  { description: 'calculates result based on D=12 and n=0', D: 12, n: 0, f: 0 },
  { description: 'calculates result based on D=50 and n=133', D: 50, n: 133, f: undefined },
  { description: 'calculates result based on D=-12 and n=133', D: -12, n: 133, f: undefined },
  { description: 'calculates result based on D=12 and n=-133', D: 12, n: -133, f: -232.75 },
  { description: 'calculates result based on D=-12 and n=133', D: -12, n: 133, f: undefined },
];

describe('Tapping Feed form', () => {
  for (let i = 0; i < cases.length; i++) {
    const description = cases[i].description;
    const diameter = cases[i].D;
    const rotationSpeed = cases[i].n;
    const feedrate = cases[i].f;

    it(description, () => {
      expect(calculateTappingFeed(rotationSpeed, diameter)).toBe(feedrate);
    });
  }
});
