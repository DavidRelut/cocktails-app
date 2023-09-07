import { ITab } from "../interfaces/interfaces";

export function findByIndex(array: ITab[], index: number) {
  return array.find((tab) => tab.index === index);
}
