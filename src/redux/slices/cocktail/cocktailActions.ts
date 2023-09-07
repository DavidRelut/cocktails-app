import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomCocktail } from "../../../api/thecocktaildbAPI";
import { ICocktail } from "./cocktailTypes";
import { ICocktailModel } from "../../../api/models";
import { convertModelToCocktailType } from "../../../utils/object.util";

export const fetchRandomCocktail = createAsyncThunk(
  "cocktail/fetchRandomCocktail",
  async () => {
    const response = await getRandomCocktail();
    const cocktails: ICocktail[] = response.drinks.map(
      (cocktail: ICocktailModel) => convertModelToCocktailType(cocktail)
    );
    return cocktails;
  }
);
