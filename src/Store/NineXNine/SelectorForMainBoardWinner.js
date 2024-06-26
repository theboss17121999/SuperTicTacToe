import { selector } from "recoil";
import { ThreeXThreeAtomFamily } from "../Atom/AtomFamilyforBoard";
import { NineXNineAtomFamily } from "../Atom/AtomFamilyforMainBoard";

const checkWinner = (values, a, b, c) => {
  return (values[a] !== 0 && values[a] === values[b] && values[a] === values[c]) && values[a]!=3;
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

const createSelector = () =>
  selector({
    key: `NineXNineWinnerSelector`, // Corrected key naming
    get: ({ get }) => {
      const values = [];
      for (let i = 1; i <= 9; i++) {
        const atomValue = get(NineXNineAtomFamily(i));
        values.push(atomValue.val);
      }

      for (const [a, b, c] of winningCombinations) {
        if (checkWinner(values, a, b, c)) {
          return values[a];
        }
      }

      for(let i=0;i<=9;i++){
        if(values[i]===0){
            return 0;
        }
      }
      return 3; // Default return value if no winner is detected
    }
  });

export const MainGridWinner = createSelector();