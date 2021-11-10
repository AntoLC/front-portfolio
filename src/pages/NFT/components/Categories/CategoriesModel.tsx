import { atom } from 'recoil';
import __Categories from './Categories.json';

export const _Categories = __Categories;

export type CategoryType = {
    name:string;
    nb_asset:number;
    position:number;
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