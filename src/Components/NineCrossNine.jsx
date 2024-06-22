import React from "react";
import ThreeCrossThree from "./ThreeCrossThree";
import { useRecoilValue } from "recoil";
import { ThreeXThreeValuesSelector11_19 } from "../Store/ThreeXThree/SelectorFamilyforValues";
import { useValueById } from "../Hooks/gridValue";

export const NineCrossNine = () => {
  const numArray = Array.from({ length: 9 }, (_, index) => index + 1);
  console.log(numArray);

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {numArray.map(num => (
        <div key={num}>
          <ThreeCrossThree key={num} num={num} />
          <div>
            <DisplayValues id={num} />
          </div>
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
