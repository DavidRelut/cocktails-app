import React, { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import ReusableButton from "../../../../reusable-ui/ReusableButton";
// import CocktailCard from "../../../../reusable-ui/CocktailCard";
// import { useAppSelector } from "../../redux/hooks";
// import { Cocktails } from "../../redux/slices/cocktails/cocktailTypes";

const FavoriteList: React.FC = () => {
  const showIngredientList = (): void => {
    // TODO: Fill the function
  };

  return (
    <Stack direction={"column"} alignItems="center" spacing={4}>
      <Typography variant="h5">List des cocktails choisis</Typography>
      <Stack direction={"column"} spacing={2}>
        <Stack direction={"row"} spacing={2}>
          {/* TODO: Show list of favorite cocktails */}
        </Stack>

        <ReusableButton
          label={"Obtenir la liste des ingrédients à acheter"}
          onClick={showIngredientList}
        />

        <Stack direction={"column"}>
          {/* TODO: Show list of ingredients */}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FavoriteList;
