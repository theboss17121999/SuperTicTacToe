import { ThreeXThree1 } from "../Store/Data/3X3";
import React from "react";
import { ThreeXThreeAtomFamily } from "../Store/ThreeXThree/Three";
import { useRecoilValue } from "recoil";

export function useWinner() {
    const traverseValues = () => {
        const values = [];
        for(let i = 1; i <= 9; i++){
            values.push(useRecoilValue(ThreeXThreeAtomFamily(i)).val);
        }
        return values;
    };

    const winner = () => {
        console.log("hello");
        const values = traverseValues();
        values.forEach(value => console.log(value));
    };

    return winner;  // Returning the function itself, not its result
}
