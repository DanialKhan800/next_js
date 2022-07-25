import { Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

function CardHeading({ text, children }) {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h1" sx={{ color: theme.palette.brandcolor.primary }}>
        {text}
        {children}
      </Typography>
    </Box>
  );
}

export default CardHeading;
