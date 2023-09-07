import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import CocktailCard from "../../../../reusable-ui/CocktailCard";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { selectCocktail } from "../../../../../redux/slices/cocktail/cocktailSlice";
import { fetchRandomCocktail } from "../../../../../redux/slices/cocktail/cocktailActions";
import { ICocktail } from "../../../../../redux/slices/cocktail/cocktailTypes";
import { ECocktail } from "../../../../../enums/enums";

const RandomCocktail: React.FC = () => {
  // STATE
  const { cocktail } = useAppSelector(selectCocktail);

  const dispatch = useAppDispatch();

  // STOCK DATA AND REFERENCE
  const cocktailData: ICocktail = cocktail?.[ECocktail.INDEX];

  // BEHAVIOR
  const handleClick = () => {
    dispatch(fetchRandomCocktail());
  };

  // JSX
  return (
    <Stack direction={"column"} alignItems="center" spacing={4}>
      <Typography variant="body1">En panne d'inspiration ?</Typography>
      <Button variant={"outlined"} color="secondary" onClick={handleClick}>
        Trouve moi un cocktail
      </Button>
      {cocktailData && (
        <CocktailCard
          name={cocktailData?.name}
          ingredients={cocktailData?.ingredients}
          instructions={cocktailData?.instructions}
          image={cocktailData?.thumb}
        />
      )}
    </Stack>
  );
};

export default RandomCocktail;
