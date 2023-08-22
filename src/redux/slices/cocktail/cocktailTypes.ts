export interface ICocktail {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string; // url of the cocktail image
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
}

export interface ICocktailState {
  cocktail: ICocktail[];
  loading: boolean;
  error: string | null;
}
