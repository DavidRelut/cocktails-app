import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import CocktailCard from "../../../../reusable-ui/CocktailCard";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { selectCocktail } from "../../../../../redux/slices/cocktail/cocktailSlice";
import { fetchRandomCocktail } from "../../../../../redux/slices/cocktail/cocktailActions";
import { ICocktail } from "../../../../../redux/slices/cocktail/cocktailTypes";
import { EBoolean } from "../../../../../enums/boolean.enum";
import { ECocktail } from "../../../../../enums/cocktail.enum";
import { getTruncatedTextAndToggleButtonText } from "../../../../../utils/truncated.util";
import ReusableButton from "../../../../reusable-ui/ReusableButton";

const RandomCocktail: React.FC = () => {
  // STATE
  const { cocktail } = useAppSelector(selectCocktail);
  const [expandedState, setExpandedState] = useState(EBoolean.isToggledText);

  const dispatch = useAppDispatch();

  // STOCK DATA AND REFERENCE
  const cocktailData: ICocktail = cocktail?.[ECocktail.INDEX];

  const { showText, toggleButtonText } = getTruncatedTextAndToggleButtonText(
    expandedState,
    cocktailData?.instructions
  );

  // BEHAVIOR
  const handleClick = () => {
    dispatch(fetchRandomCocktail());
  };

  const handleToggle = () => {
    setExpandedState(!expandedState);
  };

  // JSX
  return (
    <Stack direction={"column"} alignItems="center" spacing={4}>
      <Typography variant="body1">En panne d'inspiration ?</Typography>

      <ReusableButton label={"Trouve moi un cocktail"} onClick={handleClick} />

      {cocktailData && (
        <CocktailCard
          name={cocktailData?.name}
          ingredients={cocktailData?.ingredients}
          onToggle={handleToggle}
          instructions={showText}
          toggleButtonText={toggleButtonText}
          image={cocktailData?.thumb}
        />
      )}
    </Stack>
  );
};

export default RandomCocktail;
