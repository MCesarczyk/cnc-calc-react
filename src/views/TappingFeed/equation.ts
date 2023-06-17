import tapDiameters from "../../assets/fixtures/tapDiameters";

export const tapDiametersArray = tapDiameters.map(record => ({
  key: record.id,
  value: record.diameter.toString(),
}));

export const setPitchValue = (chosenDiameter:number) => (
  tapDiameters[
    tapDiameters.findIndex(({ diameter }) => diameter.toString() === chosenDiameter.toString())
  ].pitch
);

export const calculateTappingFeed = (rotationSpeed:number, diameter:number) =>
  diameter > 0 && Object.keys(tapDiametersArray).includes(diameter.toString())
    ? (rotationSpeed * +setPitchValue(diameter)).toFixed()
    : "N/A";