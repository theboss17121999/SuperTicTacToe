import { useSetRecoilState } from "recoil";
import { 
    DisableActiveCellValuesSelector1,
    DisableActiveCellValuesSelector2, 
    DisableActiveCellValuesSelector3, 
    DisableActiveCellValuesSelector4, 
    DisableActiveCellValuesSelector5, 
    DisableActiveCellValuesSelector6, 
    DisableActiveCellValuesSelector7,
    DisableActiveCellValuesSelector8,
    DisableActiveCellValuesSelector9 
} from "../Store/NineXNine/SelectorForActiveCellDisable";

export function useDisableone(){   
    const selector_1 = useSetRecoilState(DisableActiveCellValuesSelector1);
    const selector_2 = useSetRecoilState(DisableActiveCellValuesSelector2);
    const selector_3 = useSetRecoilState(DisableActiveCellValuesSelector3);
    const selector_4 = useSetRecoilState(DisableActiveCellValuesSelector4);
    const selector_5 = useSetRecoilState(DisableActiveCellValuesSelector5);
    const selector_6 = useSetRecoilState(DisableActiveCellValuesSelector6);
    const selector_7 = useSetRecoilState(DisableActiveCellValuesSelector7);
    const selector_8 = useSetRecoilState(DisableActiveCellValuesSelector8);
    const selector_9 = useSetRecoilState(DisableActiveCellValuesSelector9);

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