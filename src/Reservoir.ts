import { WATER_ABOVE_THRESHOLD_ERROR } from "./constants";

const MAX_WATER_THRESHOLD = 100;

let waterLevel: number = 0;

export function getWaterLevel() {
  return waterLevel;
}

export function setWaterLevel(value: number) {
  waterLevel = value;
}

export function validate(): boolean {
  if (waterLevel > MAX_WATER_THRESHOLD) {
    throw new Error(`Code: ${WATER_ABOVE_THRESHOLD_ERROR}`);
  }
  return waterLevel >= 0;
}
