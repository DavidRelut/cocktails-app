import { ITab } from "../../interfaces/interfaces";
import RandomCocktail from "../../components/pages/mainPage/Tabs/1_RandomCocktail/RandomCocktail";
import FindCocktail from "../../components/pages/mainPage/Tabs/2_FindCocktail/FindCocktail";
import FavoriteList from "../../components/pages/mainPage/Tabs/3_FavoriteList/FavoriteList";
import { findByIndex } from "../array.util";

export const tabsConfig: ITab[] = [
  {
    index: 0,
    label: "Cocktail au hasard",
    Content: RandomCocktail,
  },
  {
    index: 1,
    label: "Trouver un cocktail",
    Content: FindCocktail,
  },
  {
    index: 2,
    label: "Voir la liste",
    Content: FavoriteList,
  },
];

export const getTabSelected = (tabs: ITab[], currentTabSelected: number) => {
  const tabSelected = findByIndex(tabs, currentTabSelected);
  return tabSelected as ITab;
};
