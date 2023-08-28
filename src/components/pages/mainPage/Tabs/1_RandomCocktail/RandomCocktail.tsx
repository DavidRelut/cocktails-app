import React, { FC } from "react";
import { Button, Stack, Typography } from "@mui/material";
import CocktailCard from "../../../../reusable-ui/CocktailCard";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { selectCocktail } from "../../../../../redux/slices/cocktail/cocktailSlice";
import { fetchRandomCocktail } from "../../../../../redux/slices/cocktail/cocktailActions";
import { ICocktail } from "../../../../../redux/slices/cocktail/cocktailTypes";

const RandomCocktail: FC = () => {
  // STATE
  const { cocktail } = useAppSelector(selectCocktail);

  const dispatch = useAppDispatch();

  // STOCK DATA AND REFERENCE
  const cocktailData: ICocktail = cocktail?.[0];
  const ingredients: string[] = [
    cocktailData?.strIngredient1,
    cocktailData?.strIngredient2,
    cocktailData?.strIngredient3,
    cocktailData?.strIngredient4,
    cocktailData?.strIngredient5,
  ];

  // BEHAVIOR
  const handleClick = () => {
    dispatch(fetchRandomCocktail());
  };

  // UI
  return (
    <Stack direction={"column"} alignItems="center" spacing={4}>
      <Typography variant="body1">En panne d'inspiration ?</Typography>
      <Button variant={"outlined"} color="secondary" onClick={handleClick}>
        Trouve moi un cocktail
      </Button>
      {cocktailData && (
        <CocktailCard
          name={cocktailData?.strDrink}
          ingredients={ingredients}
          instructions={cocktailData?.strInstructions}
          image={cocktailData?.strDrinkThumb}
        />
      )}
    </Stack>
  );
};

export default RandomCocktail;
