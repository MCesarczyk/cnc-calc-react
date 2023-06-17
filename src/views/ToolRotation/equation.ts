export const calculateRotationSpeed = (diameter: number, cuttingSpeed: number): string => (cuttingSpeed * 1000 / Math.PI / diameter).toFixed(0);
