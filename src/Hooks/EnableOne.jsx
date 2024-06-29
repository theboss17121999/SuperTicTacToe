import { useRecoilState, useSetRecoilState } from "recoil";
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

export function useEnableone(id){
    let selector;

    switch (id) {
        case 1:
            selector = useRecoilState(EnableActiveCellValuesSelector1);
            break;
        case 2:
            selector = useRecoilState(EnableActiveCellValuesSelector2);
            break;
        case 3:
            selector = useRecoilState(EnableActiveCellValuesSelector3);
            break;
        case 4:
            selector = useRecoilState(EnableActiveCellValuesSelector4);
            break;
        case 5:
            selector = useRecoilState(EnableActiveCellValuesSelector5);
            break;
        case 6:
            selector = useRecoilState(EnableActiveCellValuesSelector6);
            break;
        case 7:
            selector = useRecoilState(EnableActiveCellValuesSelector7);
            break;
        case 8:
            selector = useRecoilState(EnableActiveCellValuesSelector8);
            break;
        case 9:
            selector = useRecoilState(EnableActiveCellValuesSelector9);
            break;
        default:
            // Handle default case if needed
            selector = null;
            break;
    }

    return selector;
}