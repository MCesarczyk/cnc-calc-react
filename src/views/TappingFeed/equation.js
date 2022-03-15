import tapDiameters from "../../assets/fixtures/tapDiameters";

export const tapDiametersArray = tapDiameters.map(record => ({
  key: record.id,
  value: record.diameter.toString(),
}));

export const setPitchValue = (chosenDiameter) => (
  tapDiameters[
    tapDiameters.findIndex(({ diameter }) => diameter.toString() === chosenDiameter.toString())
  ].pitch
);

export const calculateTappingFeed = (rotationSpeed, diameter) =>
  diameter > 0 && Object.keys(tapDiametersArray).includes(diameter)
    ? (rotationSpeed * setPitchValue(diameter).toString()).toFixed()
    : "N/A";