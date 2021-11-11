import _Trendings from "./Trending.json";

export const Trendings = _Trendings;

export type TrendingType = {
  name: string;
  price: number;
  highest: number;
  src: string;
};
