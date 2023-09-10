import { ICocktailModel } from "../../../api/models";
import { ICocktail } from "../cocktail/cocktailTypes";

export const convertModelToCocktailType = (
  cocktail: ICocktailModel
): ICocktail => {
  const ingredients: Array<string> = [];

  for (let i = 1; i <= 5; i++) {
    const ingredientKey = `strIngredient${i}` as keyof typeof cocktail;

    if (cocktail[ingredientKey]) {
      ingredients.push(cocktail[ingredientKey] as string);
    }
  }

  return {
    id: cocktail?.idDrink,
    name: cocktail?.strDrink,
    alcoholic: cocktail?.strAlcoholic,
    instructions: cocktail?.strInstructions,
    thumb: cocktail?.strDrinkThumb,
    ingredients,
  };
};
