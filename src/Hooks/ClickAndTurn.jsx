import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ThreeXThreeAtomFamily, ThreeXThreeValuesSelector, ThreeXthreeWinnerSelector, TurnAtom, Winner } from "../Store/ThreeXThree/Three";

export function useClickAndTurn(id) {
  const setValue = useSetRecoilState(ThreeXThreeAtomFamily(id));
  const setDisable = useSetRecoilState(ThreeXThreeValuesSelector);
  const [turn, setTurn] = useRecoilState(TurnAtom);
  const setWinner = useRecoilState(Winner);

  const changeState = () => {
    setValue({ val: turn, disable: true });
    setDisable({ disable: true });
    setTurn(turn * -1);
  };

  return changeState;
}
