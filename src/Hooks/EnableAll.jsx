import { useSetRecoilState } from "recoil";
import { 
    EnableActiveCellValuesSelector1, 
    EnableActiveCellValuesSelector2, 
    EnableActiveCellValuesSelector3, 
    EnableActiveCellValuesSelector4, 
    EnableActiveCellValuesSelector5, 
    EnableActiveCellValuesSelector6, 
    EnableActiveCellValuesSelector7, 
    EnableActiveCellValuesSelector8, 
    EnableActiveCellValuesSelector9 
} from "../Store/NineXNine/SelectorforActiveCellEnable";

export function useEnableall(){   
    const selector_1 = useSetRecoilState(EnableActiveCellValuesSelector1);
    const selector_2 = useSetRecoilState(EnableActiveCellValuesSelector2);
    const selector_3 = useSetRecoilState(EnableActiveCellValuesSelector3);
    const selector_4 = useSetRecoilState(EnableActiveCellValuesSelector4);
    const selector_5 = useSetRecoilState(EnableActiveCellValuesSelector5);
    const selector_6 = useSetRecoilState(EnableActiveCellValuesSelector6);
    const selector_7 = useSetRecoilState(EnableActiveCellValuesSelector7);
    const selector_8 = useSetRecoilState(EnableActiveCellValuesSelector8);
    const selector_9 = useSetRecoilState(EnableActiveCellValuesSelector9);

    return (newState) => {
        selector_1(newState);
        selector_2(newState);
        selector_3(newState);
        selector_4(newState);
        selector_5(newState);
        selector_6(newState);
        selector_7(newState);
        selector_8(newState);
        selector_9(newState);
    };
}