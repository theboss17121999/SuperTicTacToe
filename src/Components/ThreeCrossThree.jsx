import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { ThreeXThreeAtomFamily, ThreeXThreeValuesSelector, TrunAtom } from "../Store/ThreeXThree/Three";
import { useClickAndTurn } from "../Hooks/ClickAndTurn";
import { useRenderContent } from "../Hooks/DisplayPlayIcon";
import { ThreeXThree1 } from "../Store/Data/3X3";

export const ThreeCrossThree = () => {

  const renderBox = (id, val) => {
    return (
      <React.Fragment key={id}>
        <Box id={id} val={val} />
        {/* <DisplayValues /> */}
      </React.Fragment>
    );
  };

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 w-96 h-96">
        {ThreeXThree1.map(item => renderBox(item.id, item.val))}
      </div>
      <DisplayValues />
    </>
  );
};

function Box({ id }) {
  const value = useRecoilValue(ThreeXThreeAtomFamily(id));
  const changeState = useClickAndTurn(id);
  const [isHovered, setIsHovered] = useState(false);
  const turn = useRecoilValue(TrunAtom);

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
      disabled={value.val !== 0}
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

const DisplayValues = () => {
  const values = useRecoilValue(ThreeXThreeValuesSelector);

  return (
    <div>
      {values.map((value, index) => (
        <div key={index}>Value {index + 1}: {value}</div>
      ))}
    </div>
  );
}

export default ThreeCrossThree;
