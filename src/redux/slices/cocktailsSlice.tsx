import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Cocktail } from '../../types/cocktails'
import API from '../../client/api'

// Type definition of the cocktail slice state
export interface ICocktailState {
  cocktail: Cocktail | undefined
}

// Initial state
const initialState: ICocktailState = {
  cocktail: undefined,
}

const getRandomCocktail = createAsyncThunk('getRandomCocktail', async () => {
  const response = await API.get('random.php')
  return response.data.drinks[0]
})

// Cocktails Slice definition
const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRandomCocktail.fulfilled, (state, action) => {
      const payload = action.payload
      if (state.cocktail) {
        state.cocktail.idDrink = payload.idDrink
        state.cocktail.strDrink = payload.strDrink
        state.cocktail.strInstructions = payload.strInstructions
        state.cocktail.strDrinkThumb = payload.strDrinkThumb // url of the cocktail image
        state.cocktail.strIngredient1 = payload.strIngredient1
        state.cocktail.strIngredient2 = payload.strIngredient2
        state.cocktail.strIngredient3 = payload.strIngredient3
        state.cocktail.strIngredient4 = payload.strIngredient4
        state.cocktail.strIngredient5 = payload.strIngredient5
      } else {
        state.cocktail = payload
      }
    })
  },
})

// Export reducer
export default cocktailSlice.reducer

export const cocktailAction = { getRandomCocktail }
