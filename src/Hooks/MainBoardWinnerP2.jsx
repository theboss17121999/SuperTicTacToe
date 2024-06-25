import { useSetRecoilState } from "recoil";
import { useCallback } from "react";
import { 
  NineXNineValuesSelectorWinner12, 
  NineXNineValuesSelectorWinner22,
  NineXNineValuesSelectorWinner32,
  NineXNineValuesSelectorWinner42,
  NineXNineValuesSelectorWinner52,
  NineXNineValuesSelectorWinner62,
  NineXNineValuesSelectorWinner72,
  NineXNineValuesSelectorWinner82,
  NineXNineValuesSelectorWinner92
} from "../Store/NineXNine/SelectorFamilyforMainBoardWinner";

export function useMainBoardWinnerP2(id) {
  const setWinner1 = useSetRecoilState(NineXNineValuesSelectorWinner12);
  const setWinner2 = useSetRecoilState(NineXNineValuesSelectorWinner22);  
  const setWinner3 = useSetRecoilState(NineXNineValuesSelectorWinner32);  
  const setWinner4 = useSetRecoilState(NineXNineValuesSelectorWinner42);  
  const setWinner5 = useSetRecoilState(NineXNineValuesSelectorWinner52);  
  const setWinner6 = useSetRecoilState(NineXNineValuesSelectorWinner62);  
  const setWinner7 = useSetRecoilState(NineXNineValuesSelectorWinner72);  
  const setWinner8 = useSetRecoilState(NineXNineValuesSelectorWinner82);  
  const setWinner9 = useSetRecoilState(NineXNineValuesSelectorWinner92);  

  const fun = useCallback(() => {
    switch (id) {
      case 1:
        setWinner1(prev => {
          console.log("Winner 1");
          return prev;
        });
        break;
      case 2:
        setWinner2(prev => {
          console.log("Winner 2");
          return prev;
        });
        break;
      case 3:
        setWinner3(prev => {
          console.log("Winner 3");
          return prev;
        });
        break;
      case 4:
        setWinner4(prev => {
          console.log("Winner 4");
          return prev;
        });
        break;
      case 5:
        setWinner5(prev => {
          console.log("Winner 5");
          return prev;
        });
        break;
      case 6:
        setWinner6(prev => {
          console.log("Winner 6");
          return prev;
        });
        break;
      case 7:
        setWinner7(prev => {
          console.log("Winner 7");
          return prev;
        });
        break;
      case 8:
        setWinner8(prev => {
          console.log("Winner 8");
          return prev;
        });
        break;
      case 9:
        setWinner9(prev => {
          console.log("Winner 9");
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
