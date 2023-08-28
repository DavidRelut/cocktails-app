import { Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { getTabSelected, tabsConfig } from "../../../utils/tabsConfig";
import { ETabs } from "../../../enums/enums";
import { ITab } from "../../../interfaces/interfaces";

const MainPage: FC = () => {
  // STATE
  const [currentTabSelected, setCurrentTabSelected] = useState(
    ETabs.DEFAULT_TAB_INDEX
  );

  // BEHAVIOR
  const selectedTab = (_event: React.SyntheticEvent, tabSelected: number) => {
    setCurrentTabSelected(tabSelected);
  };

  const tabs: ITab[] = tabsConfig();
  const tabSelected: ITab = getTabSelected(tabs, currentTabSelected);

  // UI
  return (
    <Stack direction="column" spacing={2}>
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
