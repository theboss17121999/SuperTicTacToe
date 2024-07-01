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
import { useEnableall } from "../Hooks/EnableAll";
import { useEnableone } from "../Hooks/EnableOne";

export const ThreeCrossThree = ({ num }) => {
  const setGameWinner = useSetRecoilState(Winner);
  const winner = useWinnerById(num);
  const winneronMainBoardP1 = useMainBoardWinnerP1(num);
  const winneronMainBoardP2 = useMainBoardWinnerP2(num);
  const winneronMainBoardDraw = useMainBoardDraw(num);
  const atomValue = useRecoilValue(ActiveCellAtomFamily(num));
  const enableAll = useEnableall();
  const [grid, enableGrid] = useEnableone(num);


  useEffect(() => {
    if (winner !== 0) {
      setGameWinner(winner);
      if (winner === 1) winneronMainBoardP1();
      else if (winner === -1) winneronMainBoardP2();
      else winneronMainBoardDraw();
      console.log("from threeCrossThree",grid)
      if(!grid[num].disable)
        enableAll();
    }
  }, [winner, setGameWinner, winneronMainBoardP1, winneronMainBoardP2, winneronMainBoardDraw]);


  const renderBox = (id, val) => (
    <React.Fragment key={id}>
      <Box id={id} val={val} disable={atomValue.disable} />
    </React.Fragment>
  );

  return (
    <div>
      {winner === 0 ? (
        <div
          className={`grid grid-cols-3 grid-rows-3 w-21 h-21 m-1 p-1 border-2 rounded-lg ${
            atomValue.disable ? 'bg-white' : 'bg-lime-200'
          }`}
        >
          {NineXNine1.slice((num - 1) * 9, num * 9).map(item => renderBox(item.id, item.val))}
        </div>
      ) : winner === 3 ? (
        <div className="bg-red-400 w-21 h-21 m-1 p-1 border-2 rounded-lg flex items-center justify-center text-4xl font-lilita">
          Draw
        </div>
      ) : (
        <div className={`w-21 h-21 m-1 p-1 border-2 rounded-lg ${winner === 1 ? 'bg-cyan-400' : 'bg-green-400'}`}>
          <div className="w-full">
            {useRenderContent(winner, false)}
          </div>
        </div>
      )}
    </div>
  );
};

function Box({ id, disable }) {
  const value = useRecoilValue(ThreeXThreeAtomFamily(id));
  const changeState = useClickAndTurn(id);
  const [isHovered, setIsHovered] = useState(false);
  const turn = useRecoilValue(TurnAtom);
  const [hover, setHover] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHover(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHover(false);
  };

  return (
    <button
      onClick={changeState}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={` max-h-full border-2 ${disable ? 'border-black' : 'border-green-500'}`}
      disabled={value.disable !== false || disable}
    >
      <div className="w-full h-full">
        {value.val !== 0 && (<div className="">
            {useRenderContent(value.val)}
          </div>)
        }
        {isHovered && value.val === 0 && (<div className="">
            {useRenderContent(turn, hover)}
          </div>)
        }
      </div>
    </button>
  );
}

export default ThreeCrossThree;
