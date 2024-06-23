import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ThreeXThreeAtomFamily, TurnAtom, Winner } from "../Store/NineXNine/AtomFamilyforBoard";
import { useClickAndTurn } from "../Hooks/ClickAndTurn";
import { useRenderContent } from "../Hooks/DisplayPlayIcon";
import { NineXNine1 } from "../Store/Data/9X9";
import { useWinnerById } from "../Hooks/gridWinner";
import { NineXNineValuesSelectorWinner1 } from "../Store/NineXNine/SelectorFamilyforMainBoardWinner";

export const ThreeCrossThree = ({ num }) => {
  const [gameWinner, setGameWinner] = useRecoilState(Winner);
  const winner = useWinnerById(num);
  const setWinneron3X3 = useSetRecoilState(NineXNineValuesSelectorWinner1);

  useEffect(() => {
    if (winner !== 0) {
      setGameWinner(winner);
      setWinneron3X3();
    }
  }, [winner, setGameWinner,  setWinneron3X3 ]);

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
