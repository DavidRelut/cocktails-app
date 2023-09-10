import { CardContent, Typography } from "@mui/material";
import React from "react";
import ReusableButton from "./ReusableButton";

interface TextProps {
  title: string | null;
  text: string;
  onToggle: () => void;
  toggleButtonText: string | null; // Mise à jour ici si le toggleButtonText peut être null
}

const Text: React.FC<TextProps> = ({
  title,
  text,
  onToggle,
  toggleButtonText,
}) => {
  const textStyle = {
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "black",
    textAlign: "center",
  };

  const toggleButtonTextStyle = {
    color: "#dab785",
    display: toggleButtonText === null ? "none" : "initial",
    "&:focus": { outline: "none" },
  };

  return (
    <CardContent>
      {title && <Typography variant="h5">{title}:</Typography>}

      <Typography variant="body2" color="text.secondary" sx={textStyle}>
        {text}
        <ReusableButton
          label={toggleButtonText}
          variant="text"
          onClick={onToggle}
          size="small"
          sx={toggleButtonTextStyle}
        />
      </Typography>
    </CardContent>
  );
};

export default Text;
