import React from "react";
import { Card, Stack, Typography } from "@mui/material";
import Text from "./Text";

interface ICocktailCardProps {
  name: string;
  ingredients: Array<string>;
  onToggle: () => void;
  instructions: string;
  toggleButtonText: string | null;
  image: string;
}

const CocktailCard: React.FC<ICocktailCardProps> = ({
  name,
  ingredients,
  onToggle,
  instructions,
  toggleButtonText,
  image,
}) => {
  return (
    <Card style={{ padding: "10px", maxWidth: "400px", textAlign: "center" }}>
      <Stack direction={"column"} alignItems="center" spacing={4}>
        <Stack alignItems="center" spacing={1}>
          <Typography variant="h5">{name}</Typography>

          <Typography variant="h5">Ingrédients:</Typography>
          {ingredients.map((ingredient) => (
            <Typography key={ingredient}>{ingredient}</Typography>
          ))}

          <Text
            title={"Instructions"}
            onToggle={onToggle}
            text={instructions}
            toggleButtonText={toggleButtonText}
          />
          <img src={image} style={{ width: 200, height: 200 }} />
        </Stack>
      </Stack>
    </Card>
  );
};

export default CocktailCard;
