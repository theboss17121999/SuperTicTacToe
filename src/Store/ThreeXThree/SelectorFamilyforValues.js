import { selector } from "recoil";
import { ThreeXThreeAtomFamily } from "./AtomFamilyforBoard";

const checkWinner = (values, a, b, c) => {
  return values[a] !== 0 && values[a] === values[b] && values[a] === values[c];
};

const winningCombinations = [
  [0, 1, 2], // Row 1
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3
  [0, 3, 6], // Column 1
  [1, 4, 7], // Column 2
  [2, 5, 8], // Column 3
  [0, 4, 8], // Diagonal 1
  [2, 4, 6], // Diagonal 2
];

const createSelectorForRange = (start, end) =>
  selector({
    key: `ThreeXThreeValuesSelector${start}_${end}`,
    get: ({ get }) => {
      const values = [];
      const trueorfalse = [];
      for (let i = start; i <= end; i++) {
        const atomValue = get(ThreeXThreeAtomFamily(i));
        values.push(atomValue.val);
        trueorfalse.push(atomValue.disable);
      }

      return values;
    },
    set: ({ set, get }, newValue) => {
        const values = [];
        for (let i = start; i <= end; i++) {
          const atomValue = get(ThreeXThreeAtomFamily(i));
          values.push(atomValue.val);
        }
      
        let winnerDetected = false;
        for (const [a, b, c] of winningCombinations) {
          if (checkWinner(values, a, b, c)) {
            winnerDetected = true;
            break;
          }
        }
      
        if (winnerDetected) {
          for (let i = start; i <= end; i++) {
            set(ThreeXThreeAtomFamily(i), (prev) => ({
              ...prev,
              disable: true, // Update disable property
            }));
          }
        }
      }
  });

export const ThreeXThreeValuesSelector11_19 = createSelectorForRange(11, 19);
export const ThreeXThreeValuesSelector21_29 = createSelectorForRange(21, 29);
export const ThreeXThreeValuesSelector31_39 = createSelectorForRange(31, 39);
export const ThreeXThreeValuesSelector41_49 = createSelectorForRange(41, 49);
export const ThreeXThreeValuesSelector51_59 = createSelectorForRange(51, 59);
export const ThreeXThreeValuesSelector61_69 = createSelectorForRange(61, 69);
export const ThreeXThreeValuesSelector71_79 = createSelectorForRange(71, 79);
export const ThreeXThreeValuesSelector81_89 = createSelectorForRange(81, 89);
export const ThreeXThreeValuesSelector91_99 = createSelectorForRange(91, 99);
