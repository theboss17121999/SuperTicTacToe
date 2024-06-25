import { selector } from "recoil";
import { ActiveCellAtomFamily } from "../Atom/AtomForActiveCell";

const checkWinner = (values, a, b, c) => {
  return values[a] !== 0 && values[a] === values[b] && values[a] === values[c];
};

const createSelectorForRange = (start) =>
  selector({
    key: `EnableActiveCell${start}`,
    get: ({ get }) => {
      const values = [];
      for (let i = start; i <= end; i++) {
        const atomValue = get(ActiveCellAtomFamily(i));
        values.push(atomValue.disable);
      }

      return values;
    },
    set: ({ set, get }, newValue) => {
      
        set(ActiveCellAtomFamily(start), (prev) => ({
            ...prev,
            disable: false, 
        }));
      }
  });

export const EnableActiveCellValuesSelector1 = createSelectorForRange(1);
export const EnableActiveCellValuesSelector2 = createSelectorForRange(2);
export const EnableActiveCellValuesSelector3 = createSelectorForRange(3);
export const EnableActiveCellValuesSelector4 = createSelectorForRange(4);
export const EnableActiveCellValuesSelector5 = createSelectorForRange(5);
export const EnableActiveCellValuesSelector6 = createSelectorForRange(6);
export const EnableActiveCellValuesSelector7 = createSelectorForRange(7);
export const EnableActiveCellValuesSelector8 = createSelectorForRange(8);
export const EnableActiveCellValuesSelector9 = createSelectorForRange(9);
