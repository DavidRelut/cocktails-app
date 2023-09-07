export interface ICocktail {
  id: string; // ✔️ → get idDrink from ICocktailModel
  name: string; // ✔️ → get strDrink from ICocktailModel
  alcoholic: string; // ✔️ → get strAlcoholic from ICocktailModel
  instructions: string; // ✔️ → get strInstructions from ICocktailModel
  thumb: string; // ✔️ → get strDrinkThumb from ICocktailModel (url of the cocktail image)
  ingredients: Array<string>; // ✔️ → get 5 strIngredient${i} from ICocktailModel
}

export interface ICocktailState {
  cocktail: ICocktail[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}
