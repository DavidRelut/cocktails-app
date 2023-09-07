import { createSlice } from "@reduxjs/toolkit";
import { ICocktailState } from "./cocktailTypes";
import { fetchRandomCocktail } from "./cocktailActions";
import { TRootState } from "../../types";

const initialState: ICocktailState = {
  cocktail: [],
  status: "idle",
  error: null,
};

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRandomCocktail.pending, (state) => {
        state.status = "idle";
        state.error = null;
      })
      .addCase(fetchRandomCocktail.fulfilled, (state, { payload }) => {
        state.status = "loading";
        state.cocktail = payload || [];
      })
      .addCase(fetchRandomCocktail.rejected, (state, { error }) => {
        state.status = "failed";
        state.error = error.message || "An error occured";
      });
  },
});

export const selectCocktail = (state: TRootState) => state.cocktail;
export default cocktailSlice.reducer;
