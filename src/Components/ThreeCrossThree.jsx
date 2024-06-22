import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ThreeXThreeAtomFamily, TurnAtom, Winner } from "../Store/ThreeXThree/AtomFamilyforBoard";
import { useClickAndTurn } from "../Hooks/ClickAndTurn";
import { useRenderContent } from "../Hooks/DisplayPlayIcon";
import { ThreeXThree1 } from "../Store/Data/3X3";
import { useWinnerById } from "../Hooks/gridWinner";

export const ThreeCrossThree = ({ num }) => {
  const [gameWinner, setGameWinner] = useRecoilState(Winner);
  const winner = useWinnerById(num);
  useEffect(() => {
    if (winner !== 0) {
      setGameWinner(winner);
    }
  }, [winner, setGameWinner]);

  const renderBox = (id, val) => {
    return (
      <React.Fragment key={id}>
        <Box id={id} val={val} />
      </React.Fragment>
    );
  };

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 w-96 h-96 m-0 p-0">
        {ThreeXThree1.slice((num-1) * 9, num * 9).map(item => renderBox(item.id, item.val))}
      </div>
    </>
  );
};

function Box({ id }) {
  const value = useRecoilValue(ThreeXThreeAtomFamily(id));
  const changeState = useClickAndTurn(id);
  const [isHovered, setIsHovered] = useState(false);
  const turn = useRecoilValue(TurnAtom);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onClick={changeState}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-black w-full h-full max-h-full border-4 border-indigo-600"
      disabled={value.disable !== false}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="z-2">
          {useRenderContent(value.val)}
        </div>
        {isHovered && value.val === 0 && useRenderContent(turn)}
      </div>
    </button>
  );
}



export default ThreeCrossThree;
