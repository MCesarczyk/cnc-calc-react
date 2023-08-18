import { calculateRotationSpeed } from './equation';

const cases = [
  { description: 'calculates result based on D=50 and Vc=200', D: '50', Vc: '200', n: '1273' },
  { description: 'calculates result based on D=0 and Vc=0', D: '0', Vc: '0', n: 'NaN' },
  { description: 'calculates result based on D=50 and Vc=0', D: '50', Vc: '0', n: '0' },
  { description: 'calculates result based on D=0 and Vc=200', D: '0', Vc: '200', n: 'Infinity' },
  { description: 'calculates result based on D=-50 and Vc=-200', D: '-50', Vc: '-200', n: '1273' },
  { description: 'calculates result based on D=-50 and Vc=200', D: '-50', Vc: '200', n: '-1273' },
  { description: 'calculates result based on D=50 and Vc=-200', D: '50', Vc: '-200', n: '-1273' },
];

describe('Rotations speed form', () => {
  for (let i = 0; i < cases.length; i++) {
    const description = cases[i].description;
    const diameter = cases[i].D;
    const cuttingSpeed = cases[i].Vc;
    const rotationSpeed = cases[i].n;

    it(description, () => {
      expect(calculateRotationSpeed(Number(diameter), Number(cuttingSpeed))).toBe(rotationSpeed);
    });
  }
});
