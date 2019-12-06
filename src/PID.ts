import { DeviceContext } from "./DeviceContext";
import { DeviceMakeModel } from "./Devices";

export const TemperatureContext = {
  requestedTemp: 195
}

export function applyRequestedTemperature(temp: number) {
  const { makeAndModel, version } = DeviceContext;

  switch (makeAndModel) {
    case DeviceMakeModel.LUCCA_M58:
      if (version === 2) {
        TemperatureContext.requestedTemp = temp - 1;
        break;
      }
    default:
      TemperatureContext.requestedTemp = temp;
      break;
  }
}
