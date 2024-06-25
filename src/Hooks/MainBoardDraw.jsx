import { useSetRecoilState } from "recoil";
import { useCallback } from "react";
import { 
  NineXNineValuesSelectorWinner13, 
  NineXNineValuesSelectorWinner23,
  NineXNineValuesSelectorWinner33,
  NineXNineValuesSelectorWinner43,
  NineXNineValuesSelectorWinner53,
  NineXNineValuesSelectorWinner63,
  NineXNineValuesSelectorWinner73,
  NineXNineValuesSelectorWinner83,
  NineXNineValuesSelectorWinner93
} from "../Store/NineXNine/SelectorFamilyforMainBoardWinner";

export function useMainBoardDraw(id) {
  const setWinner1 = useSetRecoilState(NineXNineValuesSelectorWinner13);
  const setWinner2 = useSetRecoilState(NineXNineValuesSelectorWinner23);  
  const setWinner3 = useSetRecoilState(NineXNineValuesSelectorWinner33);  
  const setWinner4 = useSetRecoilState(NineXNineValuesSelectorWinner43);  
  const setWinner5 = useSetRecoilState(NineXNineValuesSelectorWinner53);  
  const setWinner6 = useSetRecoilState(NineXNineValuesSelectorWinner63);  
  const setWinner7 = useSetRecoilState(NineXNineValuesSelectorWinner73);  
  const setWinner8 = useSetRecoilState(NineXNineValuesSelectorWinner83);  
  const setWinner9 = useSetRecoilState(NineXNineValuesSelectorWinner93);  

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
