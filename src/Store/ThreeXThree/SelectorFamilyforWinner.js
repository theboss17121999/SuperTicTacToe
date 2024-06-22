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
    key: `ThreeXthreeWinnerSelector${start}_${end}`, // Corrected key naming
    get: ({ get }) => {
      const values = [];
      for (let i = start; i <= end; i++) {
        const atomValue = get(ThreeXThreeAtomFamily(i));
        values.push(atomValue.val);
      }

      for (const [a, b, c] of winningCombinations) {
        if (checkWinner(values, a, b, c)) {
          console.log("Winner detected:", values[a]);
          return values[a];
        }
      }

      return 0; // Default return value if no winner is detected
    }
  });

export const ThreeXthreeWinnerSelector11_19 = createSelectorForRange(11, 19);
export const ThreeXthreeWinnerSelector21_29 = createSelectorForRange(21, 29);
export const ThreeXthreeWinnerSelector31_39 = createSelectorForRange(31, 39);
export const ThreeXthreeWinnerSelector41_49 = createSelectorForRange(41, 49);
export const ThreeXthreeWinnerSelector51_59 = createSelectorForRange(51, 59);
export const ThreeXthreeWinnerSelector61_69 = createSelectorForRange(61, 69);
export const ThreeXthreeWinnerSelector71_79 = createSelectorForRange(71, 79);
export const ThreeXthreeWinnerSelector81_89 = createSelectorForRange(81, 89);
export const ThreeXthreeWinnerSelector91_99 = createSelectorForRange(91, 99);
