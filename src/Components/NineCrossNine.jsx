import React from "react";
import ThreeCrossThree from "./ThreeCrossThree";
import { useRecoilValue } from "recoil";
import { MainGridWinner } from "../Store/NineXNine/SelectorForMainBoardWinner";

export const NineCrossNine = () => {
  const numArray = Array.from({ length: 9 }, (_, index) => index + 1);
  const winner = useRecoilValue(MainGridWinner);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4  bg-stone-300">
      {winner === 0 ? (
        <div className="grid grid-cols-3 gap-4 w-auto">
          {numArray.map(num => (
            <div key={num} className="p-1">
              <ThreeCrossThree num={num} />
            </div>
          ))}
        </div>
      ) : winner === 3 ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="text-8xl font-bold text-gray-700">Draw</div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold text-gray-700 text-6xl font-lilita">
            Winner is Player {winner === 1 ? '1' : '2'}
          </div>
        </div>
      )}
    </div>
  );
};

function DisplayValues({ id }) {
  const values = useValueById(id);

  return (
    <div className="p-2 bg-white shadow-md rounded-lg">
      {values.map((value, index) => (
        <div key={index} className="text-gray-700">
          Value {index}: {value}
        </div>
      ))}
    </div>
  );
}
