"use strict";
exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 1988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ contrastText),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createGradient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6706);

// utils

// ----------------------------------------------------------------------
// SETUP COLORS
const contrastText = {
    white: "#FFFFFF",
    black: "#0B1F3A"
};
const BRAND_COLOR = {
    primary: "#22277A",
    secondary: "#7953A9"
};
const BRAND_PURPLE = {
    primary: "#AB66FE",
    light: "#848BE3"
};
const BRAND_GREEN = {
    primary: "#16EF96",
    dark: "#48C1BB",
    darker: "#64A8CD"
};
const PRIMARY = {
    lighter: "#FEE9D1",
    light: "#FDAB76",
    main: "#FA541C",
    dark: "#B3200E",
    darker: "#770508",
    contrastText: contrastText.white
};
const SECONDARY = {
    lighter: "#D2FCF4",
    light: "#77F0ED",
    main: "#22B8CF",
    dark: "#116E95",
    darker: "#063963",
    contrastText: contrastText.white
};
const INFO = {
    lighter: "#CBFEFC",
    light: "#63E8F9",
    main: "#00B1ED",
    dark: "#0067AA",
    darker: "#003471",
    contrastText: contrastText.white
};
const SUCCESS = {
    lighter: "#CDFCD1",
    light: "#69F290",
    main: "#0CD66E",
    dark: "#069A6B",
    darker: "#02665B",
    contrastText: contrastText.black
};
const WARNING = {
    lighter: "#FFF8D1",
    light: "#FFE475",
    main: "#FFC81A",
    dark: "#B7860D",
    darker: "#7A5204",
    contrastText: contrastText.black
};
const ERROR = {
    lighter: "#FFE7D9",
    light: "#FFA48D",
    main: "#FF4842",
    dark: "#B72136",
    darker: "#7A0C2E",
    contrastText: contrastText.white
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
    5008: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.08),
    50012: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.12),
    50016: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.16),
    50024: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.24),
    50032: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.32),
    50048: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.48),
    50056: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.56),
    50080: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.8)
};
const GRADIENTS = {
    primary: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* .createGradient */ .F)(PRIMARY.light, PRIMARY.main),
    secondary: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* .createGradient */ .F)(SECONDARY.light, SECONDARY.main),
    buttongradient: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* .createCustomGradient */ .M)("123.3deg", BRAND_PURPLE.primary, "11.32%", BRAND_GREEN.primary, "85.18%"),
    backgroundgradient: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* .createCustomGradient */ .M)("119.44deg", BRAND_PURPLE.primary, "11.15%", BRAND_GREEN.dark, "66.67%"),
    nftbackgroundgradient: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* .createCustomGradient */ .M)("106.09deg", BRAND_PURPLE.primary, "14.55%", BRAND_GREEN.dark, "78.45%"),
    nft2backgroundgradient: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* .createCustomGradient */ .M)("95.4deg", BRAND_PURPLE.primary, "17.13%", BRAND_GREEN.dark, "90.49%"),
    darkgradient: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* .createCustomGradient */ .M)("100.95deg", BRAND_COLOR.primary, "11.97%", BRAND_PURPLE.primary, "72.19%"),
    darkgradient: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* .createCustomGradient */ .M)("91.43deg", BRAND_PURPLE.primary, "3.16%", BRAND_GREEN.primary, "104.27%"),
    info: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* .createGradient */ .F)(INFO.light, INFO.main),
    success: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* .createGradient */ .F)(SUCCESS.light, SUCCESS.main),
    warning: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* .createGradient */ .F)(WARNING.light, WARNING.main),
    error: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* .createGradient */ .F)(ERROR.light, ERROR.main)
};
const COMMON = {
    common: {
        black: "#000",
        white: "#fff"
    },
    primary: {
        ...PRIMARY,
        contrastText: "#fff"
    },
    secondary: {
        ...SECONDARY,
        contrastText: "#fff"
    },
    brandpurple: {
        ...BRAND_PURPLE,
        contrastText: "#fff"
    },
    brandgreen: {
        ...BRAND_GREEN,
        contrastText: "#fff"
    },
    brandcolor: {
        ...BRAND_COLOR,
        contrastText: "#fff"
    },
    info: {
        ...INFO,
        contrastText: "#fff"
    },
    success: {
        ...SUCCESS,
        contrastText: GREY[800]
    },
    warning: {
        ...WARNING,
        contrastText: GREY[800]
    },
    error: {
        ...ERROR,
        contrastText: "#fff"
    },
    grey: GREY,
    gradients: GRADIENTS,
    divider: GREY[50024],
    action: {
        hover: GREY[5008],
        selected: GREY[50012],
        disabled: GREY[50080],
        disabledBackground: GREY[50024],
        focus: GREY[50024],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48
    }
};
const palette = {
    light: {
        ...COMMON,
        mode: "light",
        text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500]
        },
        background: {
            paper: "#fff",
            default: "#fff",
            neutral: GREY[100]
        },
        action: {
            active: GREY[600],
            ...COMMON.action
        }
    },
    dark: {
        ...COMMON,
        mode: "dark",
        text: {
            primary: "#fff",
            secondary: GREY[500],
            disabled: GREY[600]
        },
        background: {
            paper: GREY[800],
            default: GREY[900],
            neutral: GREY[50012]
        },
        action: {
            active: GREY[500],
            ...COMMON.action
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (palette);


/***/ }),

/***/ 6706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ createGradient),
/* harmony export */   "M": () => (/* binding */ createCustomGradient)
/* harmony export */ });
// ----------------------------------------------------------------------
function createGradient(color1, color2) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}
function createCustomGradient(degree, color1, colorOnePercentage, color2, colorTwoPercentage) {
    return `linear-gradient(${degree}, ${color1} ${colorOnePercentage}, ${color2} ${colorTwoPercentage})`;
}


/***/ })

};
;