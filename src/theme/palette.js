import { alpha } from "@mui/material/styles";
// utils
import { createGradient, createCustomGradient } from "../utils/createGradient";
// ----------------------------------------------------------------------
// SETUP COLORS
export const contrastText = {
  white: "#FFFFFF",
  black: "#0B1F3A",
};
const BRAND_COLOR = {
  primary: "#22277A",
  secondary: "#7953A9",
};
const BRAND_PURPLE = {
  primary: "#AB66FE",
  light: "#848BE3",
};
const BRAND_GREEN = {
  primary: "#16EF96",
  dark: "#48C1BB",
  darker: "#64A8CD",
};
const PRIMARY = {
  lighter: "#FEE9D1",
  light: "#FDAB76",
  main: "#FA541C",
  dark: "#B3200E",
  darker: "#770508",
  contrastText: contrastText.white,
};
const SECONDARY = {
  lighter: "#D2FCF4",
  light: "#77F0ED",
  main: "#22B8CF",
  dark: "#116E95",
  darker: "#063963",
  contrastText: contrastText.white,
};
const INFO = {
  lighter: "#CBFEFC",
  light: "#63E8F9",
  main: "#00B1ED",
  dark: "#0067AA",
  darker: "#003471",
  contrastText: contrastText.white,
};
const SUCCESS = {
  lighter: "#CDFCD1",
  light: "#69F290",
  main: "#0CD66E",
  dark: "#069A6B",
  darker: "#02665B",
  contrastText: contrastText.black,
};
const WARNING = {
  lighter: "#FFF8D1",
  light: "#FFE475",
  main: "#FFC81A",
  dark: "#B7860D",
  darker: "#7A5204",
  contrastText: contrastText.black,
};
const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: contrastText.white,
};
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};
const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  secondary: createGradient(SECONDARY.light, SECONDARY.main),
  buttongradient: createCustomGradient(
    "123.3deg",
    BRAND_PURPLE.primary,
    "11.32%",
    BRAND_GREEN.primary,
    "85.18%"
  ),
  backgroundgradient: createCustomGradient(
    "119.44deg",
    BRAND_PURPLE.primary,
    "11.15%",
    BRAND_GREEN.dark,
    "66.67%"
  ),
  nftbackgroundgradient: createCustomGradient(
    "106.09deg",
    BRAND_PURPLE.primary,
    "14.55%",
    BRAND_GREEN.dark,
    "78.45%"
  ),
  nft2backgroundgradient: createCustomGradient(
    "95.4deg",
    BRAND_PURPLE.primary,
    "17.13%",
    BRAND_GREEN.dark,
    "90.49%"
  ),
  darkgradient: createCustomGradient(
    "100.95deg",
    BRAND_COLOR.primary,
    "11.97%",
    BRAND_PURPLE.primary,
    "72.19%"
  ),
  darkgradient: createCustomGradient(
    "91.43deg",
    BRAND_PURPLE.primary,
    "3.16%",
    BRAND_GREEN.primary,
    "104.27%"
  ),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};
const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  brandpurple: { ...BRAND_PURPLE, contrastText: "#fff" },
  brandgreen: { ...BRAND_GREEN, contrastText: "#fff" },
  brandcolor: { ...BRAND_COLOR, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: "#fff" },
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_12],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};
const palette = {
  light: {
    ...COMMON,
    mode: "light",
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: "#fff", default: "#fff", neutral: GREY[100] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: "dark",
    text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_12] },
    action: { active: GREY[500], ...COMMON.action },
  },
};
export default palette;
