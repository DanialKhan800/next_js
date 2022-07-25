import PropTypes from "prop-types";
import { memo } from "react";
// next
import NextLink from "next/link";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Image } from ".";

// ----------------------------------------------------------------------

Logo.propTypes = {
  isSimple: PropTypes.bool,
  onDark: PropTypes.bool,
  sx: PropTypes.object,
};

function Logo({ onDark = false, isSimple = false, sx }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  const PRIMARY_MAIN = theme.palette.primary.main;
  const LIGHT_COLOR = theme.palette.common.white;
  const DARK_COLOR = theme.palette.grey[800];

  return (
    <NextLink href="/">
      <Box
        sx={{
          width: 164,
          lineHeight: 0,
          cursor: "pointer",
          display: "inline-flex",
          ...sx,
        }}
      >
        {isSimple ? (
          <Image
            src="/assets/images/svgs/hadarologo.svg"
            alt="hadarologo"
            sx={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        ) : (
          <Image
            src="/assets/images/svgs/hadarologo.svg"
            alt="logo"
            sx={{ maxWidth: "200px", maxHeight: "200px" }}
          />
        )}
      </Box>
    </NextLink>
  );
}

export default memo(Logo);
