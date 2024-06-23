import { selector } from "recoil";
import { NineXNineAtomFamily } from "./AtomFamilyforMainBoard";

const createSelectorForRange = (start) =>
  selector({
    key: `NineXNineValuesSelector${start}`,
    get: ({ get }) => {
      const values = [];
      for (let i = 1; i <= 9; i++) {
        const atomValue = get(NineXNineAtomFamily(i));
        if (atomValue) {
          values.push(atomValue.val);
        } 
      }
      return values;
    },
    set: ({ set, get }, newValue) => {
      set(NineXNineAtomFamily(start), (prev) => ({
        ...prev,
        val: 1,
        disable: true,
      }));
      const values = [];
      for (let i = 1; i <= 9; i++) {
        const atomValue = get(NineXNineAtomFamily(i));
        values.push(atomValue.val);
      }
      values[start-1]=1;
      console.log("3X3 grid", values);

    },
  });

export const NineXNineValuesSelectorWinner1 = createSelectorForRange(1);
export const NineXNineValuesSelectorWinner2 = createSelectorForRange(2);
export const NineXNineValuesSelectorWinner3 = createSelectorForRange(3);
export const NineXNineValuesSelectorWinner4 = createSelectorForRange(4);
export const NineXNineValuesSelectorWinner5 = createSelectorForRange(5);
export const NineXNineValuesSelectorWinner6 = createSelectorForRange(6);
export const NineXNineValuesSelectorWinner7 = createSelectorForRange(7);
export const NineXNineValuesSelectorWinner8 = createSelectorForRange(8);
export const NineXNineValuesSelectorWinner9 = createSelectorForRange(9);