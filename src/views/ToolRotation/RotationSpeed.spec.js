import { calculateRotationSpeed } from "../../assets/utils/equations";

describe("Rotations speed form", () => {
  it("calculates result based on D=50 and Vc=200", () => {
    expect(calculateRotationSpeed(50, 200)).toBe("1273");
  });
  
  //cases below have to be disabled by form validation
  it("calculates result based on D=0 and Vc=0", () => {
    expect(calculateRotationSpeed(0, 0)).toBe("NaN");
  });
  
  it("calculates result based on D=50 and Vc=0", () => {
    expect(calculateRotationSpeed(50, 0)).toBe("0");
  });
  
  it("calculates result based on D=0 and Vc=200", () => {
    expect(calculateRotationSpeed(0, 200)).toBe("Infinity");
  });
  
  it("calculates result based on D=-50 and Vc=-200", () => {
    expect(calculateRotationSpeed(-50, -200)).toBe("1273");
  });
  
  it("calculates result based on D=-50 and Vc=200", () => {
    expect(calculateRotationSpeed(-50, 200)).toBe("-1273");
  });
  
  it("calculates result based on D=50 and Vc=-200", () => {
    expect(calculateRotationSpeed(50, -200)).toBe("-1273");
  });
});