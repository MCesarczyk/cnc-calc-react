import { calculateCuttingSpeed } from "../../assets/utils/equations";

describe("Surface Speed form", () => {
  it("calculates result based on D=50 and n=1200", () => {
    expect(calculateCuttingSpeed(50, 1200)).toBe("188.50");
  });

  //cases below have to be disabled by form validation
  it("calculates result based on D=0 and n=0", () => {
    expect(calculateCuttingSpeed(0, 0)).toBe("0.00");
  });

  it("calculates result based on D=50 and n=0", () => {
    expect(calculateCuttingSpeed(50, 0)).toBe("0.00");
  });

  it("calculates result based on D=0 and n=1200", () => {
    expect(calculateCuttingSpeed(0, 1200)).toBe("0.00");
  });

  it("calculates result based on D=-50 and n=-1200", () => {
    expect(calculateCuttingSpeed(-50, -1200)).toBe("188.50");
  });

  it("calculates result based on D=-50 and n=1200", () => {
    expect(calculateCuttingSpeed(-50, 1200)).toBe("-188.50");
  });

  it("calculates result based on D=50 and n=-1200", () => {
    expect(calculateCuttingSpeed(50, -1200)).toBe("-188.50");
  });

});