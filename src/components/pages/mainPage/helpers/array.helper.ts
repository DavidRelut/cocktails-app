import { ITab } from "./tabsConfig.helper";

export const findByIndex = (array: ITab[], index: number) => {
  return array.find((tab) => tab.index === index);
};
