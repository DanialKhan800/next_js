"use strict";
exports.id = 540;
exports.ids = [540];
exports.modules = {

/***/ 4778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LanguagePopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_content_delivery_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8693);
/* harmony import */ var _iconify_icons_carbon_content_delivery_network__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_content_delivery_network__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4338);
/* harmony import */ var _components_animate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_5__, _components_animate__WEBPACK_IMPORTED_MODULE_6__]);
([_components__WEBPACK_IMPORTED_MODULE_5__, _components_animate__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



// icons

// @mui

// components


// ----------------------------------------------------------------------
const LANGS = [
    {
        label: 'English',
        value: 'en',
        icon: 'https://zone-assets-api.vercel.app/assets/icons/flags/ic_flag_en.svg'
    },
    {
        label: 'German',
        value: 'de',
        icon: 'https://zone-assets-api.vercel.app/assets/icons/flags/ic_flag_de.svg'
    },
    {
        label: 'French',
        value: 'fr',
        icon: 'https://zone-assets-api.vercel.app/assets/icons/flags/ic_flag_fr.svg'
    }, 
];
// ----------------------------------------------------------------------
LanguagePopover.propTypes = {
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function LanguagePopover({ sx  }) {
    const { 0: currentLang , 1: setCurrentLang  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('en');
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const handleOpen = (event)=>{
        setOpen(event.currentTarget);
    };
    const handleClose = ()=>{
        setOpen(null);
    };
    const handleChangeLang = (newLang)=>{
        handleClose();
        setCurrentLang(newLang);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_animate__WEBPACK_IMPORTED_MODULE_6__/* .IconButtonAnimate */ .w_, {
                color: "inherit",
                onClick: handleOpen,
                sx: sx,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Iconify */ .Ir, {
                    icon: (_iconify_icons_carbon_content_delivery_network__WEBPACK_IMPORTED_MODULE_3___default()),
                    sx: {
                        width: 20,
                        height: 20
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Popover, {
                open: Boolean(open),
                onClose: handleClose,
                anchorEl: open,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                PaperProps: {
                    sx: {
                        px: 1,
                        width: 220
                    }
                },
                children: LANGS.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                        selected: option.value === currentLang,
                        onClick: ()=>handleChangeLang(option.value)
                        ,
                        sx: {
                            my: 1
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                component: "img",
                                alt: option.label,
                                src: option.icon,
                                sx: {
                                    borderRadius: '50%',
                                    width: 28,
                                    height: 28,
                                    objectFit: 'cover',
                                    mr: 1
                                }
                            }),
                            option.label
                        ]
                    }, option.value)
                )
            })
        ]
    }));
};

});

/***/ }),

/***/ 5540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderSimple)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3726);
/* harmony import */ var _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7627);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3189);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4338);
/* harmony import */ var _LanguagePopover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4778);
/* harmony import */ var _HeaderToolbarStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8296);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LanguagePopover__WEBPACK_IMPORTED_MODULE_8__, _components__WEBPACK_IMPORTED_MODULE_7__]);
([_LanguagePopover__WEBPACK_IMPORTED_MODULE_8__, _components__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


// next

// @mui

// config

// hooks

// routes

// components

//


// ----------------------------------------------------------------------
HeaderSimple.propTypes = {
    transparent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function HeaderSimple({ transparent  }) {
    const isScrolling = (0,_hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_config__WEBPACK_IMPORTED_MODULE_4__/* .HEADER_DESKTOP_HEIGHT */ .zj);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AppBar, {
        sx: {
            boxShadow: 0,
            bgcolor: 'transparent'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderToolbarStyle__WEBPACK_IMPORTED_MODULE_9__/* .ToolbarStyle */ .t, {
                disableGutters: true,
                transparent: transparent,
                scrolling: isScrolling,
                sx: {
                    px: 2
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                    maxWidth: false,
                    sx: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .Logo */ .TR, {
                            onDark: transparent && !isScrolling
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                            direction: "row",
                            alignItems: "center",
                            divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {
                                orientation: "vertical",
                                sx: {
                                    height: 24
                                }
                            }),
                            spacing: 2.5,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LanguagePopover__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    sx: {
                                        ...isScrolling && {
                                            color: 'text.primary'
                                        }
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: _routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].support */ .Z.support,
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                        color: "inherit",
                                        variant: "body2",
                                        sx: {
                                            fontWeight: 'fontWeightMedium',
                                            ...isScrolling && {
                                                color: 'text.primary'
                                            }
                                        },
                                        children: "Support"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            isScrolling && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderToolbarStyle__WEBPACK_IMPORTED_MODULE_9__/* .ToolbarShadowStyle */ .X, {
            })
        ]
    }));
};

});

/***/ })

};
;