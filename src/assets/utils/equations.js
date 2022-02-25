import tapDiameters from "../../assets/fixtures/tapDiameters";

export const calculateCuttingSpeed = (diameter, rotationSpeed) => (Math.PI * diameter * rotationSpeed / 1000).toFixed(2);
export const calculateRotationSpeed = (diameter, cuttingSpeed) => (cuttingSpeed * 1000 / Math.PI / diameter).toFixed(0);
export const calculateTappingFeed = (rotationSpeed, pitch) => (rotationSpeed * pitch).toFixed();

export const tapPitchArray = tapDiameters.map(record => ({
  key: record.id,
  value: record.diameter
}));

export const setPitchValue = (value) => (
  tapDiameters[
    tapDiameters.findIndex(({ diameter }) => diameter.toString() === value)
  ].pitch
);