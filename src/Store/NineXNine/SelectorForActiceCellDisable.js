import { selector } from "recoil";
import { ActiveCellAtomFamily } from "../Atom/AtomForActiveCell";

const createSelectorForRange = (start) =>
  selector({
    key: `DisableActiveCell${start}`,
    get: ({ get }) => {
      const values = [];
      for (let i = start; i <= end; i++) {
        const atomValue = get(ActiveCellAtomFamily(i));
        values.push(atomValue.disable);
      }

      return values;
    },
    set: ({ set, get }, newValue) => {
        console.log("I am trying to diable");
      
        set(ActiveCellAtomFamily(start), (prev) => ({
            ...prev,
            disable: true, 
        }));
      }
  });

export const DisableActiveCellValuesSelector1 = createSelectorForRange(1);
export const DisableActiveCellValuesSelector2 = createSelectorForRange(2);
export const DisableActiveCellValuesSelector3 = createSelectorForRange(3);
export const DisableActiveCellValuesSelector4 = createSelectorForRange(4);
export const DisableActiveCellValuesSelector5 = createSelectorForRange(5);
export const DisableActiveCellValuesSelector6 = createSelectorForRange(6);
export const DisableActiveCellValuesSelector7 = createSelectorForRange(7);
export const DisableActiveCellValuesSelector8 = createSelectorForRange(8);
export const DisableActiveCellValuesSelector9 = createSelectorForRange(9);
