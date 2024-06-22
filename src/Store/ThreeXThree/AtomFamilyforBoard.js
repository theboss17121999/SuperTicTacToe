import { atom, atomFamily, selector } from "recoil";
import { ThreeXThree1 } from "../Data/3X3";

export const ThreeXThreeAtomFamily = atomFamily({
  key: 'ThreeXThreeAtomFamily',
  default: id => {
    return ThreeXThree1.find(x => x.id === id);
  },
});

export const TurnAtom = atom({
  key: 'turn',
  default: 1
});

export const Winner = atom({
  key: 'Winner',
  default: 0
})

