import { Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { ITab, getTabSelected, tabsConfig } from "./helpers/tabsConfig.helper";
import { ETab } from "../../../enums/enums";

const MainPage: React.FC = () => {
  // STATE
  const [currentTabSelected, setCurrentTabSelected] = useState(ETab.INDEX);

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
          <Tab
            label={tab.label}
            value={tab.index}
            key={tab.index}
            sx={{ "&:focus": { outline: "none" } }}
          />
        ))}
      </Tabs>

      {tabSelected && <tabSelected.Content />}
    </Stack>
  );
};

export default MainPage;
