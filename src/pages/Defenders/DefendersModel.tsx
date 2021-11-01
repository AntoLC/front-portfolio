import { atom, selector } from 'recoil';
import _Defenders from './Defenders.json';

export const Defenders = _Defenders;

export type DefendersType = {
    name:string;
    star:number;
    agency:string;
    agency_logo:string;
    src:string;
    src_employ:string;
    guarding:number;
    aggression:number;
    courage:number;
    mind:number;
}

const defenderKey = 'defender';
export const _defenderAtom = atom({
    key: defenderKey,
    default: Defenders[0]
});