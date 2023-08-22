import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomCocktail } from "../../../api/thecocktaildbAPI";
import { ICocktailListModel } from "../../../api/models";

export const fetchRandomCocktail = createAsyncThunk<ICocktailListModel>(
  "cocktail/fetchRandomCocktail",
  async () => {
    const response = await getRandomCocktail();
    return response;
  }
);
