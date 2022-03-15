export const calculateFeedrate = (feedType, rotationSpeed, feedPerRevolution, feedPerTooth, toothNumber) => 
  feedType === "FPR"
    ? (rotationSpeed * feedPerRevolution).toFixed()
    : (rotationSpeed * feedPerTooth * toothNumber).toFixed();
;