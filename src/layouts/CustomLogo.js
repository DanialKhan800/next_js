import React from "react";
import { Box, Typography } from "@mui/material";
import { Logo } from "../components";

export default function CustomLogo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Logo />
      {/* <Typography variant="h4">thestage.io</Typography> */}
    </Box>
  );
}
