import tapDiameters from "../../assets/fixtures/tapDiameters";

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