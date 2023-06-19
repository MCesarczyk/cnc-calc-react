import tapDiameters from 'common/tapDiameters';

export const tapDiametersArray = tapDiameters.map((record) => ({
  key: record.id,
  value: record.diameter.toString(),
}));

export const setPitchValue = (chosenDiameter: number): number =>
  Number(tapDiameters[tapDiameters.findIndex(({ diameter }) => diameter === chosenDiameter)].pitch);

export const calculateTappingFeed = (rotationSpeed: number, diameter: number): number | undefined =>
  diameter > 0 && Object.keys(tapDiametersArray).includes(diameter.toString())
    ? (rotationSpeed * setPitchValue(diameter))
    : undefined;
