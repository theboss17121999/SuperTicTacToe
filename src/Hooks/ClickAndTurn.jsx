import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ThreeXThreeAtomFamily, TurnAtom } from "../Store/Atom/AtomFamilyforBoard";
import { useStateById } from "./gridState";
import { useEnableone } from "./EnableOne";
import { useDisableone } from "./DisableAll";
import { NineXNineAtomFamily } from "../Store/Atom/AtomFamilyforMainBoard";
import { useEnableall } from "./EnableAll";

export function useClickAndTurn(id) {
  const setValue = useSetRecoilState(ThreeXThreeAtomFamily(id));
  const setDisable = useStateById(parseInt(id / 10));
  const [turn, setTurn] = useRecoilState(TurnAtom);
  const justRun = useDisableone();
  const enableGrid = useEnableone(parseInt(id%10));
  const isAnyWinner = useRecoilValue(NineXNineAtomFamily(parseInt(id%10)));
  const enableAll = useEnableall();


  const changeState = () => {
    setValue({ val: turn, disable: true });
    setDisable({ disable: true });
    setTurn(turn * -1);
    justRun();
    if(isAnyWinner.val !==0 ){
      enableAll();
    }
    console.log("click and turn :",isAnyWinner.val);
    enableGrid();
  };

  return changeState;
}
