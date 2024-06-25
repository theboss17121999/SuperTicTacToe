import { atom, atomFamily, selector } from "recoil";
import { NineXNine1 } from "../Data/9X9";

export const ThreeXThreeAtomFamily = atomFamily({
  key: 'NineXNineAtomFamily',
  default: id => {
    return NineXNine1.find(x => x.id === id);
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

