import { getWaterLevel, setWaterLevel } from "../Reservoir";

describe("Reservoir", () => {
  it("should set water level to value", () => {
    setWaterLevel(60);
    expect(getWaterLevel()).toBe(60);
  });
});
