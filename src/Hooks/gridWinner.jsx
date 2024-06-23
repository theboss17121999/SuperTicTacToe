import { useRecoilValue } from "recoil";
import {
    ThreeXthreeWinnerSelector11_19,
    ThreeXthreeWinnerSelector21_29,
    ThreeXthreeWinnerSelector31_39,
    ThreeXthreeWinnerSelector41_49,
    ThreeXthreeWinnerSelector51_59,
    ThreeXthreeWinnerSelector61_69,
    ThreeXthreeWinnerSelector71_79,
    ThreeXthreeWinnerSelector81_89,
    ThreeXthreeWinnerSelector91_99
} from "../Store/NineXNine/SelectorFamilyforWinner";

export function useWinnerById(id) {
    let selector;

    switch (id) {
        case 1:
            selector = ThreeXthreeWinnerSelector11_19;
            break;
        case 2:
            selector = ThreeXthreeWinnerSelector21_29;
            break;
        case 3:
            selector = ThreeXthreeWinnerSelector31_39;
            break;
        case 4:
            selector = ThreeXthreeWinnerSelector41_49;
            break;
        case 5:
            selector = ThreeXthreeWinnerSelector51_59;
            break;
        case 6:
            selector = ThreeXthreeWinnerSelector61_69;
            break;
        case 7:
            selector = ThreeXthreeWinnerSelector71_79;
            break;
        case 8:
            selector = ThreeXthreeWinnerSelector81_89;
            break;
        case 9:
            selector = ThreeXthreeWinnerSelector91_99;
            break;
        default:
            // Handle default case if needed
            selector = null;
            break;
    }

    if (selector) {
        const winner = useRecoilValue(selector);
        return winner;
    } else {
        // Handle invalid ID case, if necessary
        return null;
    }
}
