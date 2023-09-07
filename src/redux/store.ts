import { configureStore } from "@reduxjs/toolkit";

import cockailReducer from "./slices/cocktail/cocktailSlice";

const store = configureStore({
  reducer: {
    cocktail: cockailReducer,
  },
});

export default store;
