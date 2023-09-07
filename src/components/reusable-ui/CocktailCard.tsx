import React from "react";
import { Button, Card, Stack, Typography } from "@mui/material";

interface ICocktailCardProps {
  name: string;
  ingredients: Array<string>;
  instructions: string;
  image: string;
}

const CocktailCard: React.FC<ICocktailCardProps> = ({
  name,
  ingredients,
  instructions,
  image,
}) => {
  return (
    <Card style={{ padding: "10px", maxWidth: "400px", textAlign: "center" }}>
      <Stack direction={"column"} alignItems="center" spacing={4}>
        <Stack alignItems="center" spacing={1}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h5">Ingrédients:</Typography>
          {ingredients.map((ingredient, index) => (
            <Typography key={index}>{ingredient}</Typography>
          ))}
          <Typography variant="h5">Instructions:</Typography>
          {instructions}
          <img src={image} style={{ width: 200, height: 200 }} />
        </Stack>
      </Stack>
    </Card>
  );
};

export default CocktailCard;
