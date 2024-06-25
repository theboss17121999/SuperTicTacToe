import { useSetRecoilState } from "recoil";
import { useCallback } from "react";
import { 
  NineXNineValuesSelectorWinner11, 
  NineXNineValuesSelectorWinner21,
  NineXNineValuesSelectorWinner31,
  NineXNineValuesSelectorWinner41,
  NineXNineValuesSelectorWinner51,
  NineXNineValuesSelectorWinner61,
  NineXNineValuesSelectorWinner71,
  NineXNineValuesSelectorWinner81,
  NineXNineValuesSelectorWinner91
} from "../Store/NineXNine/SelectorFamilyforMainBoardWinner";

export function useMainBoardWinnerP1(id) {
  const setWinner1 = useSetRecoilState(NineXNineValuesSelectorWinner11);
  const setWinner2 = useSetRecoilState(NineXNineValuesSelectorWinner21);  
  const setWinner3 = useSetRecoilState(NineXNineValuesSelectorWinner31);  
  const setWinner4 = useSetRecoilState(NineXNineValuesSelectorWinner41);  
  const setWinner5 = useSetRecoilState(NineXNineValuesSelectorWinner51);  
  const setWinner6 = useSetRecoilState(NineXNineValuesSelectorWinner61);  
  const setWinner7 = useSetRecoilState(NineXNineValuesSelectorWinner71);  
  const setWinner8 = useSetRecoilState(NineXNineValuesSelectorWinner81);  
  const setWinner9 = useSetRecoilState(NineXNineValuesSelectorWinner91);  

  const fun = useCallback(() => {
    switch (id) {
      case 1:
        setWinner1(prev => {
          return prev;
        });
        break;
      case 2:
        setWinner2(prev => {
          return prev;
        });
        break;
      case 3:
        setWinner3(prev => {
          return prev;
        });
        break;
      case 4:
        setWinner4(prev => {
          return prev;
        });
        break;
      case 5:
        setWinner5(prev => {
          return prev;
        });
        break;
      case 6:
        setWinner6(prev => {
          return prev;
        });
        break;
      case 7:
        setWinner7(prev => {
          return prev;
        });
        break;
      case 8:
        setWinner8(prev => {
          return prev;
        });
        break;
      case 9:
        setWinner9(prev => {
          return prev;
        });
        break;
      default:
        console.log("Invalid ID");
        break;
    }
  }, [id, setWinner1, setWinner2, setWinner3, setWinner4, setWinner5, setWinner6, setWinner7, setWinner8, setWinner9]);

  return fun;
}
