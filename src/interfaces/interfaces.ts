import React from "react";

export interface ITab {
  index: number;
  label: string;
  Content: React.FC;
}
