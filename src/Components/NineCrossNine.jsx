import React from "react";
import ThreeCrossThree from "./ThreeCrossThree";
import { useRecoilValue } from "recoil";
import { ThreeXThreeValuesSelector11_19 } from "../Store/NineXNine/SelectorFamilyforValues";
import { useValueById } from "../Hooks/gridValue";
import { MainGridWinner } from "../Store/NineXNine/SelectorForMainBoardWinner";

export const NineCrossNine = () => {
  const numArray = Array.from({ length: 9 }, (_, index) => index + 1);
  const winner = useRecoilValue(MainGridWinner);
  console.log(winner);

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {numArray.map(num => (
        <div key={num}>
          <ThreeCrossThree key={num} num={num} />
        </div>
      ))}
    </div>
  );
};

function DisplayValues({id}) {
  const values = useValueById(id);

  return (
    <div>
      {values.map((value, index) => (
        <div key={index}>Value {index}: {value}</div>
      ))}
    </div>
  );
};
