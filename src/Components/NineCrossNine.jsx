import React from "react";
import ThreeCrossThree from "./ThreeCrossThree";
import { useRecoilValue } from "recoil";
import { MainGridWinner } from "../Store/NineXNine/SelectorForMainBoardWinner";

export const NineCrossNine = () => {
  const numArray = Array.from({ length: 9 }, (_, index) => index + 1);
  const winner = useRecoilValue(MainGridWinner);
  console.log(winner);

  return (
    <div>
      {winner === 0 ? (
        <div className="grid grid-cols-3 w-45 h-45">
          {numArray.map(num => (
            <div key={num}>
              <ThreeCrossThree num={num} />
            </div>
          ))}
        </div>
      ) : (
        winner === 3 ? (
          <div className="w-45 h-45 content-center block justify-items-center">
            <div className="w-full text-center">It is draw</div>
          </div>
        ) : (
          <div className="w-45 h-45 content-center block justify-items-center">
            <div className="w-full text-center">Winner is Player {winner === 1 ? '1' : '2'}</div>
          </div>
        )
      )}
    </div>
  );
};

function DisplayValues({ id }) {
  const values = useValueById(id);

  return (
    <div>
      {values.map((value, index) => (
        <div key={index}>Value {index}: {value}</div>
      ))}
    </div>
  );
};
