export const calculateFeedrate = (feedType: number, rotationSpeed: number, feedPerRevolution: number, feedPerTooth: number, toothNumber: number) =>
  feedType === 0
    ? (rotationSpeed * feedPerRevolution).toFixed()
    : (rotationSpeed * feedPerTooth * toothNumber).toFixed();
;