import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ThreeXThreeAtomFamily, TurnAtom, Winner } from "../Store/NineXNine/AtomFamilyforBoard";
import { useClickAndTurn } from "../Hooks/ClickAndTurn";
import { useRenderContent } from "../Hooks/DisplayPlayIcon";
import { NineXNine1 } from "../Store/Data/9X9";
import { useWinnerById } from "../Hooks/gridWinner";
import { useMainBoardWinnerP1 } from "../Hooks/MainBoardWinnerP1";
import { useMainBoardWinnerP2 } from "../Hooks/MainBoardWinnerP2";

export const ThreeCrossThree = ({ num }) => {
  const setGameWinner = useSetRecoilState(Winner);
  const winner = useWinnerById(num);
  const winneronMainBoardP1 = useMainBoardWinnerP1(num);
  const winneronMainBoardP2 = useMainBoardWinnerP2(num);

  useEffect(() => {
    if (winner !== 0 ) {
      setGameWinner(winner);
      console.log({num});
      if(winner === 1)
        winneronMainBoardP1();
      else
        winneronMainBoardP2();
    }
  }, [winner, setGameWinner, winneronMainBoardP1, winneronMainBoardP2 ]);

  const renderBox = (id, val) => (
    <React.Fragment key={id}>
      <Box id={id} val={val} />
    </React.Fragment>
  );

  return (
    <div className="grid grid-cols-3 grid-rows-3 w-96 h-96 m-0 p-0">
      {NineXNine1.slice((num - 1) * 9, num * 9).map(item => renderBox(item.id, item.val))}
    </div>
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
