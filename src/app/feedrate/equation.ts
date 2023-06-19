import { FeedType } from "types";

export const calculateFeedrate = (
  feedType: FeedType,
  rotationSpeed: number,
  feedPerRevolution: number,
  feedPerTooth: number,
  toothNumber: number,
): number =>
  feedType === "FPR"
    ? (rotationSpeed * feedPerRevolution)
    : (rotationSpeed * feedPerTooth * toothNumber);
