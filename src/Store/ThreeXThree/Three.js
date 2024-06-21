import { atom, atomFamily } from "recoil";
import { ThreeXThree1 } from "../Data/3X3";


export const ThreeXThreeAtomFamily = atomFamily({
  key: 'ThreeXThreeAtomFamily',
  default: id => {
    return ThreeXThree1.find(x => x.id === id)
  },
});

export const TrunAtom = atom({
    key: 'turn',
    default: 1
})