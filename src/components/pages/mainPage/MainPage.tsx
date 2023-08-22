import { Stack, Tab, Tabs, Typography } from "@mui/material";
import { FC, useState } from "react";
// import FavoriteList from "./components/3_FavoriteList";

// import { selectCocktail } from "../../../redux/slices/cocktail/cocktailSlice";
// import { useAppSelector } from "../../../redux/hooks";
import RandomCocktail from "./Tabs/1_RandomCocktail/RandomCocktail";
import FindCocktail from "./Tabs/2_FindCocktail/FindCocktail";

const MainPage: FC = () => {
  // STATE
  const [tabValue, setTabValue] = useState<number>(0);

  // BEHAVIOR
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // UI
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

export default MainPage;
