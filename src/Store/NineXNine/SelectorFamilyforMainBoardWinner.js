import { selector } from "recoil";
import { NineXNineAtomFamily } from "./AtomFamilyforMainBoard";

const createSelectorForRange = (start , winner) =>
  selector({
    key: `NineXNineValuesSelector${start}_${winner}`,
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
        val: (winner===1)?1:-1,
        disable: true,
      }));
      const values = [];
      for (let i = 1; i <= 9; i++) {
        const atomValue = get(NineXNineAtomFamily(i));
        values.push(atomValue.val);
      }
      values[start-1]=(winner===1)?1:-1;
      console.log("3X3 grid", values);

    },
  });

export const NineXNineValuesSelectorWinner11 = createSelectorForRange(1,1);
export const NineXNineValuesSelectorWinner21 = createSelectorForRange(2,1);
export const NineXNineValuesSelectorWinner31 = createSelectorForRange(3,1);
export const NineXNineValuesSelectorWinner41 = createSelectorForRange(4,1);
export const NineXNineValuesSelectorWinner51 = createSelectorForRange(5,1);
export const NineXNineValuesSelectorWinner61 = createSelectorForRange(6,1);
export const NineXNineValuesSelectorWinner71 = createSelectorForRange(7,1);
export const NineXNineValuesSelectorWinner81 = createSelectorForRange(8,1);
export const NineXNineValuesSelectorWinner91 = createSelectorForRange(9,1);

export const NineXNineValuesSelectorWinner12 = createSelectorForRange(1,2);
export const NineXNineValuesSelectorWinner22 = createSelectorForRange(2,2);
export const NineXNineValuesSelectorWinner32 = createSelectorForRange(3,2);
export const NineXNineValuesSelectorWinner42 = createSelectorForRange(4,2);
export const NineXNineValuesSelectorWinner52 = createSelectorForRange(5,2);
export const NineXNineValuesSelectorWinner62 = createSelectorForRange(6,2);
export const NineXNineValuesSelectorWinner72 = createSelectorForRange(7,2);
export const NineXNineValuesSelectorWinner82 = createSelectorForRange(8,2);
export const NineXNineValuesSelectorWinner92 = createSelectorForRange(9,2);