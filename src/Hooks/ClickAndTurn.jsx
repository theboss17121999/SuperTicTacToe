import { useRecoilState, useSetRecoilState } from "recoil";
import { ThreeXThreeAtomFamily, TrunAtom } from "../Store/ThreeXThree/Three";

export function useClickAndTurn(id) {
    const setValue = useSetRecoilState(ThreeXThreeAtomFamily(id));
    const [turn, setTurn] = useRecoilState(TrunAtom);

    const changeState = () => {
        setValue({ val: turn });
        setTurn(turn * -1);
    };

    return changeState;
}
