import { atom, atomFamily, selector } from "recoil";
import { ThreeXThree1 } from "../Data/3X3";

export const ThreeXThreeAtomFamily = atomFamily({
  key: 'ThreeXThreeAtomFamily',
  default: id => {
    return ThreeXThree1.find(x => x.id === id);
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

export const ThreeXThreeValuesSelector = selector({
  key: 'ThreeXThreeValuesSelector',
  get: ({ get }) => {
    const values = [];
    const trueorfalse = [];
    for (let i = 1; i <= 9; i++) {
      const atomValue = get(ThreeXThreeAtomFamily(i));
      values.push(atomValue.val);
      trueorfalse.push(atomValue.disable);
    }
    console.log(values);
    console.log(trueorfalse);

    return values;
  },
  set: ({ set, get }, disable) => {
    const values = [];
    for (let i = 1; i <= 9; i++) {
      const atomValue = get(ThreeXThreeAtomFamily(i));
      values.push(atomValue.val);
    }

    const checkWinner = (a, b, c) => {
      return values[a] !== 0 && values[a] === values[b] && values[a] === values[c];
    }

    const winningCombinations = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal 1
      [2, 4, 6]  // Diagonal 2
    ];

    let winnerDetected = false;
    for (const [a, b, c] of winningCombinations) {
      if (checkWinner(a, b, c)) {
        winnerDetected = true;
        break;
      }
    }

    if (winnerDetected) {
      for (let i = 1; i <= 9; i++) {
        set(ThreeXThreeAtomFamily(i), prev => ({
          ...prev,
          disable: true
        }));
      }
    }
  }
});

export const ThreeXthreeWinnerSelector = selector({
  key : "WinnerSelector",
  get : ({get}) =>{
    const values = [];
    for (let i = 1; i <= 9; i++) {
      const atomValue = get(ThreeXThreeAtomFamily(i));
      values.push(atomValue.val);
    }

    const checkWinner = (a, b, c) => {
      return values[a] !== 0 && values[a] === values[b] && values[a] === values[c];
    }

    const winningCombinations = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal 1
      [2, 4, 6]  // Diagonal 2
    ];

    let winnerDetected = false;
    for (const [a, b, c] of winningCombinations) {
      if (checkWinner(a, b, c)) {
        winnerDetected = true;
        return values[a];
        break;
      }
    }

    return 0;
  }
})
