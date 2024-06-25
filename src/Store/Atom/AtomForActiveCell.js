import { atom, atomFamily, selector } from "recoil";
import { ActiveGrid } from "../Data/ActiveCell";

export const ActiveCellAtomFamily = atomFamily({
  key: 'ActiveAtomFamily',
  default: id => {
    return ActiveGrid.find(x => x.id === id);
  },
});
