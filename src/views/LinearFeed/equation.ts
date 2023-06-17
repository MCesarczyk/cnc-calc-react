export const calculateFeedrate = (feedType: string, rotationSpeed: number, feedPerRevolution: number, feedPerTooth: number, toothNumber: number) =>
  feedType === "FPR"
    ? (rotationSpeed * feedPerRevolution).toFixed()
    : (rotationSpeed * feedPerTooth * toothNumber).toFixed();
;