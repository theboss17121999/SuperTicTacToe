import { useRecoilValue } from "recoil";
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
} from "../Store/NineXNine/SelectorFamilyforValues";

export function useValueById(id) {
    if(id === 1){
        const grid1Value = useRecoilValue(ThreeXThreeValuesSelector11_19);
        return grid1Value;
    }
    if(id === 2){
        const grid2Value = useRecoilValue(ThreeXThreeValuesSelector21_29);
        return grid2Value;
    }
    if(id === 3){
        const grid3Value = useRecoilValue(ThreeXThreeValuesSelector31_39);
        return grid3Value;
    }
    if(id === 4){
        const grid4Value = useRecoilValue(ThreeXThreeValuesSelector41_49);
        return grid4Value;
    }
    if(id === 5){
        const grid5Value = useRecoilValue(ThreeXThreeValuesSelector51_59);
        return grid5Value;
    }
    if(id === 6){
        const grid6Value = useRecoilValue(ThreeXThreeValuesSelector61_69);
        return grid6Value;
    }
    if(id === 7){
        const grid7Value = useRecoilValue(ThreeXThreeValuesSelector71_79);
        return grid7Value;
    }
    if(id === 8){
        const grid8Value = useRecoilValue(ThreeXThreeValuesSelector81_89);
        return grid8Value;
    }
    if(id === 9){
        const grid9Value = useRecoilValue(ThreeXThreeValuesSelector91_99);
        return grid9Value;
    }   
}
