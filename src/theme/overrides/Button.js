import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Button(theme) {
  const isLight = theme.palette.mode === "light";

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: isLight ? theme.palette.common.white : theme.palette.grey[800],
          background: theme.palette.gradients.buttongradient,
          "&:hover": {
            backgroundColor: isLight
              ? theme.palette.grey[700]
              : theme.palette.grey[400],
          },
        },
        outlinedInherit: {
          borderColor: theme.palette.brandcolor.primary,
          border: "2px solid",
          color:
            theme.palette.mode === "light"
              ? theme.palette.brandcolor.primary
              : "#fff",
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "light"
                ? theme.palette.brandpurple.light
                : "#fff",
            borderColor: theme.palette.brandpurple.light,
            color:
              theme.palette.mode === "light"
                ? "#fff"
                : theme.palette.brandpurple.light,
          },
        },
        filledInherit: {
          backgroundColor: theme.palette.brandpurple.light,
          color: theme.palette.brandpurple.light,
          "&:hover": {
            borderColor: theme.palette.brandpurple.light,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
