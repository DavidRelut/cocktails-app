import RandomCocktail from "../Tabs/1_RandomCocktail/RandomCocktail";
import FindCocktail from "../Tabs/2_FindCocktail/FindCocktail";
import FavoriteList from "../Tabs/3_FavoriteList/FavoriteList";
import { findByIndex } from "./array.helper";

export interface ITab {
  index: number;
  label: string;
  Content: React.FC;
}

export const tabsConfig: ITab[] = [
  {
    index: 1,
    label: "Cocktail au hasard",
    Content: RandomCocktail,
  },
  {
    index: 2,
    label: "Trouver un cocktail",
    Content: FindCocktail,
  },
  {
    index: 3,
    label: "Voir la liste",
    Content: FavoriteList,
  },
];

export const getTabSelected = (tabs: ITab[], currentTabSelected: number) => {
  const tabSelected = findByIndex(tabs, currentTabSelected);
  return tabSelected as ITab;
};
