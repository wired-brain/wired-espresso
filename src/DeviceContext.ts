import { DeviceMakeModel } from "./Devices";

export const DeviceContext: DeviceContextInterface = {
  makeAndModel: null,
  version: null,
  year: null
};

interface DeviceContextInterface {
  makeAndModel: DeviceMakeModel | null;
  version: number | null;
  year: number | null;
}