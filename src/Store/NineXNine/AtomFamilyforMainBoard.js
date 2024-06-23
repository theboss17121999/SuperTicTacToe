import { atomFamily } from "recoil";
import { ThreeXThree1 } from "../Data/3X3";

export const NineXNineAtomFamily = atomFamily({
  key: 'NineXNineAtomFamily1',
  default: (id) => {
    return ThreeXThree1.find(x => x.id === id);
  },
});
