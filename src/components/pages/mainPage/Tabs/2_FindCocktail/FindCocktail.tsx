import React, { useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
// import { Cocktail } from "../../redux/slices/cocktails/cocktailTypes";
// import CocktailCard from "../../reusable-ui/CocktailCard";
// import { useAppSelector } from "../../../redux/hooks";

const FindCocktail: React.FC = () => {
  // STATE
  const [ingredients, setIngredients] = useState(null);

  // UI
  return (
    <Stack direction={"column"} alignItems="center" spacing={4}>
      <Typography variant="body1">
        Entrez les informations pour trouver un cocktail selon vos goûts
      </Typography>
      <Button variant={"outlined"} color="secondary">
        Valider
      </Button>

      {/* List of ingredients */}
      <Stack direction={"row"} alignItems="flex-start" spacing={2}>
        <Card style={{ padding: "10px", maxHeight: "300px", overflow: "auto" }}>
          <Typography variant="h6">Sélectionnez un ingrédient</Typography>
          <FormGroup>
            {ingredients &&
              ingredients.map((ingredient) => {
                return (
                  <FormControlLabel
                    key={ingredient}
                    control={<Checkbox />}
                    label={ingredient}
                    checked={undefined}
                    onClick={() => {
                      /* TODO: select ingredient */
                    }}
                  />
                );
              })}
          </FormGroup>
        </Card>
      </Stack>

      {/* List of cocktails */}
      <Stack direction={"row"} spacing={2}>
        {/* TODO: Show list of cocktail containing selected ingredient */}
        {/* {cocktail && <CocktailCard cocktail={cocktailData} />} */}
      </Stack>
    </Stack>
  );
};

export default FindCocktail;
