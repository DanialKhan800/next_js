import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Input(theme) {
  return {
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": { color: theme.palette.text.disabled },
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.grey[500_8],
          color: theme.palette.common.white,
          "&:hover": {
            backgroundColor: theme.palette.brandcolor.primary,
          },
          "&.Mui-error": {
            backgroundColor: alpha(theme.palette.error.main, 0.08),
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.brandcolor.primary,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        input: {
          ...theme.typography.body2,
        },
        underline: {
          "&:before": {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[500_32],
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
  };
}
