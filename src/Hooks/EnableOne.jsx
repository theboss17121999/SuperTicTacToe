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

export function useEnableone(id){
    let selector;

    switch (id) {
        case 1:
            selector = useSetRecoilState(EnableActiveCellValuesSelector1);
            break;
        case 2:
            selector = useSetRecoilState(EnableActiveCellValuesSelector2);
            break;
        case 3:
            selector = useSetRecoilState(EnableActiveCellValuesSelector3);
            break;
        case 4:
            selector = useSetRecoilState(EnableActiveCellValuesSelector4);
            break;
        case 5:
            selector = useSetRecoilState(EnableActiveCellValuesSelector5);
            break;
        case 6:
            selector = useSetRecoilState(EnableActiveCellValuesSelector6);
            break;
        case 7:
            selector = useSetRecoilState(EnableActiveCellValuesSelector7);
            break;
        case 8:
            selector = useSetRecoilState(EnableActiveCellValuesSelector8);
            break;
        case 9:
            selector = useSetRecoilState(EnableActiveCellValuesSelector9);
            break;
        default:
            // Handle default case if needed
            selector = null;
            break;
    }

    return selector;
}