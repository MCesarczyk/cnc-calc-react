export const calculateCuttingSpeed = (diameter: number, rotationSpeed: number) =>
  ((Math.PI * diameter * rotationSpeed) / 1000).toFixed(2);
