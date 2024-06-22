import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { 
    ThreeXThreeValuesSelector11_19, 
    ThreeXThreeValuesSelector21_29, 
    ThreeXThreeValuesSelector31_39, 
    ThreeXThreeValuesSelector41_49, 
    ThreeXThreeValuesSelector51_59, 
    ThreeXThreeValuesSelector61_69, 
    ThreeXThreeValuesSelector71_79, 
    ThreeXThreeValuesSelector81_89, 
    ThreeXThreeValuesSelector91_99 
} from "../Store/ThreeXThree/SelectorFamilyforValues";

export function useStateById(id) {
    if(id === 1){
        const grid1Value = useSetRecoilState(ThreeXThreeValuesSelector11_19);
        return grid1Value;
    }
    if(id === 2){
        const grid2Value = useSetRecoilState(ThreeXThreeValuesSelector21_29);
        return grid2Value;
    }
    if(id === 3){
        const grid3Value = useSetRecoilState(ThreeXThreeValuesSelector31_39);
        return grid3Value;
    }
    if(id === 4){
        const grid4Value = useSetRecoilState(ThreeXThreeValuesSelector41_49);
        return grid4Value;
    }
    if(id === 5){
        const grid5Value = useSetRecoilState(ThreeXThreeValuesSelector51_59);
        return grid5Value;
    }
    if(id === 6){
        const grid6Value = useSetRecoilState(ThreeXThreeValuesSelector61_69);
        return grid6Value;
    }
    if(id === 7){
        const grid7Value = useSetRecoilState(ThreeXThreeValuesSelector71_79);
        return grid7Value;
    }
    if(id === 8){
        const grid8Value = useSetRecoilState(ThreeXThreeValuesSelector81_89);
        return grid8Value;
    }
    if(id === 9){
        const grid9Value = useSetRecoilState(ThreeXThreeValuesSelector91_99);
        return grid9Value;
    }   
}
