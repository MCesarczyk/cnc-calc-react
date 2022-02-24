import { calculateCuttingSpeed } from "../../assets/utils/equations";

describe("Surface Speed form", () => {
  it("calculates product of 50 and 1200", () => {
    expect(calculateCuttingSpeed(50, 1200)).toBe("188.50");
  });

  it("calculates product of 0 and 0", () => {
    expect(calculateCuttingSpeed(0, 0)).toBe("0.00");
  });

  it("calculates product of 50 and 0", () => {
    expect(calculateCuttingSpeed(50, 0)).toBe("0.00");
  });

  it("calculates product of 0 and 1200", () => {
    expect(calculateCuttingSpeed(0, 1200)).toBe("0.00");
  });
});