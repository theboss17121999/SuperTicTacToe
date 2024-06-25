import { useRecoilState, useSetRecoilState } from "recoil";
import { ThreeXThreeAtomFamily, TurnAtom } from "../Store/Atom/AtomFamilyforBoard";
import { useStateById } from "./gridState";

export function useClickAndTurn(id) {
  const setValue = useSetRecoilState(ThreeXThreeAtomFamily(id));
  const setDisable = useStateById(parseInt(id / 10));
  const [turn, setTurn] = useRecoilState(TurnAtom);

  const changeState = () => {
    setValue({ val: turn, disable: true });
    setDisable({ disable: true });
    setTurn(turn * -1);
  };

  return changeState;
}
