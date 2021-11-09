import { atom } from 'recoil';
import _Trendings from './Trending.json';

export const Trendings = _Trendings;

export type TrendingType = {
    name:string;
    price:number;
    highest:number;
    src:string;
}

/*const defenderKey = 'defender';
export const _defenderAtom = atom({
    key: defenderKey,
    default: Defenders[0]
});
const defenderSearchKey = 'defenderSearch';
export const _defenderSearchAtom = atom({
    key: defenderSearchKey,
    default: ''
});
const defenderVisibilityKey = 'defenderVisibility';
export const _defenderVisibilityAtom = atom({
    key: defenderVisibilityKey,
    default: false
});
const defenderMenuVisibilityKey = 'defenderMenuVisibility';
export const _defenderMenuVisibilityAtom = atom({
    key: defenderMenuVisibilityKey,
    default: false
});
*/