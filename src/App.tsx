import "./App.css";
import { Stack, Tab, Tabs, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import FavoriteList from "./components/3_FavoriteList";
import RandomCocktail from "./components/1_RandomCocktail/RandomCocktail";
import FindCocktail from "./components/2_FindCocktail";
import { useAppSelector } from "./redux/hooks";

const App: FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [ingredients, setIngredients] = useState([]);

  const cocktail = useAppSelector((state) => state.cocktail);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h4">
        Bienvenue dans la fabrique de Cocktails!
      </Typography>
      <Tabs value={tabValue} onChange={handleChange} centered>
        <Tab label="Cocktail au hasard" value={0} />
        <Tab label="Trouver un cocktail" value={1} />
        <Tab label="Voir la liste" value={2} />
      </Tabs>
      {tabValue === 0 ? (
        <RandomCocktail />
      ) : tabValue === 1 ? (
        <FindCocktail />
      ) : (
        <>TODO: My list of favorite cocktails</>
      )}
    </Stack>
  );
};

export default App;
