import { Button, SxProps, Theme } from "@mui/material";
import React from "react";

interface ReusableButtonProps {
  label: string | null;
  onClick: () => void;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  sx?: SxProps<Theme>;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({
  label,
  onClick,
  variant = "outlined",
  color = "secondary",
  size = "medium",
  sx = { "&:focus": { outline: "none" } },
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      size={size}
      sx={sx}
    >
      {label}
    </Button>
  );
};

export default ReusableButton;
