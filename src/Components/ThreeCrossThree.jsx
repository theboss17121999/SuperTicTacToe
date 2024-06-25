import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ThreeXThreeAtomFamily, TurnAtom, Winner } from "../Store/Atom/AtomFamilyforBoard";
import { useClickAndTurn } from "../Hooks/ClickAndTurn";
import { useRenderContent } from "../Hooks/DisplayPlayIcon";
import { NineXNine1 } from "../Store/Data/9X9";
import { useWinnerById } from "../Hooks/gridWinner";
import { useMainBoardWinnerP1 } from "../Hooks/MainBoardWinnerP1";
import { useMainBoardWinnerP2 } from "../Hooks/MainBoardWinnerP2";
import { useMainBoardDraw } from "../Hooks/MainBoardDraw";
import { ActiveCellAtomFamily } from "../Store/Atom/AtomForActiveCell";

export const ThreeCrossThree = ({ num }) => {
  const setGameWinner = useSetRecoilState(Winner);
  const winner = useWinnerById(num);
  const winneronMainBoardP1 = useMainBoardWinnerP1(num);
  const winneronMainBoardP2 = useMainBoardWinnerP2(num);
  const winneronMainBoardDraw = useMainBoardDraw(num);
  const atomValue = useRecoilValue(ActiveCellAtomFamily(num));

  useEffect(() => {
    if (winner !== 0 ) {
      setGameWinner(winner);
      console.log({num});
      console.log(winner);
      if(winner === 1)
        winneronMainBoardP1();
      else
        if(winner === -1)
          winneronMainBoardP2();
        else 
          winneronMainBoardDraw();         
    }
  }, [winner, setGameWinner, winneronMainBoardP1, winneronMainBoardP2 ]);

  const renderBox = (id, val) => (
    <React.Fragment key={id}>
      <Box id={id} val={val} disable={atomValue.disable} />
    </React.Fragment>
  );

  return (
    <div>
      {winner === 0 ? (
        <div className="grid grid-cols-3 grid-rows-3 w-21 h-21 m-1 p-1 border-2 border-gray-300">
          {NineXNine1.slice((num - 1) * 9, num * 9).map(item => renderBox(item.id, item.val))}
        </div>
      ) : winner === 3 ? (
        <div className="bg-red-500 w-21 h-21 m-1 p-1 border-2 border-gray-300 flex items-center justify-center">
          It is a draw
        </div>
      ) : (
        <div className="bg-red-500 w-21 h-21 m-1 p-1 border-2 border-gray-300 flex items-center justify-center">
          <div className="w-full">
            {useRenderContent(winner)}
          </div>
        </div>
      )}
    </div>
  );
};

function Box({ id , disable }) {
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
      className="relative bg-black w-7 h-7 max-h-full border-4 border-indigo-600"
      disabled={value.disable !== false || disable}
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
