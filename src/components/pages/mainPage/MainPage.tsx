import { Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  getTabSelected,
  tabsConfig,
} from "../../../utils/config/tabsConfig.util";
import { ETabs } from "../../../enums/enums";
import { ITab } from "../../../interfaces/interfaces";

const MainPage: React.FC = () => {
  // STATE
  const [currentTabSelected, setCurrentTabSelected] = useState(
    ETabs.DEFAULT_TAB_INDEX
  );

  // STOCK DATA AND REFERENCE
  const tabs: ITab[] = tabsConfig;
  const tabSelected: ITab = getTabSelected(tabs, currentTabSelected);

  // BEHAVIOR
  const selectedTab = (_event: React.SyntheticEvent, tabSelected: number) => {
    setCurrentTabSelected(tabSelected);
  };

  // JSX
  return (
    <Stack direction="column" spacing={2} color={"white"}>
      <Typography variant="h4">
        Bienvenue dans la fabrique de Cocktails!
      </Typography>

      <Tabs value={currentTabSelected} onChange={selectedTab} centered>
        {tabs.map((tab) => (
          <Tab label={tab.label} value={tab.index} key={tab.index} />
        ))}
      </Tabs>

      {tabSelected && <tabSelected.Content />}
    </Stack>
  );
};

export default MainPage;
