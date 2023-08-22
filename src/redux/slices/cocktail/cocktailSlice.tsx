import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICocktailState } from "./cocktailTypes";
import { fetchRandomCocktail } from "./cocktailActions";
import { TRootState } from "../../types";

// Initial state
const initialState: ICocktailState = {
  cocktail: [],
  loading: false,
  error: null,
};

// Cocktails Slice definition
const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRandomCocktail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomCocktail.fulfilled, (state, action) => {
        const { payload } = action;
        state.loading = false;
        state.cocktail = payload;
      })
      .addCase(fetchRandomCocktail.rejected, (state, action) => {
        const { message } = action.error;
        state.loading = true;
        state.error = message || "An error occured";
      });
  },
});

export const selectCocktail = (state: TRootState) => state.cocktail;
export default cocktailSlice.reducer;
