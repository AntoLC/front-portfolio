import { atom } from "recoil";
import _Defenders from "./Defenders.json";

export const Defenders = _Defenders;

export type DefendersType = {
  name: string;
  star: number;
  agency: string;
  agency_logo: string;
  src: string;
  src_employ: string;
  guarding: number;
  aggression: number;
  courage: number;
  mind: number;
};

export const defenderKey = "defender";
export const _defenderAtom = atom({
  key: defenderKey,
  default: Defenders[0],
});
const defenderSearchKey = "defenderSearch";
export const _defenderSearchAtom = atom({
  key: defenderSearchKey,
  default: "",
});
const defenderVisibilityKey = "defenderVisibility";
export const _defenderVisibilityAtom = atom({
  key: defenderVisibilityKey,
  default: false,
});
const defenderMenuVisibilityKey = "defenderMenuVisibility";
export const _defenderMenuVisibilityAtom = atom({
  key: defenderMenuVisibilityKey,
  default: false,
});
