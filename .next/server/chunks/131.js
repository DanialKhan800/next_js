"use strict";
exports.id = 131;
exports.ids = [131];
exports.modules = {

/***/ 8296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ ToolbarStyle),
/* harmony export */   "X": () => (/* binding */ ToolbarShadowStyle)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6034);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3726);
// @mui


// utils

// config

// ----------------------------------------------------------------------
const ToolbarStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
    shouldForwardProp: (prop)=>prop !== "transparent" && prop !== "scrolling"
})(({ transparent , scrolling , theme  })=>({
        height: _config__WEBPACK_IMPORTED_MODULE_3__/* .HEADER_MOBILE_HEIGHT */ .w_,
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        // backgroundColor: theme.palette.brandcolor.primary,
        transition: theme.transitions.create([
            "height",
            "background-color"
        ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.short
        }),
        [theme.breakpoints.up("md")]: {
            height: _config__WEBPACK_IMPORTED_MODULE_3__/* .HEADER_DESKTOP_HEIGHT */ .zj
        },
        ...transparent && {
            color: theme.palette.common.white,
            backgroundColor: "transparent"
        },
        ...scrolling && {
            ...(0,_utils_cssStyles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(theme).bgBlur(),
            [theme.breakpoints.up("md")]: {
                height: _config__WEBPACK_IMPORTED_MODULE_3__/* .HEADER_DESKTOP_HEIGHT */ .zj - 20
            }
        }
    })
);
const ToolbarShadowStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme  })=>({
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        margin: "auto",
        borderRadius: "50%",
        position: "absolute",
        width: `calc(100% - 48px)`,
        boxShadow: `-23px 16px 56px -8px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.mode === "light" ? theme.palette.grey[500] : theme.palette.common.black, 1)}`
    })
);


/***/ }),

/***/ 3189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ----------------------------------------------------------------------
const Routes = {
    // Common
    maintenance: "/maintenance",
    comingsoon: "/coming-soon",
    page404: "/404",
    page500: "/500",
    profile: "/profile",
    following: "following",
    activity: "/activity",
    howitworks: "how-it-works",
    tokenomics: "tokenomics",
    marketplace: "market-place",
    faqs: "faqs",
    nfts: "nfts",
    aboutus: "about-us"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);


/***/ })

};
;