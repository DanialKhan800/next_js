"use strict";
exports.id = 338;
exports.ids = [338];
exports.modules = {

/***/ 3100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);

// @mui


// ----------------------------------------------------------------------
const ButtonStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
        color: "inherit",
        ...props
    })
)(({ theme  })=>({
        flexShrink: 0,
        color: theme.palette.common.white,
        padding: '5px 12px',
        border: `solid 1px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.black, 0.24)}`,
        background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
        '& .MuiButton-startIcon': {
            marginLeft: 0
        }
    })
);
// ----------------------------------------------------------------------
function AppStoreButton({ ...other }) {
    return(/*#__PURE__*/ _jsxs(Stack, {
        direction: "row",
        spacing: 2,
        ...other,
        children: [
            /*#__PURE__*/ _jsx(ButtonStyle, {
                startIcon: /*#__PURE__*/ _jsx(Box, {
                    component: "img",
                    src: "https://zone-assets-api.vercel.app/assets/icons/app-store/ic_app_store.svg",
                    sx: {
                        width: 28,
                        height: 28
                    }
                }),
                children: /*#__PURE__*/ _jsxs(Stack, {
                    alignItems: "flex-start",
                    children: [
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "caption",
                            sx: {
                                opacity: 0.72
                            },
                            children: "Download on the"
                        }),
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "h6",
                            sx: {
                                mt: -0.5
                            },
                            children: "Apple Store"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(ButtonStyle, {
                color: "inherit",
                startIcon: /*#__PURE__*/ _jsx(Box, {
                    component: "img",
                    src: "https://zone-assets-api.vercel.app/assets/icons/app-store/ic_google_play.svg",
                    sx: {
                        width: 28,
                        height: 28
                    }
                }),
                children: /*#__PURE__*/ _jsxs(Stack, {
                    alignItems: "flex-start",
                    children: [
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "caption",
                            sx: {
                                opacity: 0.72
                            },
                            children: "Download from"
                        }),
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "h6",
                            sx: {
                                mt: -0.5
                            },
                            children: "Google Play"
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 2122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BgOverlay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6034);


// @mui


// utils

// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    shouldForwardProp: (prop)=>prop !== 'direction' && prop !== 'startColor' && prop !== 'endColor'
})(({ direction , startColor , endColor , theme  })=>({
        top: 0,
        left: 0,
        zIndex: 8,
        width: '100%',
        height: '100%',
        position: 'absolute',
        ...(0,_utils_cssStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(theme).bgGradient({
            direction,
            startColor,
            endColor
        })
    })
);
// ----------------------------------------------------------------------
BgOverlay.propTypes = {
    direction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    endColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    startColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
function BgOverlay({ direction , startColor , endColor , ...other }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.NoSsr, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
            direction: direction,
            startColor: startColor,
            endColor: endColor,
            ...other
        })
    }));
};


/***/ }),

/***/ 5814:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2893);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_5__]);
_Iconify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


// icons

// next

// @mui

//

// ----------------------------------------------------------------------
Breadcrumbs.propTypes = {
    activeLast: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    links: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
    onDark: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function Breadcrumbs({ links , activeLast =false , onDark =false , ...other }) {
    const currentLink = links[links.length - 1].name;
    const listDefault = links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkItem, {
            link: link,
            onDark: onDark
        }, link.name)
    );
    const listActiveLast = links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: link.name !== currentLink ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkItem, {
                link: link,
                onDark: onDark
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                noWrap: true,
                variant: "body3",
                sx: {
                    color: 'text.disabled',
                    ...onDark && {
                        opacity: 0.48,
                        color: 'common.white'
                    }
                },
                children: currentLink || ''
            })
        }, link.name)
    );
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Breadcrumbs, {
        separator: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            icon: (_iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_2___default()),
            sx: {
                width: 16,
                height: 16,
                ...onDark && {
                    opacity: 0.48,
                    color: 'common.white'
                }
            }
        }),
        ...other,
        children: activeLast ? listDefault : listActiveLast
    }));
};
// ----------------------------------------------------------------------
LinkItem.propTypes = {
    link: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        href: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
        name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    }),
    onDark: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function LinkItem({ link , onDark  }) {
    const { href ='' , name , icon  } = link;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Link, {
            variant: "body3",
            sx: {
                display: 'flex',
                alignItems: 'center',
                color: 'text.primary',
                '& > div': {
                    display: 'inherit'
                },
                ...onDark && {
                    color: 'common.white'
                }
            },
            children: [
                icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                    sx: {
                        mr: 1,
                        '& svg': {
                            width: 20,
                            height: 20
                        }
                    },
                    children: icon
                }),
                name
            ]
        })
    }, name));
}

});

/***/ }),

/***/ 7866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9785);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);




// @mui

// ----------------------------------------------------------------------
CountUpNumber.propTypes = {
    threshold: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function CountUpNumber({ threshold =1 , sx , ...other }) {
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({
        threshold,
        triggerOnce: true
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        component: "span",
        ref: ref,
        sx: sx,
        children: inView && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_2___default()), {
            duration: 1,
            ...other
        })
    }));
};


/***/ }),

/***/ 7935:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_rotate_360__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3793);
/* harmony import */ var _iconify_icons_carbon_rotate_360__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_rotate_360__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5907);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_7__]);
_Iconify__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


// icon

// next

// @mui


//


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)('div')(()=>({
        width: '100%',
        height: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    })
);
// ----------------------------------------------------------------------
ErrorScreen.propTypes = {
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
function ErrorScreen({ title , description , ...other }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleReload = ()=>{
        router.reload();
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        ...other,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
            spacing: 5,
            alignItems: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    alt: "500",
                    src: "https://zone-assets-api.vercel.app/assets/illustrations/illustration_500.svg",
                    sx: {
                        maxWidth: 240
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                            variant: "h3",
                            children: [
                                " ",
                                title || 'Failed To Load '
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                            sx: {
                                color: 'text.secondary'
                            },
                            children: description || 'Unable to download data please try again'
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                    variant: "outlined",
                    size: "large",
                    color: "inherit",
                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        icon: (_iconify_icons_carbon_rotate_360__WEBPACK_IMPORTED_MODULE_2___default()),
                        sx: {
                            width: 20,
                            height: 20
                        }
                    }),
                    onClick: handleReload,
                    children: "Reload"
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 2591:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(967);
/* harmony import */ var _iconify_icons_carbon_favorite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_favorite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_favorite_filled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1779);
/* harmony import */ var _iconify_icons_carbon_favorite_filled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_favorite_filled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_4__]);
_Iconify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

// icons


// @mui

//

// ----------------------------------------------------------------------
function FavoriteButton({ ...other }) {
    return(/*#__PURE__*/ _jsx(Checkbox, {
        color: "error",
        icon: /*#__PURE__*/ _jsx(Iconify, {
            icon: favoriteIcon,
            sx: {
                width: 20,
                height: 20
            }
        }),
        checkedIcon: /*#__PURE__*/ _jsx(Iconify, {
            icon: favoriteFilled,
            sx: {
                width: 20,
                height: 20
            }
        }),
        ...other
    }));
};

});

/***/ }),

/***/ 2554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Iconify)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


// icons

// @mui

// ----------------------------------------------------------------------
Iconify.propTypes = {
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    ]),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function Iconify({ icon , sx , ...other }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        component: _iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon,
        icon: icon,
        sx: {
            ...sx
        },
        ...other
    }));
};

});

/***/ }),

/***/ 5907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9252);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);



// @mui

// ----------------------------------------------------------------------
Image.propTypes = {
    disabledEffect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    effect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    ratio: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        '4/3',
        '3/4',
        '6/4',
        '4/6',
        '16/9',
        '9/16',
        '21/9',
        '9/21',
        '1/1'
    ]),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function Image({ ratio , disabledEffect =false , effect ='blur' , sx , ...other }) {
    if (ratio) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            component: "span",
            sx: {
                width: 1,
                lineHeight: 0,
                display: 'block',
                overflow: 'hidden',
                position: 'relative',
                pt: getRatio(ratio),
                '& .wrapper': {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    lineHeight: 0,
                    position: 'absolute',
                    backgroundSize: 'cover !important'
                },
                ...sx
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                component: react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage,
                wrapperClassName: "wrapper",
                effect: disabledEffect ? undefined : effect,
                placeholderSrc: "https://zone-assets-api.vercel.app/assets/img_placeholder.svg",
                sx: {
                    width: 1,
                    height: 1,
                    objectFit: 'cover'
                },
                ...other
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        component: "span",
        sx: {
            lineHeight: 0,
            display: 'block',
            overflow: 'hidden',
            '& .wrapper': {
                width: 1,
                height: 1,
                backgroundSize: 'cover !important'
            },
            ...sx
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            component: react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage,
            wrapperClassName: "wrapper",
            effect: disabledEffect ? undefined : effect,
            placeholderSrc: "https://zone-assets-api.vercel.app/assets/img_placeholder.svg",
            sx: {
                width: 1,
                height: 1,
                objectFit: 'cover'
            },
            ...other
        })
    }));
};
// ----------------------------------------------------------------------
function getRatio(ratio = '1/1') {
    return ({
        '4/3': 'calc(100% / 4 * 3)',
        '3/4': 'calc(100% / 3 * 4)',
        '6/4': 'calc(100% / 6 * 4)',
        '4/6': 'calc(100% / 4 * 6)',
        '16/9': 'calc(100% / 16 * 9)',
        '9/16': 'calc(100% / 9 * 16)',
        '21/9': 'calc(100% / 21 * 9)',
        '9/21': 'calc(100% / 9 * 21)',
        '1/1': '100%'
    })[ratio];
}


/***/ }),

/***/ 1451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);


// @mui

// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)('span')(({ theme , ownerState  })=>{
    const isLight = theme.palette.mode === 'light';
    const { color , variant  } = ownerState;
    const styleFilled = (color)=>({
            color: theme.palette[color].contrastText,
            backgroundColor: theme.palette[color].main
        })
    ;
    const styleOutlined = (color)=>({
            color: theme.palette[color].main,
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette[color].main}`
        })
    ;
    const styleGhost = (color)=>({
            color: theme.palette[color][isLight ? 'dark' : 'light'],
            backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette[color].main, 0.16)
        })
    ;
    return {
        height: 22,
        minWidth: 22,
        lineHeight: 0,
        borderRadius: 6,
        cursor: 'default',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 1),
        color: theme.palette.grey[800],
        fontSize: theme.typography.pxToRem(12),
        fontFamily: theme.typography.fontFamily,
        backgroundColor: theme.palette.grey[300],
        fontWeight: theme.typography.fontWeightBold,
        ...color !== 'default' ? {
            ...variant === 'filled' && {
                ...styleFilled(color)
            },
            ...variant === 'outlined' && {
                ...styleOutlined(color)
            },
            ...variant === 'ghost' && {
                ...styleGhost(color)
            }
        } : {
            ...variant === 'outlined' && {
                backgroundColor: 'transparent',
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.grey[50032]}`
            },
            ...variant === 'ghost' && {
                color: isLight ? theme.palette.text.secondary : theme.palette.common.white,
                backgroundColor: theme.palette.grey[50016]
            }
        }
    };
});
// ----------------------------------------------------------------------
Label.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        'default',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error', 
    ]),
    variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        'filled',
        'outlined',
        'ghost'
    ])
};
function Label({ color ='default' , variant ='ghost' , children , ...other }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        ownerState: {
            color,
            variant
        },
        ...other,
        children: children
    }));
};


/***/ }),

/***/ 4055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4990);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);




// @mui


// ----------------------------------------------------------------------
function LightboxModalStyles() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const isRTL = theme.direction === 'rtl';
    const ICON_SIZE = 32;
    const ICON_COLOR = theme.palette.primary.main.replace('#', '');
    const getIcon = (icon)=>`url(https://api.iconify.design/carbon/${icon}.svg?color=%23${ICON_COLOR}&width=${ICON_SIZE}&height=${ICON_SIZE})`
    ;
    const Icon = (icon)=>({
            opacity: 1,
            alignItems: 'center',
            display: 'inline-flex',
            justifyContent: 'center',
            backgroundImage: `unset`,
            backgroundColor: 'transparent',
            transition: theme.transitions.create('opacity'),
            '&:before': {
                display: 'block',
                width: ICON_SIZE,
                height: ICON_SIZE,
                content: getIcon(icon)
            },
            '&:hover': {
                opacity: 0.72
            }
        })
    ;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.GlobalStyles, {
        styles: {
            '& .ReactModalPortal': {
                '& .ril__outer': {
                    backgroundColor: theme.palette.grey[900]
                },
                // Toolbar
                '& .ril__toolbar': {
                    height: 'auto !important',
                    padding: theme.spacing(2, 3),
                    backgroundColor: 'transparent'
                },
                '& .ril__toolbarLeftSide': {
                    display: 'none'
                },
                '& .ril__toolbarRightSide': {
                    height: 'auto !important',
                    padding: 0,
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    '& li': {
                        display: 'flex',
                        alignItems: 'center'
                    },
                    '& li:first-of-type': {
                        flexGrow: 1
                    },
                    '& li:not(:first-of-type)': {
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        marginLeft: theme.spacing(2)
                    }
                },
                // Button
                '& button:focus': {
                    outline: 'none'
                },
                '& .ril__toolbarRightSide button': {
                    width: '100%',
                    height: '100%',
                    '&.ril__zoomInButton': Icon('zoom-in'),
                    '&.ril__zoomOutButton': Icon('zoom-out'),
                    '&.ril__closeButton': Icon('close')
                },
                '& .ril__navButtons': {
                    padding: theme.spacing(3),
                    '&.ril__navButtonPrev': {
                        right: 'auto',
                        left: theme.spacing(2),
                        ...Icon(isRTL ? 'arrow-right' : 'arrow-left')
                    },
                    '&.ril__navButtonNext': {
                        left: 'auto',
                        right: theme.spacing(2),
                        ...Icon(isRTL ? 'arrow-left' : 'arrow-right')
                    }
                }
            }
        }
    }));
}
// ----------------------------------------------------------------------
LightboxModal.propTypes = {
    images: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
    photoIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    setPhotoIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function LightboxModal({ images , photoIndex , setPhotoIndex , isOpen , ...other }) {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [
        isOpen
    ]);
    const showIndex = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        variant: "subtitle2",
        children: `${photoIndex + 1} / ${images.length}`
    });
    const toolbarButtons = [
        showIndex
    ];
    const customStyles = {
        overlay: {
            zIndex: 9999
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LightboxModalStyles, {
            }),
            isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_image_lightbox__WEBPACK_IMPORTED_MODULE_3___default()), {
                animationDuration: 240,
                nextSrc: images[(photoIndex + 1) % images.length],
                prevSrc: images[(photoIndex + images.length - 1) % images.length],
                onMovePrevRequest: ()=>setPhotoIndex((photoIndex + images.length - 1) % images.length)
                ,
                onMoveNextRequest: ()=>setPhotoIndex((photoIndex + 1) % images.length)
                ,
                toolbarButtons: toolbarButtons,
                reactModalStyle: customStyles,
                ...other
            })
        ]
    }));
};


/***/ }),

/***/ 1001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6034);


// @mui


//

// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)('div')(({ theme  })=>({
        ...(0,_utils_cssStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(theme).bgBlur({
            opacity: 0.24,
            blur: 2
        }),
        top: 0,
        zIndex: 9999,
        position: 'fixed',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    })
);
// ----------------------------------------------------------------------
LoadingScreen.propTypes = {
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function LoadingScreen({ sx  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
                sx: sx,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.LinearProgress, {
                    sx: {
                        width: 1,
                        maxWidth: 320
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    width: '100%',
                    height: '100vh'
                }
            })
        ]
    }));
};


/***/ }),

/***/ 1796:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4338);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_6__]);
___WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



// next

// @mui



// ----------------------------------------------------------------------
Logo.propTypes = {
    isSimple: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    onDark: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function Logo({ onDark =false , isSimple =false , sx  }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const isLight = theme.palette.mode === "light";
    const PRIMARY_MAIN = theme.palette.primary.main;
    const LIGHT_COLOR = theme.palette.common.white;
    const DARK_COLOR = theme.palette.grey[800];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        href: "/",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
            sx: {
                width: 164,
                lineHeight: 0,
                cursor: "pointer",
                display: "inline-flex",
                ...sx
            },
            children: isSimple ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_6__/* .Image */ .Ee, {
                src: "/assets/images/svgs/hadarologo.svg",
                alt: "hadarologo",
                sx: {
                    maxWidth: "100px",
                    maxHeight: "100px"
                }
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_6__/* .Image */ .Ee, {
                src: "/assets/images/svgs/hadarologo.svg",
                alt: "logo",
                sx: {
                    maxWidth: "200px",
                    maxHeight: "200px"
                }
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(Logo));

});

/***/ }),

/***/ 1320:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony exports RootStyle, default, components */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prism_react_renderer_themes_okaidia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1075);
/* harmony import */ var prism_react_renderer_themes_okaidia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_okaidia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(276);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7096);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_carbon_quotes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1558);
/* harmony import */ var _iconify_icons_carbon_quotes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_quotes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4338);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_9__]);
___WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





// icons

// next

// @mui


// components

// ----------------------------------------------------------------------
const MARGIN = {
    marginTop: 24,
    marginBottom: 16
};
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)('div', {
    shouldForwardProp: (prop)=>prop !== 'firstLetter'
})(({ firstLetter , theme  })=>({
        // Heading
        '& h1': {
            ...MARGIN,
            ...theme.typography.h1
        },
        '& h2': {
            ...MARGIN,
            ...theme.typography.h2
        },
        '& h3': {
            ...MARGIN,
            ...theme.typography.h3
        },
        '& h4': {
            ...MARGIN,
            ...theme.typography.h4
        },
        '& h5': {
            ...MARGIN,
            ...theme.typography.h5
        },
        '& h6': {
            ...MARGIN,
            ...theme.typography.h6
        },
        '& p': {
            marginBottom: theme.spacing(2)
        },
        // Code
        '& code': {
            color: theme.palette.secondary.main
        },
        '& pre': {
            margin: theme.spacing(5, 0),
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 900 : 800],
            '& > pre': {
                overflow: 'auto',
                padding: theme.spacing(3, 3, 0, 3)
            }
        },
        // List
        '& ul, & ol': {
            marginBottom: theme.spacing(2),
            '& li': {
                lineHeight: 2
            }
        },
        // First Letter
        ...firstLetter && {
            '& > p:first-of-type': {
                '&:first-letter': {
                    float: 'left',
                    fontSize: 80,
                    lineHeight: 1,
                    paddingRight: theme.spacing(2),
                    fontWeight: theme.typography.fontWeightBold
                }
            }
        }
    })
);
// ----------------------------------------------------------------------
Markdown.propTypes = {
    content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
    firstLetter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function Markdown({ content , firstLetter =false  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        firstLetter: firstLetter,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__.MDXRemote, {
            ...content,
            components: components
        })
    }));
};
// ----------------------------------------------------------------------
const components = {
    p: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
            ...props
        })
    ,
    hr: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Divider, {
            ...props
        })
    ,
    a: LinkMDX,
    blockquote: BlockquoteMDX,
    img: ImageMDX,
    code: CodeMDX
};
// ----------------------------------------------------------------------
LinkMDX.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    href: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
function LinkMDX(props) {
    return !props.href.includes('http') ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: props.href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Link, {
            ...props,
            children: props.children
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Link, {
        ...props,
        href: props.href,
        target: "_blank",
        rel: "noopener",
        children: props.children
    });
}
// ----------------------------------------------------------------------
ImageMDX.propTypes = {
    alt: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
function ImageMDX(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_9__/* .Image */ .Ee, {
        alt: props.alt,
        ratio: "16/9",
        sx: {
            borderRadius: 2,
            my: 5
        },
        ...props
    }));
}
// ----------------------------------------------------------------------
BlockquoteMDX.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
function BlockquoteMDX(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
        direction: "row",
        spacing: {
            xs: 3,
            md: 5
        },
        sx: {
            my: 5,
            p: {
                xs: 3,
                md: 5
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_9__/* .Iconify */ .Ir, {
                icon: (_iconify_icons_carbon_quotes__WEBPACK_IMPORTED_MODULE_5___default()),
                sx: {
                    width: 48,
                    height: 48,
                    color: 'text.disabled',
                    opacity: 0.48
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                variant: "h5",
                children: props.children
            })
        ]
    }));
}
// ----------------------------------------------------------------------
CodeMDX.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
function CodeMDX(props) {
    const { children , className: className1  } = props;
    const language = className1 === null || className1 === void 0 ? void 0 : className1.replace(/language-/, '');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((prism_react_renderer__WEBPACK_IMPORTED_MODULE_4___default()), {
        ...prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__.defaultProps,
        code: children,
        theme: (prism_react_renderer_themes_okaidia__WEBPACK_IMPORTED_MODULE_2___default()),
        language: language,
        children: ({ className , style , tokens , getLineProps , getTokenProps  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                className: className,
                style: {
                    ...style,
                    backgroundColor: 'transparent'
                },
                children: tokens.map((line, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ...getLineProps({
                            line,
                            key: i
                        }),
                        children: line.map((token, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                ...getTokenProps({
                                    token,
                                    key
                                })
                            }, key)
                        )
                    }, i)
                )
            })
    }));
}

});

/***/ }),

/***/ 9125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2893);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8538);
/* harmony import */ var _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4338);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_9__]);
___WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



// icons


// next


// @mui


// components

// ----------------------------------------------------------------------
const ListSubheaderStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListSubheader, {
        disableSticky: true,
        disableGutters: true,
        ...props
    })
)(({ theme  })=>({
        ...theme.typography.overline,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
        paddingLeft: theme.spacing(5),
        color: theme.palette.text.primary
    })
);
const ListItemStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemButton, {
    shouldForwardProp: (prop)=>prop !== 'activeRoot' && prop !== 'activeSub'
})(({ activeRoot , activeSub , theme  })=>({
        ...theme.typography.body2,
        height: 48,
        position: 'relative',
        textTransform: 'capitalize',
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(2.5),
        color: theme.palette.text.secondary,
        ...activeRoot && {
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium,
            backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            '&:before': {
                top: 0,
                right: 0,
                width: 3,
                bottom: 0,
                content: "''",
                display: 'block',
                position: 'absolute',
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                backgroundColor: theme.palette.primary.main
            }
        },
        ...activeSub && {
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightMedium
        }
    })
);
const ListItemIconStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemIcon)({
    width: 22,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
        width: 22,
        height: 22
    }
});
const ListSubItemIconStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
    shouldForwardProp: (prop)=>prop !== 'active'
})(({ active , theme  })=>({
        width: 4,
        height: 4,
        display: 'flex',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.text.disabled,
        transition: theme.transitions.create('transform'),
        ...active && {
            transform: 'scale(2)',
            backgroundColor: theme.palette.primary.main
        }
    })
);
// ----------------------------------------------------------------------
NavSection.propTypes = {
    navConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)
};
function NavSection({ navConfig , ...other }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
        ...other,
        children: navConfig.map((list)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.List, {
                disablePadding: true,
                sx: {
                    px: 0
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListSubheaderStyle, {
                        children: list.subheader
                    }),
                    list.items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavSectionItem, {
                            item: item
                        }, item.title)
                    )
                ]
            }, list.subheader)
        )
    }));
};
// ----------------------------------------------------------------------
NavSectionItem.propTypes = {
    item: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
        info: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
        path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
    })
};
function NavSectionItem({ item: item1  }) {
    const { pathname , asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { title: title1 , path: path1 , icon , info , children  } = item1;
    const isActiveRoot = pathname === path1 || asPath === path1;
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(isActiveRoot);
    const handleOpen = ()=>{
        setOpen(!open);
    };
    if (children) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ListItemStyle, {
                    onClick: handleOpen,
                    activeRoot: isActiveRoot,
                    children: [
                        icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItemIconStyle, {
                            children: icon
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemText, {
                            disableTypography: true,
                            primary: title1
                        }),
                        info && info,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_9__/* .Iconify */ .Ir, {
                            icon: open ? (_iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_4___default()) : (_iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_3___default()),
                            sx: {
                                width: 16,
                                height: 16,
                                ml: 1
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Collapse, {
                    in: open,
                    timeout: "auto",
                    unmountOnExit: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.List, {
                        component: "div",
                        disablePadding: true,
                        children: children.map((item)=>{
                            const { title , path  } = item;
                            const isActiveSub = pathname === path || asPath === path;
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                href: path,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ListItemStyle, {
                                    activeSub: isActiveSub,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItemIconStyle, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListSubItemIconStyle, {
                                                component: "span",
                                                active: isActiveSub
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemText, {
                                            disableTypography: true,
                                            primary: title
                                        })
                                    ]
                                })
                            }, title));
                        })
                    })
                })
            ]
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
        href: path1,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ListItemStyle, {
            activeRoot: isActiveRoot,
            children: [
                icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItemIconStyle, {
                    children: icon
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemText, {
                    disableTypography: true,
                    primary: title1
                }),
                info && info
            ]
        })
    }));
}

});

/***/ }),

/***/ 2771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2982);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);




// @mui

// ----------------------------------------------------------------------
const Page = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(({ children , meta , title , ...other }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${title} | The Stage.io`
                    }),
                    meta
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                ref: ref,
                ...other,
                children: children
            })
        ]
    })
);
Page.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    meta: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ 9760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_star_filled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7140);
/* harmony import */ var _iconify_icons_carbon_star_filled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_star_filled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7850);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_5__]);
_Iconify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


// icons

// @mui

// utils

//

// ----------------------------------------------------------------------
RatingLabel.propTypes = {
    ratings: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
    reviews: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
function RatingLabel({ reviews , ratings , ...other }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        spacing: 0.5,
        direction: "row",
        alignItems: "center",
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                icon: (_iconify_icons_carbon_star_filled__WEBPACK_IMPORTED_MODULE_2___default()),
                sx: {
                    width: 20,
                    height: 20,
                    color: 'warning.main'
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variant: "h6",
                children: Number.isInteger(ratings) ? `${ratings}.0` : ratings
            }),
            reviews && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
                variant: "body2",
                sx: {
                    color: 'text.secondary'
                },
                children: [
                    "(",
                    (0,_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__/* .fShortenNumber */ .v1)(reviews),
                    " reviews)"
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 5447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);



// @mui


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)('div')(()=>({
        flexGrow: 1,
        height: '100%',
        overflow: 'hidden'
    })
);
const SimpleBarStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((simplebar_react__WEBPACK_IMPORTED_MODULE_2___default()))(({ theme  })=>({
        maxHeight: '100%',
        '& .simplebar-scrollbar': {
            '&:before': {
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.grey[600], 0.48)
            },
            '&.simplebar-visible:before': {
                opacity: 1
            }
        },
        '& .simplebar-track.simplebar-vertical': {
            width: 10
        },
        '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
            height: 6
        },
        '& .simplebar-mask': {
            zIndex: 'inherit'
        }
    })
);
// ----------------------------------------------------------------------
Scrollbar.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function Scrollbar({ children , sx , ...other }) {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    if (isMobile) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            sx: {
                overflowX: 'auto',
                ...sx
            },
            ...other,
            children: children
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SimpleBarStyle, {
            timeout: 500,
            clickOnTrack: false,
            sx: sx,
            ...other,
            children: children
        })
    }));
};


/***/ }),

/***/ 9164:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9961);
/* harmony import */ var _iconify_icons_carbon_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_4__]);
_Iconify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



// @mui

//

// ----------------------------------------------------------------------
SearchInput.propTypes = {
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function SearchInput({ sx , ...other }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FilledInput, {
        fullWidth: true,
        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.InputAdornment, {
            position: "start",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                icon: (_iconify_icons_carbon_search__WEBPACK_IMPORTED_MODULE_2___default()),
                sx: {
                    width: 24,
                    height: 24,
                    color: 'text.disabled'
                }
            })
        }),
        placeholder: "Search...",
        sx: {
            '& .MuiFilledInput-input': {
                py: '18px'
            },
            ...sx
        },
        ...other
    }));
};

});

/***/ }),

/***/ 6434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



// ----------------------------------------------------------------------
SearchNotFound.propTypes = {
    keyword: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
function SearchNotFound({ keyword ='' , ...other }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                gutterBottom: true,
                align: "center",
                variant: "subtitle1",
                children: "Not Found"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "body2",
                align: "center",
                children: [
                    "No results found for",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: ` ${keyword} `
                    }),
                    ".",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                    }),
                    " Try checking for typos or using complete words."
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 3031:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5086);
/* harmony import */ var _iconify_icons_carbon_share__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_share__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9410);
/* harmony import */ var _iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4602);
/* harmony import */ var _iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4513);
/* harmony import */ var _iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4612);
/* harmony import */ var _iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4338);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_9__, _animate__WEBPACK_IMPORTED_MODULE_10__]);
([___WEBPACK_IMPORTED_MODULE_9__, _animate__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



//icon





// @mui

// components


// ----------------------------------------------------------------------
ShareButton.propTypes = {
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function ShareButton({ sx  }) {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const handleOpen = (event)=>{
        setOpen(event.currentTarget);
    };
    const handleClose = ()=>{
        setOpen(null);
    };
    const SOCIALS = [
        {
            name: 'FaceBook',
            icon: (_iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_5___default()),
            socialColor: '#1877F2'
        },
        {
            name: 'Instagram',
            icon: (_iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_7___default()),
            socialColor: '#E02D69'
        },
        {
            name: 'Linkedin',
            icon: (_iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_4___default()),
            socialColor: '#007EBB'
        },
        {
            name: 'Twitter',
            icon: (_iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_6___default()),
            socialColor: '#00AAEC'
        }, 
    ];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animate__WEBPACK_IMPORTED_MODULE_10__/* .IconButtonAnimate */ .w_, {
                onClick: handleOpen,
                sx: {
                    ...open && {
                        color: 'primary.main'
                    },
                    ...sx
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_9__/* .Iconify */ .Ir, {
                    icon: (_iconify_icons_carbon_share__WEBPACK_IMPORTED_MODULE_3___default()),
                    sx: {
                        width: 20,
                        height: 20
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Popover, {
                open: Boolean(open),
                onClose: handleClose,
                anchorEl: open,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                },
                PaperProps: {
                    sx: {
                        width: 220,
                        p: 1
                    }
                },
                children: SOCIALS.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {
                        onClick: handleClose,
                        sx: {
                            typography: 'body3'
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_9__/* .Iconify */ .Ir, {
                                icon: option.icon,
                                sx: {
                                    width: 24,
                                    height: 24,
                                    mr: 2,
                                    color: option.socialColor
                                }
                            }),
                            "Share via ",
                            option.name
                        ]
                    }, option.name)
                )
            })
        ]
    }));
};

});

/***/ }),

/***/ 946:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SocialsButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4338);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_5__, _components__WEBPACK_IMPORTED_MODULE_2__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_5__, _components__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



// @mui


//

// ----------------------------------------------------------------------
SocialsButton.propTypes = {
    initialColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    links: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
    simple: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function SocialsButton({ initialColor =false , simple =true , links ={
} , sx , ...other }) {
    const SOCIALS = [
        {
            name: "Instagram",
            icon: "/assets/images/svgs/insta.svg",
            path: links.instagram || "#instagram-link"
        },
        {
            name: "Twitter",
            icon: "/assets/images/svgs/twitter.svg",
            path: links.twitter || "#twitter-link"
        },
        {
            name: "LinkedIn",
            icon: "/assets/images/svgs/linkedin.svg",
            path: links.linkedin || "#linkedin-link"
        },
        {
            name: "Discord",
            icon: "/assets/images/svgs/discord.svg",
            path: links.discord || "#discord-link"
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        direction: "row",
        flexWrap: "wrap",
        alignItems: "center",
        children: SOCIALS.map((social)=>{
            const { name , icon , path , socialColor  } = social;
            return simple ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Link, {
                href: path,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                    color: "inherit",
                    sx: {
                        ...initialColor && {
                            color: socialColor,
                            "&:hover": {
                                bgcolor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(socialColor, 0.08)
                            }
                        },
                        ...sx
                    },
                    ...other,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee, {
                        src: icon,
                        sx: {
                            width: 20,
                            height: 20
                        }
                    })
                })
            }, name) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                href: path,
                color: "inherit",
                variant: "outlined",
                size: "small",
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    icon: icon
                }),
                sx: {
                    m: 0.5,
                    flexShrink: 0,
                    ...initialColor && {
                        color: socialColor,
                        borderColor: socialColor,
                        "&:hover": {
                            borderColor: socialColor,
                            bgcolor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(socialColor, 0.08)
                        }
                    },
                    ...sx
                },
                ...other,
                children: name
            }, name);
        })
    }));
};

});

/***/ }),

/***/ 1306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



// ----------------------------------------------------------------------
SvgIconStyle.propTypes = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function SvgIconStyle({ src , sx  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        component: "span",
        sx: {
            width: 24,
            height: 24,
            display: 'inline-block',
            bgcolor: 'currentColor',
            mask: `url(${src}) no-repeat center / contain`,
            WebkitMask: `url(${src}) no-repeat center / contain`,
            ...sx
        }
    }));
};


/***/ }),

/***/ 8381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextIconLabel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);


// @mui

// ----------------------------------------------------------------------
TextIconLabel.propTypes = {
    endIcon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};
function TextIconLabel({ icon , value , endIcon =false , sx , ...other }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        direction: "row",
        alignItems: "center",
        sx: {
            typography: 'body2',
            ...sx
        },
        ...other,
        children: [
            !endIcon && icon,
            value,
            endIcon && icon
        ]
    }));
};


/***/ }),

/***/ 519:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_getFontValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4856);



// @mui

// utils

// ----------------------------------------------------------------------
const TextMaxLine = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ asLink , variant ='body1' , line =2 , persistent =false , children , sx , ...other }, ref)=>{
    const { lineHeight  } = (0,_utils_getFontValue__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)(variant);
    const style = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: line,
        WebkitBoxOrient: 'vertical',
        ...persistent && {
            height: lineHeight * line
        },
        ...sx
    };
    if (asLink) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
            color: "inherit",
            ref: ref,
            variant: variant,
            sx: {
                ...style
            },
            ...other,
            children: children
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
        ref: ref,
        variant: variant,
        sx: {
            ...style
        },
        ...other,
        children: children
    }));
});
TextMaxLine.propTypes = {
    asLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    line: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    persistent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2', 
    ])
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TextMaxLine)));


/***/ }),

/***/ 3507:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DialogAnimate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3680);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



// @mui

//

// ----------------------------------------------------------------------
DialogAnimate.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    variants: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function DialogAnimate({ open =false , variants , onClose , children , sx , ...other }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
        children: open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
            fullWidth: true,
            maxWidth: "xs",
            open: open,
            onClose: onClose,
            PaperComponent: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    component: framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.div,
                    ...variants || (0,_variants__WEBPACK_IMPORTED_MODULE_4__/* .varFade */ .EU)({
                        distance: 120,
                        durationIn: 0.32,
                        durationOut: 0.24,
                        easeIn: 'easeInOut'
                    }).inUp,
                    sx: {
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            onClick: onClose,
                            sx: {
                                width: '100%',
                                height: '100%',
                                position: 'fixed'
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
                            sx: sx,
                            ...props,
                            children: props.children
                        })
                    ]
                })
            ,
            ...other,
            children: children
        })
    }));
};

});

/***/ }),

/***/ 968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




// @mui


// ----------------------------------------------------------------------
const FabButtonAnimate = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(({ color ='primary' , size ='large' , children , sx , sxWrap , ...other }, ref)=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    if (color === 'default' || color === 'inherit' || color === 'primary' || color === 'secondary') {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimateWrap, {
            size: size,
            sxWrap: sxWrap,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Fab, {
                ref: ref,
                size: size,
                color: color,
                sx: sx,
                ...other,
                children: children
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimateWrap, {
        size: size,
        sxWrap: sxWrap,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Fab, {
            ref: ref,
            size: size,
            sx: {
                boxShadow: theme.customShadows[color],
                color: theme.palette[color].contrastText,
                bgcolor: theme.palette[color].main,
                '&:hover': {
                    bgcolor: theme.palette[color].dark
                },
                ...sx
            },
            ...other,
            children: children
        })
    }));
});
FabButtonAnimate.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        'inherit',
        'default',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error', 
    ]),
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        'small',
        'medium',
        'large'
    ]),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    sxWrap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FabButtonAnimate);
// ----------------------------------------------------------------------
const varSmall = {
    hover: {
        scale: 1.07
    },
    tap: {
        scale: 0.97
    }
};
const varMedium = {
    hover: {
        scale: 1.06
    },
    tap: {
        scale: 0.98
    }
};
const varLarge = {
    hover: {
        scale: 1.05
    },
    tap: {
        scale: 0.99
    }
};
AnimateWrap.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        'small',
        'medium',
        'large'
    ]),
    sxWrap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function AnimateWrap({ size , children , sxWrap  }) {
    const isSmall = size === 'small';
    const isLarge = size === 'large';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.div,
        whileTap: "tap",
        whileHover: "hover",
        variants: isSmall && varSmall || isLarge && varLarge || varMedium,
        sx: {
            display: 'inline-flex',
            ...sxWrap
        },
        children: children
    }));
}

});

/***/ }),

/***/ 484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




// @mui

// ----------------------------------------------------------------------
const IconButtonAnimate = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(({ children , size ='medium' , ...other }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimateWrap, {
        size: size,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
            size: size,
            ref: ref,
            ...other,
            children: children
        })
    })
);
IconButtonAnimate.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        'inherit',
        'default',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error', 
    ]),
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        'small',
        'medium',
        'large'
    ])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconButtonAnimate);
// ----------------------------------------------------------------------
const varSmall = {
    hover: {
        scale: 1.1
    },
    tap: {
        scale: 0.95
    }
};
const varMedium = {
    hover: {
        scale: 1.09
    },
    tap: {
        scale: 0.97
    }
};
const varLarge = {
    hover: {
        scale: 1.08
    },
    tap: {
        scale: 0.99
    }
};
AnimateWrap.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        'small',
        'medium',
        'large'
    ])
};
function AnimateWrap({ size , children  }) {
    const isSmall = size === 'small';
    const isLarge = size === 'large';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.div,
        whileTap: "tap",
        whileHover: "hover",
        variants: isSmall && varSmall || isLarge && varLarge || varMedium,
        sx: {
            display: 'inline-flex'
        },
        children: children
    }));
}

});

/***/ }),

/***/ 6806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MotionContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3680);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



// @mui

//

// ----------------------------------------------------------------------
MotionContainer.propTypes = {
    action: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    animate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
function MotionContainer({ animate , action =false , children , ...other }) {
    if (action) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            component: framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.div,
            initial: false,
            animate: animate ? 'animate' : 'exit',
            variants: (0,_variants__WEBPACK_IMPORTED_MODULE_4__/* .varContainer */ .Ew)(),
            ...other,
            children: children
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.div,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        variants: (0,_variants__WEBPACK_IMPORTED_MODULE_4__/* .varContainer */ .Ew)(),
        ...other,
        children: children
    }));
};

});

/***/ }),

/***/ 7406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MotionLazyContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



// ----------------------------------------------------------------------
const loadFeatures = ()=>__webpack_require__.e(/* import() */ 754).then(__webpack_require__.bind(__webpack_require__, 2754)).then((res)=>res.default
    )
;
MotionLazyContainer.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
function MotionLazyContainer({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.LazyMotion, {
        strict: true,
        features: loadFeatures,
        children: children
    }));
};

});

/***/ }),

/***/ 5515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5102);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
([___WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




// @mui

// hooks

//

// ----------------------------------------------------------------------
MotionViewport.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    disableAnimatedMobile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function MotionViewport({ children , disableAnimatedMobile =true , ...other }) {
    const isDesktop = (0,_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)('up', 'sm');
    if (!isDesktop && disableAnimatedMobile) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            ...other,
            children: children
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.div,
        initial: "initial",
        whileInView: "animate",
        viewport: {
            once: true,
            amount: 0.5
        },
        variants: (0,___WEBPACK_IMPORTED_MODULE_6__/* .varContainer */ .Ew)(),
        ...other,
        children: children
    }));
};

});

/***/ }),

/***/ 1512:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3680);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



// @mui

//

// ----------------------------------------------------------------------
TextAnimate.propTypes = {
    text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    variants: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function TextAnimate({ text , variants , sx , ...other }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.h1,
        sx: {
            typography: 'h1',
            overflow: 'hidden',
            display: 'inline-flex',
            ...sx
        },
        ...other,
        children: text.split('').map((letter, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.span, {
                variants: variants || (0,_variants__WEBPACK_IMPORTED_MODULE_4__/* .varFade */ .EU)().inUp,
                children: letter
            }, index)
        )
    }));
};

});

/***/ }),

/***/ 4744:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wp": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.Wp),
/* harmony export */   "Ew": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.Ew),
/* harmony export */   "EU": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.EU),
/* harmony export */   "BL": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.BL),
/* harmony export */   "Kl": () => (/* reexport safe */ _DialogAnimate__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "Y$": () => (/* reexport safe */ _FabButtonAnimate__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "w_": () => (/* reexport safe */ _IconButtonAnimate__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "NM": () => (/* reexport safe */ _MotionContainer__WEBPACK_IMPORTED_MODULE_6__.Z)
/* harmony export */ });
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3680);
/* harmony import */ var _DialogAnimate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3507);
/* harmony import */ var _TextAnimate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1512);
/* harmony import */ var _FabButtonAnimate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var _IconButtonAnimate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(484);
/* harmony import */ var _MotionViewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5515);
/* harmony import */ var _MotionContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6806);
/* harmony import */ var _MotionLazyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7406);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MotionLazyContainer__WEBPACK_IMPORTED_MODULE_7__, _MotionContainer__WEBPACK_IMPORTED_MODULE_6__, _MotionViewport__WEBPACK_IMPORTED_MODULE_5__, _IconButtonAnimate__WEBPACK_IMPORTED_MODULE_4__, _FabButtonAnimate__WEBPACK_IMPORTED_MODULE_3__, _TextAnimate__WEBPACK_IMPORTED_MODULE_2__, _DialogAnimate__WEBPACK_IMPORTED_MODULE_1__]);
([_MotionLazyContainer__WEBPACK_IMPORTED_MODULE_7__, _MotionContainer__WEBPACK_IMPORTED_MODULE_6__, _MotionViewport__WEBPACK_IMPORTED_MODULE_5__, _IconButtonAnimate__WEBPACK_IMPORTED_MODULE_4__, _FabButtonAnimate__WEBPACK_IMPORTED_MODULE_3__, _TextAnimate__WEBPACK_IMPORTED_MODULE_2__, _DialogAnimate__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
// ----------------------------------------------------------------------









});

/***/ }),

/***/ 3680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Wp": () => (/* reexport */ varBounce),
  "Ew": () => (/* reexport */ varContainer),
  "EU": () => (/* reexport */ varFade),
  "BL": () => (/* reexport */ varZoom)
});

// UNUSED EXPORTS: TRANSITION, varBgColor, varBgKenburns, varBgPan, varFlip, varHover, varPath, varRotate, varScale, varSlide, varTranEnter, varTranExit, varTranHover

;// CONCATENATED MODULE: ./src/components/animate/variants/path.js
// ----------------------------------------------------------------------
const TRANSITION = {
    duration: 2,
    ease: [
        0.43,
        0.13,
        0.23,
        0.96
    ]
};
const varPath = {
    animate: {
        fillOpacity: [
            0,
            0,
            1
        ],
        pathLength: [
            1,
            0.4,
            0
        ],
        transition: TRANSITION
    }
};

;// CONCATENATED MODULE: ./src/components/animate/variants/transition.js
// ----------------------------------------------------------------------
const varTranHover = (props)=>{
    const duration = (props === null || props === void 0 ? void 0 : props.duration) || 0.32;
    const ease = (props === null || props === void 0 ? void 0 : props.ease) || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};
const varTranEnter = (props)=>{
    const duration = (props === null || props === void 0 ? void 0 : props.durationIn) || 0.64;
    const ease = (props === null || props === void 0 ? void 0 : props.easeIn) || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};
const varTranExit = (props)=>{
    const duration = (props === null || props === void 0 ? void 0 : props.durationOut) || 0.48;
    const ease = (props === null || props === void 0 ? void 0 : props.easeOut) || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/fade.js
//

// ----------------------------------------------------------------------
const varFade = (props)=>{
    const distance = (props === null || props === void 0 ? void 0 : props.distance) || 120;
    const durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    const durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    const easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    const easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        in: {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                transition: varTranEnter
            },
            exit: {
                opacity: 0,
                transition: varTranExit
            }
        },
        inUp: {
            initial: {
                y: distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {
                y: -distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: -distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {
                x: -distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: -distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {
                x: distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            initial: {
                opacity: 1
            },
            animate: {
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outUp: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: -distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outDown: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outLeft: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: -distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outRight: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/zoom.js
//

// ----------------------------------------------------------------------
const varZoom = (props)=>{
    const distance = (props === null || props === void 0 ? void 0 : props.distance) || 720;
    const durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    const durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    const easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    const easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        in: {
            initial: {
                scale: 0,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inUp: {
            initial: {
                scale: 0,
                opacity: 0,
                translateY: distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {
                scale: 0,
                opacity: 0,
                translateY: -distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {
                scale: 0,
                opacity: 0,
                translateX: -distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {
                scale: 0,
                opacity: 0,
                translateX: distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outUp: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outDown: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outLeft: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outRight: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/bounce.js
//

// ----------------------------------------------------------------------
const varBounce = (props)=>{
    const durationIn = props === null || props === void 0 ? void 0 : props.durationIn;
    const durationOut = props === null || props === void 0 ? void 0 : props.durationOut;
    const easeIn = props === null || props === void 0 ? void 0 : props.easeIn;
    const easeOut = props === null || props === void 0 ? void 0 : props.easeOut;
    return {
        // IN
        in: {
            animate: {
                scale: [
                    0.3,
                    1.1,
                    0.9,
                    1.03,
                    0.97,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: [
                    0.9,
                    1.1,
                    0.3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        inUp: {
            animate: {
                y: [
                    720,
                    -24,
                    12,
                    -4,
                    0
                ],
                scaleY: [
                    4,
                    0.9,
                    0.95,
                    0.985,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: {
                    ...varTranEnter({
                        durationIn,
                        easeIn
                    })
                }
            },
            exit: {
                y: [
                    12,
                    -24,
                    720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            animate: {
                y: [
                    -720,
                    24,
                    -12,
                    4,
                    0
                ],
                scaleY: [
                    4,
                    0.9,
                    0.95,
                    0.985,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: [
                    -12,
                    24,
                    -720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            animate: {
                x: [
                    -720,
                    24,
                    -12,
                    4,
                    0
                ],
                scaleX: [
                    3,
                    1,
                    0.98,
                    0.995,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: [
                    0,
                    24,
                    -720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            animate: {
                x: [
                    720,
                    -24,
                    12,
                    -4,
                    0
                ],
                scaleX: [
                    3,
                    1,
                    0.98,
                    0.995,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: [
                    0,
                    -24,
                    720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            animate: {
                scale: [
                    0.9,
                    1.1,
                    0.3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outUp: {
            animate: {
                y: [
                    -12,
                    24,
                    -720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outDown: {
            animate: {
                y: [
                    12,
                    -24,
                    720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outLeft: {
            animate: {
                x: [
                    0,
                    24,
                    -720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outRight: {
            animate: {
                x: [
                    0,
                    -24,
                    720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/container.js
// ----------------------------------------------------------------------
const varContainer = (props)=>{
    const staggerIn = (props === null || props === void 0 ? void 0 : props.staggerIn) || 0.05;
    const delayIn = (props === null || props === void 0 ? void 0 : props.staggerIn) || 0.05;
    const staggerOut = (props === null || props === void 0 ? void 0 : props.staggerIn) || 0.05;
    return {
        animate: {
            transition: {
                staggerChildren: staggerIn,
                delayChildren: delayIn
            }
        },
        exit: {
            transition: {
                staggerChildren: staggerOut,
                staggerDirection: -1
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/index.js














/***/ }),

/***/ 9530:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CarouselArrows)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6342);
/* harmony import */ var _iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2554);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_5__, _animate__WEBPACK_IMPORTED_MODULE_6__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_5__, _animate__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


// icons

// @mui


//


// ----------------------------------------------------------------------
const BUTTON_SIZE = 40;
const ArrowStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_animate__WEBPACK_IMPORTED_MODULE_6__/* .IconButtonAnimate */ .w_)(({ theme  })=>({
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        cursor: 'pointer',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            color: theme.palette.text.primary
        }
    })
);
// ----------------------------------------------------------------------
CarouselArrows.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    customIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    ]),
    onNext: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    onPrevious: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
function CarouselArrows({ customIcon , onNext , onPrevious , children , ...other }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const isRTL = theme.direction === 'rtl';
    const style = {
        position: 'absolute',
        mt: -2.5,
        top: '50%',
        zIndex: 9
    };
    if (children) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            ...other,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                    className: "arrow left",
                    sx: {
                        ...style,
                        left: 0
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowStyle, {
                        onClick: onPrevious,
                        children: leftIcon(customIcon, isRTL)
                    })
                }),
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                    className: "arrow right",
                    sx: {
                        ...style,
                        right: 0
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowStyle, {
                        onClick: onNext,
                        children: rightIcon(customIcon, isRTL)
                    })
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        direction: "row",
        spacing: 2,
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowStyle, {
                onClick: onPrevious,
                children: leftIcon(customIcon, isRTL)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowStyle, {
                onClick: onNext,
                children: rightIcon(customIcon, isRTL)
            })
        ]
    }));
};
// ----------------------------------------------------------------------
const leftIcon = (customIcon, isRTL)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        icon: customIcon ? customIcon : (_iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_2___default()),
        sx: {
            width: 24,
            height: 24,
            transform: ' scaleX(-1)',
            ...isRTL && {
                transform: ' scaleX(1)'
            }
        }
    })
;
const rightIcon = (customIcon, isRTL)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        icon: customIcon ? customIcon : (_iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_2___default()),
        sx: {
            width: 24,
            height: 24,
            ...isRTL && {
                transform: ' scaleX(-1)'
            }
        }
    })
;

});

/***/ }),

/***/ 8450:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_caret_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6222);
/* harmony import */ var _iconify_icons_carbon_caret_right__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_caret_right__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2554);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_5__, _animate__WEBPACK_IMPORTED_MODULE_6__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_5__, _animate__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


// icons

// @mui


//


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box)(({ theme  })=>({
        zIndex: 9,
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        color: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.grey[900], 0.48)
    })
);
const ArrowStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_animate__WEBPACK_IMPORTED_MODULE_6__/* .IconButtonAnimate */ .w_)(({ theme  })=>({
        padding: 6,
        opacity: 0.48,
        color: theme.palette.common.white,
        '&:hover': {
            opacity: 1
        }
    })
);
// ----------------------------------------------------------------------
CarouselArrowsIndex.propTypes = {
    customIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    ]),
    index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    onNext: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    onPrevious: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    total: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
function CarouselArrowsIndex({ customIcon , index , total , onNext , onPrevious , ...other }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const isRTL = theme.direction === 'rtl';
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RootStyle, {
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowStyle, {
                size: "small",
                onClick: onPrevious,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    icon: customIcon ? customIcon : (_iconify_icons_carbon_caret_right__WEBPACK_IMPORTED_MODULE_2___default()),
                    sx: {
                        width: 20,
                        height: 20,
                        transform: ' scaleX(-1)',
                        ...isRTL && {
                            transform: ' scaleX(1)'
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                variant: "subtitle2",
                children: [
                    index + 1,
                    "/",
                    total
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowStyle, {
                size: "small",
                onClick: onNext,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    icon: customIcon ? customIcon : (_iconify_icons_carbon_caret_right__WEBPACK_IMPORTED_MODULE_2___default()),
                    sx: {
                        width: 20,
                        height: 20,
                        ...isRTL && {
                            transform: ' scaleX(-1)'
                        }
                    }
                })
            })
        ]
    }));
};

});

/***/ }),

/***/ 9109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CarouselDots)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);

// @mui


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    shouldForwardProp: (prop)=>prop !== 'rounded'
})(({ rounded  })=>({
        display: 'flex',
        listStyle: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        '& li': {
            width: 18,
            height: 18,
            opacity: 0.32,
            cursor: 'pointer'
        },
        '& li.slick-active': {
            opacity: 1,
            ...rounded && {
                '& .dotActive': {
                    width: 16,
                    borderRadius: 6
                }
            }
        }
    })
);
const DotWrapStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)('div')(()=>({
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    })
);
const DotStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)('span')(({ theme  })=>({
        width: 8,
        height: 8,
        borderRadius: '50%',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.short
        })
    })
);
// ----------------------------------------------------------------------
function CarouselDots(props) {
    const color = props === null || props === void 0 ? void 0 : props.color;
    const rounded = (props === null || props === void 0 ? void 0 : props.rounded) || false;
    return {
        appendDots: (dots)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
                    rounded: rounded,
                    component: "ul",
                    ...props,
                    children: dots
                })
            })
        ,
        customPaging: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DotWrapStyle, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DotStyle, {
                    className: "dotActive",
                    sx: {
                        bgcolor: color || 'primary.main'
                    }
                })
            })
    };
};


/***/ }),

/***/ 1586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A0": () => (/* reexport safe */ _CarouselDots__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "i5": () => (/* reexport safe */ _CarouselArrows__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _CarouselDots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9109);
/* harmony import */ var _CarouselArrows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9530);
/* harmony import */ var _CarouselArrowsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8450);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CarouselArrowsIndex__WEBPACK_IMPORTED_MODULE_2__, _CarouselArrows__WEBPACK_IMPORTED_MODULE_1__]);
([_CarouselArrowsIndex__WEBPACK_IMPORTED_MODULE_2__, _CarouselArrows__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




});

/***/ }),

/***/ 4338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i5": () => (/* reexport safe */ _carousel__WEBPACK_IMPORTED_MODULE_3__.i5),
/* harmony export */   "A0": () => (/* reexport safe */ _carousel__WEBPACK_IMPORTED_MODULE_3__.A0),
/* harmony export */   "TR": () => (/* reexport safe */ _Logo__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "T3": () => (/* reexport safe */ _Page__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "Ee": () => (/* reexport safe */ _Image__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "Ir": () => (/* reexport safe */ _Iconify__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   "AU": () => (/* reexport safe */ _BgOverlay__WEBPACK_IMPORTED_MODULE_11__.Z),
/* harmony export */   "eK": () => (/* reexport safe */ _Scrollbar__WEBPACK_IMPORTED_MODULE_12__.Z),
/* harmony export */   "yV": () => (/* reexport safe */ _NavSection__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   "Ij": () => (/* reexport safe */ _SocialsButton__WEBPACK_IMPORTED_MODULE_23__.Z)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7900);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5803);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4744);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1586);
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1796);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2771);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5907);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1451);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2554);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1320);
/* harmony import */ var _BgOverlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2122);
/* harmony import */ var _Scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5447);
/* harmony import */ var _NavSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9125);
/* harmony import */ var _ErrorScreen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7935);
/* harmony import */ var _RatingLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9760);
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9164);
/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3031);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5814);
/* harmony import */ var _TextMaxLine__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(519);
/* harmony import */ var _SvgIconStyle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1306);
/* harmony import */ var _LightboxModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4055);
/* harmony import */ var _LoadingScreen__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1001);
/* harmony import */ var _SocialsButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(946);
/* harmony import */ var _TextIconLabel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(8381);
/* harmony import */ var _CountUpNumber__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(7866);
/* harmony import */ var _AppStoreButton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(3100);
/* harmony import */ var _FavoriteButton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2591);
/* harmony import */ var _SearchNotFound__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(6434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FavoriteButton__WEBPACK_IMPORTED_MODULE_27__, _SocialsButton__WEBPACK_IMPORTED_MODULE_23__, _Breadcrumbs__WEBPACK_IMPORTED_MODULE_18__, _ShareButton__WEBPACK_IMPORTED_MODULE_17__, _SearchInput__WEBPACK_IMPORTED_MODULE_16__, _RatingLabel__WEBPACK_IMPORTED_MODULE_15__, _ErrorScreen__WEBPACK_IMPORTED_MODULE_14__, _NavSection__WEBPACK_IMPORTED_MODULE_13__, _Markdown__WEBPACK_IMPORTED_MODULE_10__, _Iconify__WEBPACK_IMPORTED_MODULE_9__, _Logo__WEBPACK_IMPORTED_MODULE_5__, _skeleton__WEBPACK_IMPORTED_MODULE_4__, _carousel__WEBPACK_IMPORTED_MODULE_3__, _animate__WEBPACK_IMPORTED_MODULE_2__, _player__WEBPACK_IMPORTED_MODULE_1__, _map__WEBPACK_IMPORTED_MODULE_0__]);
([_FavoriteButton__WEBPACK_IMPORTED_MODULE_27__, _SocialsButton__WEBPACK_IMPORTED_MODULE_23__, _Breadcrumbs__WEBPACK_IMPORTED_MODULE_18__, _ShareButton__WEBPACK_IMPORTED_MODULE_17__, _SearchInput__WEBPACK_IMPORTED_MODULE_16__, _RatingLabel__WEBPACK_IMPORTED_MODULE_15__, _ErrorScreen__WEBPACK_IMPORTED_MODULE_14__, _NavSection__WEBPACK_IMPORTED_MODULE_13__, _Markdown__WEBPACK_IMPORTED_MODULE_10__, _Iconify__WEBPACK_IMPORTED_MODULE_9__, _Logo__WEBPACK_IMPORTED_MODULE_5__, _skeleton__WEBPACK_IMPORTED_MODULE_4__, _carousel__WEBPACK_IMPORTED_MODULE_3__, _animate__WEBPACK_IMPORTED_MODULE_2__, _player__WEBPACK_IMPORTED_MODULE_1__, _map__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






























});

/***/ }),

/***/ 3098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8557);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3726);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2526);
/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3375);
/* harmony import */ var _MapStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Popup__WEBPACK_IMPORTED_MODULE_6__]);
_Popup__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




// @mui

// config

//



// ----------------------------------------------------------------------
ContactMap.propTypes = {
    offices: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function ContactMap({ offices , sx , ...other }) {
    const { 0: tooltip , 1: setTooltip  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: centerMap , 1: setCenterMap  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        lat: offices[0].latlng[0],
        lng: offices[0].latlng[1]
    });
    const handleOpen = (lat, lng, office)=>{
        setCenterMap({
            ...centerMap,
            lat: lat - 32,
            lng
        });
        setTooltip(office);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        sx: {
            height: 480,
            overflow: 'hidden',
            ...sx
        },
        ...other,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((google_map_react__WEBPACK_IMPORTED_MODULE_3___default()), {
            bootstrapURLKeys: {
                key: _config__WEBPACK_IMPORTED_MODULE_5__/* .GOOGLE_API */ .FD
            },
            center: centerMap,
            zoom: 2,
            options: {
                styles: _MapStyle__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                disableDefaultUI: true
            },
            children: [
                offices.map((office, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Marker__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        lat: office.latlng[0],
                        lng: office.latlng[1],
                        onOpen: ()=>handleOpen(office.latlng[0], office.latlng[1], office)
                    }, index)
                ),
                tooltip && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Popup__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    lat: tooltip.latlng[0],
                    lng: tooltip.latlng[1],
                    office: tooltip,
                    onClose: ()=>setTooltip(null)
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 3825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const FlatPaleTheme = [
    {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#6195a0'
            }
        ]
    },
    {
        featureType: 'administrative.province',
        elementType: 'geometry.stroke',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
            {
                lightness: '0'
            },
            {
                saturation: '0'
            },
            {
                color: '#f5f5f2'
            },
            {
                gamma: '1'
            }
        ]
    },
    {
        featureType: 'landscape.man_made',
        elementType: 'all',
        stylers: [
            {
                lightness: '-3'
            },
            {
                gamma: '1.00'
            }
        ]
    },
    {
        featureType: 'landscape.natural.terrain',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#bae5ce'
            },
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'road',
        elementType: 'all',
        stylers: [
            {
                saturation: -100
            },
            {
                lightness: 45
            },
            {
                visibility: 'simplified'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
            {
                visibility: 'simplified'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#fac9a9'
            },
            {
                visibility: 'simplified'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text',
        stylers: [
            {
                color: '#4e4e4e'
            }
        ]
    },
    {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#787878'
            }
        ]
    },
    {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
            {
                visibility: 'simplified'
            }
        ]
    },
    {
        featureType: 'transit.station.airport',
        elementType: 'labels.icon',
        stylers: [
            {
                hue: '#0a00ff'
            },
            {
                saturation: '-77'
            },
            {
                gamma: '0.57'
            },
            {
                lightness: '0'
            }
        ]
    },
    {
        featureType: 'transit.station.rail',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#43321e'
            }
        ]
    },
    {
        featureType: 'transit.station.rail',
        elementType: 'labels.icon',
        stylers: [
            {
                hue: '#ff6c00'
            },
            {
                lightness: '4'
            },
            {
                gamma: '0.75'
            },
            {
                saturation: '-68'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'all',
        stylers: [
            {
                color: '#eaf6f8'
            },
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#c7eced'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
            {
                lightness: '-49'
            },
            {
                saturation: '-53'
            },
            {
                gamma: '0.79'
            }
        ]
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatPaleTheme);


/***/ }),

/***/ 3375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Marker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);


// @mui

// ----------------------------------------------------------------------
Marker.propTypes = {
    onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
function Marker({ onOpen  }) {
    const handleOpen = (event)=>{
        event.stopPropagation();
        onOpen();
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        onClick: handleOpen,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, {
            sx: {
                color: 'error.main',
                cursor: 'pointer'
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3 c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9 C20.1,15.8,20.2,15.8,20.2,15.7z"
            })
        })
    }));
};


/***/ }),

/***/ 2526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6413);
/* harmony import */ var _iconify_icons_carbon_email__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_email__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_phone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5732);
/* harmony import */ var _iconify_icons_carbon_phone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_phone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3203);
/* harmony import */ var _iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5907);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2554);
/* harmony import */ var _TextIconLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8381);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_7__, _animate__WEBPACK_IMPORTED_MODULE_9__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_7__, _animate__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



// icons



//




// ----------------------------------------------------------------------
Popup.propTypes = {
    office: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        address: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        country: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        email: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        phoneNumber: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        photo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    }),
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
function Popup({ office , onClose  }) {
    const handleClose = (event)=>{
        event.stopPropagation();
        onClose();
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
        sx: {
            width: 220,
            overflow: 'hidden',
            borderRadius: 1.5,
            mt: 2,
            ml: 2,
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    position: 'absolute',
                    right: 4,
                    top: 4,
                    zIndex: 9
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animate__WEBPACK_IMPORTED_MODULE_9__/* .IconButtonAnimate */ .w_, {
                    size: "small",
                    onClick: handleClose,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        icon: (_iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_5___default()),
                        sx: {
                            width: 20,
                            height: 20,
                            opacity: 0.48,
                            color: 'common.white',
                            '&:hover': {
                                opacity: 1
                            },
                            ...!office.photo && {
                                color: 'text.disabled'
                            }
                        }
                    })
                })
            }),
            office.photo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                alt: "photo",
                src: office.photo,
                ratio: "4/3"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                spacing: 1,
                sx: {
                    p: 1.5,
                    wordBreak: 'break-all',
                    ...!office.photo && {
                        p: 2,
                        pr: 3.5
                    }
                },
                children: [
                    office.country && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "subtitle2",
                        children: office.country
                    }),
                    office.address && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        component: "p",
                        variant: "caption",
                        children: office.address
                    }),
                    office.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextIconLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        alignItems: "flex-start",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            icon: (_iconify_icons_carbon_email__WEBPACK_IMPORTED_MODULE_3___default()),
                            sx: {
                                mr: 0.5,
                                width: 18,
                                height: 18,
                                flexShrink: 0
                            }
                        }),
                        value: office.email,
                        sx: {
                            typography: 'caption'
                        }
                    }),
                    office.phoneNumber && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextIconLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            icon: (_iconify_icons_carbon_phone__WEBPACK_IMPORTED_MODULE_4___default()),
                            sx: {
                                mr: 0.5,
                                width: 18,
                                height: 18,
                                flexShrink: 0
                            }
                        }),
                        value: office.phoneNumber,
                        sx: {
                            typography: 'caption'
                        }
                    })
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 7900:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _ContactMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3098);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactMap__WEBPACK_IMPORTED_MODULE_0__]);
_ContactMap__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


});

/***/ }),

/***/ 8095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ReactPlayerStyle)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8924);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);


// @mui

// ----------------------------------------------------------------------
const ReactPlayerStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((react_player__WEBPACK_IMPORTED_MODULE_1___default()))(()=>({
        width: '100% !important',
        height: '100% !important',
        '& video': {
            objectFit: 'cover'
        }
    })
);
// ----------------------------------------------------------------------
// https://github.com/CookPete/react-player
function Player({ ...other }) {
    return(/*#__PURE__*/ _jsx(ReactPlayerStyle, {
        ...other
    }));
};


/***/ }),

/***/ 9354:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5546);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4744);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8095);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_7__, _animate__WEBPACK_IMPORTED_MODULE_5__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_7__, _animate__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



// icons

// @mui

//



// ----------------------------------------------------------------------
PlayerWithButton.propTypes = {
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
    open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
    videoPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
function PlayerWithButton({ videoPath , open , onClose , ...other }) {
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const onReady = ()=>{
        setLoading(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_animate__WEBPACK_IMPORTED_MODULE_5__/* .DialogAnimate */ .Kl, {
        fullScreen: true,
        open: open,
        variants: {
            initial: {
                ...(0,_animate__WEBPACK_IMPORTED_MODULE_5__/* .varZoom */ .BL)().in.initial,
                scale: 0.64
            },
            animate: {
                ...(0,_animate__WEBPACK_IMPORTED_MODULE_5__/* .varZoom */ .BL)().in.animate,
                transition: {
                    ...(0,_animate__WEBPACK_IMPORTED_MODULE_5__/* .varZoom */ .BL)().in.animate.transition,
                    duration: 0.48
                }
            },
            exit: {
                ...(0,_animate__WEBPACK_IMPORTED_MODULE_5__/* .varZoom */ .BL)().in.exit,
                scale: 0.64
            }
        },
        sx: {
            bgcolor: 'transparent'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    position: 'fixed',
                    top: 24,
                    right: 24,
                    zIndex: 9
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animate__WEBPACK_IMPORTED_MODULE_5__/* .IconButtonAnimate */ .w_, {
                    size: "large",
                    onClick: onClose,
                    sx: {
                        bgcolor: 'common.white',
                        '&:hover': {
                            color: 'primary.main',
                            bgcolor: 'common.white'
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        icon: (_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3___default()),
                        sx: {
                            width: 24,
                            height: 24
                        }
                    })
                })
            }),
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CircularProgress, {
                sx: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    m: 'auto',
                    zIndex: -1,
                    position: 'absolute'
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Player__WEBPACK_IMPORTED_MODULE_6__/* .ReactPlayerStyle */ .f, {
                url: videoPath,
                playing: !loading,
                onReady: onReady,
                ...other
            })
        ]
    }));
};

});

/***/ }),

/***/ 5310:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5546);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_play_filled_alt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9695);
/* harmony import */ var _iconify_icons_carbon_play_filled_alt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_play_filled_alt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8095);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4744);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5907);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2554);
/* harmony import */ var _BgOverlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2122);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_9__, _animate__WEBPACK_IMPORTED_MODULE_7__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_9__, _animate__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



// icons


// @mui

//





// ----------------------------------------------------------------------
PlayerWithImage.propTypes = {
    imgPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    videoPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    ratio: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        '4/3',
        '3/4',
        '6/4',
        '4/6',
        '16/9',
        '9/16',
        '21/9',
        '9/21',
        '1/1'
    ])
};
function PlayerWithImage({ imgPath , ratio ='16/9' , videoPath  }) {
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const onReady = ()=>{
        setLoading(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animate__WEBPACK_IMPORTED_MODULE_7__/* .FabButtonAnimate */ .Y$, {
                        size: "large",
                        color: "inherit",
                        onClick: handleOpen,
                        sx: {
                            width: 1,
                            height: 1,
                            bgcolor: 'common.white'
                        },
                        sxWrap: {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: 64,
                            height: 64,
                            zIndex: 9,
                            m: 'auto',
                            position: 'absolute'
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            icon: (_iconify_icons_carbon_play_filled_alt__WEBPACK_IMPORTED_MODULE_4___default()),
                            sx: {
                                color: 'primary.main'
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BgOverlay__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        alt: "hero",
                        src: imgPath,
                        ratio: ratio
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_animate__WEBPACK_IMPORTED_MODULE_7__/* .DialogAnimate */ .Kl, {
                fullScreen: true,
                open: open,
                variants: {
                    initial: {
                        ...(0,_animate__WEBPACK_IMPORTED_MODULE_7__/* .varZoom */ .BL)().in.initial,
                        scale: 0.64
                    },
                    animate: {
                        ...(0,_animate__WEBPACK_IMPORTED_MODULE_7__/* .varZoom */ .BL)().in.animate,
                        transition: {
                            ...(0,_animate__WEBPACK_IMPORTED_MODULE_7__/* .varZoom */ .BL)().in.animate.transition,
                            duration: 0.48
                        }
                    },
                    exit: {
                        ...(0,_animate__WEBPACK_IMPORTED_MODULE_7__/* .varZoom */ .BL)().in.exit,
                        scale: 0.64
                    }
                },
                sx: {
                    bgcolor: 'transparent'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            position: 'fixed',
                            top: 24,
                            right: 24,
                            zIndex: 9
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animate__WEBPACK_IMPORTED_MODULE_7__/* .IconButtonAnimate */ .w_, {
                            size: "large",
                            onClick: handleClose,
                            sx: {
                                bgcolor: 'common.white',
                                '&:hover': {
                                    color: 'primary.main',
                                    bgcolor: 'common.white'
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                icon: (_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3___default()),
                                sx: {
                                    width: 24,
                                    height: 24
                                }
                            })
                        })
                    }),
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CircularProgress, {
                        sx: {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            m: 'auto',
                            zIndex: -1,
                            position: 'absolute'
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Player__WEBPACK_IMPORTED_MODULE_6__/* .ReactPlayerStyle */ .f, {
                        url: videoPath,
                        playing: !loading,
                        onReady: onReady
                    })
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 5803:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8095);
/* harmony import */ var _PlayerWithButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9354);
/* harmony import */ var _PlayerWithImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5310);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PlayerWithImage__WEBPACK_IMPORTED_MODULE_2__, _PlayerWithButton__WEBPACK_IMPORTED_MODULE_1__]);
([_PlayerWithImage__WEBPACK_IMPORTED_MODULE_2__, _PlayerWithButton__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




});

/***/ }),

/***/ 1783:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5480);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_3__]);
_hooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


// @mui

// hooks

// ----------------------------------------------------------------------
CourseItemSkeleton.propTypes = {
    vertical: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function CourseItemSkeleton({ vertical , ...other }) {
    const isDesktop = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useResponsive */ .Fs)('up', 'sm');
    const verticalStyle = vertical || !isDesktop;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
        ...other,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
            direction: verticalStyle ? 'column' : 'row',
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                    variant: "rectangular",
                    sx: {
                        width: 240,
                        height: 346,
                        flexShrink: 0,
                        ...verticalStyle && {
                            width: 1
                        }
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    sx: {
                        p: 3,
                        flexGrow: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            direction: "row",
                            justifyContent: "space-between",
                            sx: {
                                mb: 3
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                    variant: "text",
                                    sx: {
                                        height: 20,
                                        width: 72
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                    variant: "text",
                                    sx: {
                                        height: 20,
                                        width: 48
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            spacing: 1,
                            flexGrow: 1,
                            children: [
                                ...Array(3)
                            ].map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                    variant: "text",
                                    sx: {
                                        maxWidth: 1,
                                        height: 20 - index * 2,
                                        width: (5 - index) * 80
                                    }
                                }, index)
                            )
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            direction: "row",
                            alignItems: "center",
                            spacing: 1.5,
                            sx: {
                                mt: 3
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                    variant: "rectangular",
                                    sx: {
                                        height: 16,
                                        width: 120,
                                        borderRadius: 0.5
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                    variant: "rectangular",
                                    sx: {
                                        height: 16,
                                        width: 120,
                                        borderRadius: 0.5
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            direction: "row",
                            alignItems: "center",
                            spacing: 1.5,
                            sx: {
                                my: 3
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                    variant: "circular",
                                    width: 40,
                                    height: 40
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                    variant: "text",
                                    sx: {
                                        height: 20,
                                        width: 48
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                    variant: "text",
                                    sx: {
                                        height: 20,
                                        width: 24
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            direction: "row",
                            alignItems: "center",
                            spacing: 1.5,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                    variant: "rectangular",
                                    sx: {
                                        height: 16,
                                        width: 56,
                                        borderRadius: 0.5
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                    variant: "rectangular",
                                    sx: {
                                        height: 16,
                                        width: 56,
                                        borderRadius: 0.5
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 1034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);

// @mui

// ----------------------------------------------------------------------
function JobItemSkeleton({ ...other }) {
    return(/*#__PURE__*/ _jsxs(Card, {
        ...other,
        children: [
            /*#__PURE__*/ _jsxs(Stack, {
                spacing: 2,
                sx: {
                    p: 3
                },
                children: [
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "circular",
                        width: 48,
                        height: 48
                    }),
                    [
                        ...Array(4)
                    ].map((_, index)=>/*#__PURE__*/ _jsx(Skeleton, {
                            variant: "text",
                            sx: {
                                height: 20 - index * 2,
                                width: (5 - index) * 50
                            }
                        }, index)
                    )
                ]
            }),
            /*#__PURE__*/ _jsx(Divider, {
                sx: {
                    borderStyle: 'dashed'
                }
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    p: 3,
                    display: 'grid',
                    gap: 3,
                    gridTemplateColumns: 'repeat(2, 1fr)'
                },
                children: [
                    ...Array(4)
                ].map((_, index)=>/*#__PURE__*/ _jsx(Skeleton, {
                        variant: "rectangular",
                        sx: {
                            width: 1,
                            height: 20,
                            borderRadius: 0.5
                        }
                    }, index)
                )
            })
        ]
    }));
};


/***/ }),

/***/ 9822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


// ----------------------------------------------------------------------
function TourItemSkeleton({ ...other }) {
    return(/*#__PURE__*/ _jsxs(Card, {
        ...other,
        children: [
            /*#__PURE__*/ _jsx(Skeleton, {
                variant: "rectangular",
                sx: {
                    width: 1,
                    height: 240
                }
            }),
            /*#__PURE__*/ _jsxs(Stack, {
                spacing: 1,
                sx: {
                    p: 3
                },
                children: [
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "text",
                        sx: {
                            height: 20,
                            width: 50
                        }
                    }),
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "text",
                        sx: {
                            height: 20,
                            width: 1
                        }
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Divider, {
                sx: {
                    borderStyle: 'dashed'
                }
            }),
            /*#__PURE__*/ _jsxs(Stack, {
                direction: "row",
                justifyContent: "space-between",
                sx: {
                    p: 3
                },
                children: [
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "text",
                        sx: {
                            height: 20,
                            width: 100
                        }
                    }),
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "text",
                        sx: {
                            height: 20,
                            width: 50
                        }
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 21:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _JobItemSkeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1034);
/* harmony import */ var _TourItemSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9822);
/* harmony import */ var _CourseItemSkeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1783);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CourseItemSkeleton__WEBPACK_IMPORTED_MODULE_2__]);
_CourseItemSkeleton__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




});

/***/ }),

/***/ 3726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E0": () => (/* binding */ HOST_API),
/* harmony export */   "FD": () => (/* binding */ GOOGLE_API),
/* harmony export */   "he": () => (/* binding */ defaultSettings),
/* harmony export */   "w_": () => (/* binding */ HEADER_MOBILE_HEIGHT),
/* harmony export */   "zj": () => (/* binding */ HEADER_DESKTOP_HEIGHT),
/* harmony export */   "pG": () => (/* binding */ DRAWER_WIDTH)
/* harmony export */ });
/* unused harmony exports CONTAINER_WIDTH, defaultLocale */
// API
// ----------------------------------------------------------------------
const HOST_API = {
    local: process.env.NEXT_PUBLIC_BACKEND_URL,
    dev: process.env.NEXT_PUBLIC_BACKEND_URL,
    production: process.env.NEXT_PUBLIC_BACKEND_URL
};
const GOOGLE_API = "";
const CONTAINER_WIDTH = process.env.CONTAINER_WIDTH;
// DEFAULT LOCALE
// ----------------------------------------------------------------------
// Also change in next.config.mjs
const defaultLocale = "en";
// SETTINGS
// ----------------------------------------------------------------------
const defaultSettings = {
    // light | dark
    themeMode: "dark",
    // ltr | rtl
    themeDirection: "ltr",
    //  default | blueOrange | greenOrange | purpleTeal | cyanYellow | pinkCyan
    themeColorPresets: "default"
};
// LAYOUT
// ----------------------------------------------------------------------
const HEADER_MOBILE_HEIGHT = 64;
const HEADER_DESKTOP_HEIGHT = 96;
const DRAWER_WIDTH = 280;


/***/ }),

/***/ 2288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ SettingsProvider),
/* harmony export */   "J": () => (/* binding */ SettingsContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5480);
/* harmony import */ var _utils_getColorPresets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8878);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3726);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_3__]);
_hooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



// hooks

// utils

// config

// ----------------------------------------------------------------------
const initialState = {
    ..._config__WEBPACK_IMPORTED_MODULE_5__/* .defaultSettings */ .he,
    onToggleMode: ()=>{
    },
    onToggleDirection: ()=>{
    },
    onChangeColorPresets: ()=>{
    },
    onResetSetting: ()=>{
    },
    setColor: _utils_getColorPresets__WEBPACK_IMPORTED_MODULE_4__/* .colorPresets[0] */ .P[0],
    colorOption: []
};
const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(initialState);
SettingsProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
function SettingsProvider({ children  }) {
    const [settings, setSettings] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useLocalStorage */ ._)('settings', {
        ..._config__WEBPACK_IMPORTED_MODULE_5__/* .defaultSettings */ .he
    });
    const onToggleMode = ()=>{
        setSettings({
            ...settings,
            themeMode: settings.themeMode === 'light' ? 'dark' : 'light'
        });
    };
    const onToggleDirection = ()=>{
        setSettings({
            ...settings,
            themeDirection: settings.themeDirection === 'ltr' ? 'rtl' : 'ltr'
        });
    };
    const onChangeColorPresets = (event)=>{
        setSettings({
            ...settings,
            themeColorPresets: event.target.value
        });
    };
    const onResetSetting = ()=>{
        setSettings({
            ..._config__WEBPACK_IMPORTED_MODULE_5__/* .defaultSettings */ .he
        });
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsContext.Provider, {
        value: {
            ...settings,
            // Mode
            onToggleMode,
            // Direction
            onToggleDirection,
            // Color Presets
            onChangeColorPresets,
            setColor: (0,_utils_getColorPresets__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(settings.themeColorPresets),
            colorOption: _utils_getColorPresets__WEBPACK_IMPORTED_MODULE_4__/* .colorPresets.map */ .P.map((color)=>({
                    name: color.name,
                    primary: color.primary.main,
                    secondary: color.secondary.main
                })
            ),
            // Reset Setting
            onResetSetting
        },
        children: children
    }));
}


});

/***/ }),

/***/ 5480:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rV": () => (/* reexport safe */ _useSettings__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "yc": () => (/* reexport safe */ _useOffSetTop__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "Fs": () => (/* reexport safe */ _useResponsive__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "_": () => (/* reexport safe */ _useLocalStorage__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "ZY": () => (/* reexport safe */ _useBoundingClientRect__WEBPACK_IMPORTED_MODULE_6__.Z)
/* harmony export */ });
/* harmony import */ var _useRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7112);
/* harmony import */ var _useSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(571);
/* harmony import */ var _useOffSetTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7627);
/* harmony import */ var _useResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5102);
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3698);
/* harmony import */ var _useHoverParallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4142);
/* harmony import */ var _useBoundingClientRect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(144);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useHoverParallax__WEBPACK_IMPORTED_MODULE_5__, _useSettings__WEBPACK_IMPORTED_MODULE_1__]);
([_useHoverParallax__WEBPACK_IMPORTED_MODULE_5__, _useSettings__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
// ----------------------------------------------------------------------








});

/***/ }),

/***/ 144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useBoundingClientRect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function useBoundingClientRect(containerRef) {
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (containerRef.current) {
            const value = containerRef.current.getBoundingClientRect();
            setContainer(value);
        }
    }, [
        containerRef
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener('resize', handleResize);
        handleResize();
        return ()=>window.removeEventListener('resize', handleResize)
        ;
    }, [
        handleResize
    ]);
    return container;
};


/***/ }),

/***/ 4142:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);
framer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
/* eslint-disable react-hooks/rules-of-hooks */ 
// ----------------------------------------------------------------------
function useHoverParallax(stiffness = 250, damping = 20) {
    const x = useSpring(0, {
        stiffness,
        damping
    });
    const y = useSpring(0, {
        stiffness,
        damping
    });
    const offsetX = (force)=>useTransform(x, (event)=>event / force
        )
    ;
    const offsetY = (force)=>useTransform(y, (event)=>event / force
        )
    ;
    const onMouseMoveHandler = (event)=>{
        x.set(event.clientX);
        y.set(event.clientY);
    };
    const onMouseLeaveHandler = ()=>{
        x.set(0);
        y.set(0);
    };
    return {
        offsetX,
        offsetY,
        onMouseMoveHandler,
        onMouseLeaveHandler
    };
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useHoverParallax)));

});

/***/ }),

/***/ 3698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function useLocalStorage(key, defaultValue) {
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const storedValue = window.localStorage.getItem(key);
        if (storedValue !== null) {
            setValue(JSON.parse(storedValue));
        }
    }, [
        key
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [
        key,
        value
    ]);
    return [
        value,
        setValue
    ];
};


/***/ }),

/***/ 7627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useOffSetTop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function useOffSetTop(top) {
    const { 0: offsetTop , 1: setOffSetTop  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const isTop = top || 100;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.onscroll = ()=>{
            if (window.pageYOffset > isTop) {
                setOffSetTop(true);
            } else {
                setOffSetTop(false);
            }
        };
        return ()=>{
            window.onscroll = null;
        };
    }, [
        isTop
    ]);
    return offsetTop;
}; // Usage
 // const offset = useOffSetTop(100);


/***/ }),

/***/ 7112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2369);

// utils

// ----------------------------------------------------------------------
function useRequest(request, { fallbackData , ...config } = {
}) {
    const { data: response , error , isValidating , mutate ,  } = useSWR(request && JSON.stringify(request), ()=>axios.request(request)
    , {
        ...config,
        fallbackData: fallbackData && {
            status: 200,
            statusText: 'InitialData',
            config: request,
            headers: {
            },
            data: fallbackData
        }
    });
    return {
        data: response && response.data,
        response,
        error,
        isValidating,
        mutate
    };
};


/***/ }),

/***/ 5102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useResponsive)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__);
// @mui


// ----------------------------------------------------------------------
function useResponsive(query, key, start, end) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const mediaUp = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.up(key));
    const mediaDown = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.down(key));
    const mediaBetween = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.between(start, end));
    const mediaOnly = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.only(key));
    if (query === 'up') {
        return mediaUp;
    }
    if (query === 'down') {
        return mediaDown;
    }
    if (query === 'between') {
        return mediaBetween;
    }
    if (query === 'only') {
        return mediaOnly;
    }
};


/***/ }),

/***/ 571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2288);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__]);
_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


// ----------------------------------------------------------------------
const useSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__/* .SettingsContext */ .J)
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSettings);

});

/***/ }),

/***/ 2369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export basePath */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3726);

// config

// ----------------------------------------------------------------------
function getEnvironment(environment) {
    if (environment === "local") {
        return _config__WEBPACK_IMPORTED_MODULE_1__/* .HOST_API.local */ .E0.local;
    } else if (environment === "dev") {
        return _config__WEBPACK_IMPORTED_MODULE_1__/* .HOST_API.dev */ .E0.dev;
    } else if (environment === "production") {
        return _config__WEBPACK_IMPORTED_MODULE_1__/* .HOST_API.production */ .E0.production;
    } else {
        return _config__WEBPACK_IMPORTED_MODULE_1__/* .HOST_API.dev */ .E0.dev;
    }
}
const path = getEnvironment(process.env.NEXT_PUBLIC_NODE_ENV);
const basePath = path;
const API_ROUTE = "/api/v1";
const Api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: basePath + API_ROUTE
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);


/***/ }),

/***/ 6034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ cssStyles)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function getDirection(value = 'bottom') {
    return ({
        top: 'to top',
        right: 'to right',
        bottom: 'to bottom',
        left: 'to left'
    })[value];
}
function cssStyles(theme) {
    return {
        bgBlur: (props)=>{
            const color = (props === null || props === void 0 ? void 0 : props.color) || (theme === null || theme === void 0 ? void 0 : theme.palette.background.default) || '#000000';
            const blur = (props === null || props === void 0 ? void 0 : props.blur) || 6;
            const opacity = (props === null || props === void 0 ? void 0 : props.opacity) || 0.8;
            return {
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, opacity)
            };
        },
        bgGradient: (props)=>{
            const direction = getDirection(props === null || props === void 0 ? void 0 : props.direction);
            const startColor = (props === null || props === void 0 ? void 0 : props.startColor) || `${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)('#000000', 0)} 0%`;
            const endColor = (props === null || props === void 0 ? void 0 : props.endColor) || '#000000 75%';
            return {
                background: `linear-gradient(${direction}, ${startColor}, ${endColor});`
            };
        },
        bgImage: (props)=>{
            const url = (props === null || props === void 0 ? void 0 : props.url) || 'https://zone-assets-api.vercel.app/assets/bg_gradient.jpg';
            const direction = getDirection(props === null || props === void 0 ? void 0 : props.direction);
            const startColor = (props === null || props === void 0 ? void 0 : props.startColor) || (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)((theme === null || theme === void 0 ? void 0 : theme.palette.grey[900]) || '#000000', 0.88);
            const endColor = (props === null || props === void 0 ? void 0 : props.endColor) || (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)((theme === null || theme === void 0 ? void 0 : theme.palette.grey[900]) || '#000000', 0.88);
            return {
                background: `linear-gradient(${direction}, ${startColor}, ${endColor}), url(${url})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            };
        }
    };
};


/***/ }),

/***/ 7850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v1": () => (/* binding */ fShortenNumber)
/* harmony export */ });
/* unused harmony exports fCurrency, fPercent, fNumber, fData */
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function fCurrency(number) {
    return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}
function fPercent(number) {
    return numeral(number / 100).format('0.0%');
}
function fNumber(number) {
    return numeral(number).format();
}
function fShortenNumber(number) {
    return numeral__WEBPACK_IMPORTED_MODULE_0___default()(number).format('0.00a').replace('.00', '');
}
function fData(number) {
    return numeral(number).format('0.0 b');
}


/***/ }),

/***/ 8878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ colorPresets),
/* harmony export */   "Z": () => (/* binding */ getColorPresets)
/* harmony export */ });
/* harmony import */ var _theme_palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1988);
// theme

// ----------------------------------------------------------------------
const presetsKey1 = {
    default: 'default',
    blueOrange: 'blueOrange',
    greenOrange: 'greenOrange',
    purpleTeal: 'purpleTeal',
    cyanYellow: 'cyanYellow',
    pinkCyan: 'pinkCyan'
};
const colorPresets = [
    // DEFAULT
    {
        name: presetsKey1.default,
        primary: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* ["default"].light.primary */ .Z.light.primary,
        secondary: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* ["default"].light.secondary */ .Z.light.secondary
    },
    // PINK CYAN
    {
        name: presetsKey1.pinkCyan,
        primary: {
            lighter: '#FEE7E4',
            light: '#FBAEB5',
            main: '#F2779A',
            dark: '#AE3B72',
            darker: '#741655',
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: '#CAFDEB',
            light: '#61F4D9',
            main: '#00DCDA',
            dark: '#00849E',
            darker: '#004569',
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        }
    },
    // CYAN YELLOW
    {
        name: presetsKey1.cyanYellow,
        primary: {
            lighter: '#C8FAEC',
            light: '#5CE6D6',
            main: '#00A3AC',
            dark: '#00607B',
            darker: '#003252',
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: '#FEF9DA',
            light: '#FEE992',
            main: '#FDD14A',
            dark: '#B68B25',
            darker: '#79540E',
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.black */ .Y.black
        }
    },
    // PURPLE - TEAL
    {
        name: presetsKey1.purpleTeal,
        primary: {
            lighter: '#EACCFF',
            light: '#B566FF',
            main: '#6E00FF',
            dark: '#3F00B7',
            darker: '#1F007A',
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: '#CBFEFB',
            light: '#65F2FE',
            main: '#00C5FE',
            dark: '#0073B6',
            darker: '#003B79',
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        }
    },
    // BLUE - ORANGE
    {
        name: presetsKey1.blueOrange,
        primary: {
            lighter: '#CCEEFF',
            light: '#66BDFF',
            main: '#007AFF',
            dark: '#0046B7',
            darker: '#00237A',
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: '#FFF3D8',
            light: '#FFD18B',
            main: '#FFA03F',
            dark: '#B75D1F',
            darker: '#7A2D0C',
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.black */ .Y.black
        }
    },
    // GREEN - ORANGE
    {
        name: presetsKey1.greenOrange,
        primary: {
            lighter: '#DBF7EE',
            light: '#8BD0C7',
            main: '#2D6365',
            dark: '#163E48',
            darker: '#082130',
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: '#FEEFD5',
            light: '#FBC182',
            main: '#F37F31',
            dark: '#AE4318',
            darker: '#741B09',
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        }
    }, 
];
// ----------------------------------------------------------------------
const getPreset = (presetsKey)=>colorPresets.filter((item)=>item.name === presetsKey
    )[0]
;
function getColorPresets(themeColorPresets) {
    let color;
    switch(themeColorPresets){
        // pinkCyan
        case presetsKey1.pinkCyan:
            color = getPreset(presetsKey1.pinkCyan);
            break;
        // cyanYellow
        case presetsKey1.cyanYellow:
            color = getPreset(presetsKey1.cyanYellow);
            break;
        // blueOrange
        case presetsKey1.blueOrange:
            color = getPreset(presetsKey1.blueOrange);
            break;
        // greenOrange
        case presetsKey1.greenOrange:
            color = getPreset(presetsKey1.greenOrange);
            break;
        // purpleTeal
        case presetsKey1.purpleTeal:
            color = getPreset(presetsKey1.purpleTeal);
            break;
        default:
            color = getPreset(presetsKey1.default);
    }
    return color;
};


/***/ }),

/***/ 4856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ GetFontValue),
/* harmony export */   "Q1": () => (/* binding */ pxToRem),
/* harmony export */   "yE": () => (/* binding */ responsiveFontSizes)
/* harmony export */ });
/* unused harmony export remToPx */
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5102);
// material

// hooks

// ----------------------------------------------------------------------
function GetFontValue(variant) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const breakpoints = useWidth();
    const key = theme.breakpoints.up(breakpoints === 'xl' ? 'lg' : breakpoints);
    const hasResponsive = variant === 'h1' || variant === 'h2' || variant === 'h3' || variant === 'h4' || variant === 'h5' || variant === 'h6';
    const getFont = hasResponsive && theme.typography[variant][key] ? theme.typography[variant][key] : theme.typography[variant];
    const fontSize = remToPx(getFont.fontSize);
    const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;
    const fontWeight = theme.typography[variant].fontWeight;
    const letterSpacing = theme.typography[variant].letterSpacing;
    return {
        fontSize,
        lineHeight,
        fontWeight,
        letterSpacing
    };
};
// ----------------------------------------------------------------------
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
function pxToRem(value) {
    return `${value / 16}rem`;
}
function responsiveFontSizes({ sm , md , lg  }) {
    return {
        '@media (min-width:600px)': {
            fontSize: pxToRem(sm)
        },
        '@media (min-width:900px)': {
            fontSize: pxToRem(md)
        },
        '@media (min-width:1200px)': {
            fontSize: pxToRem(lg)
        }
    };
}
// ----------------------------------------------------------------------
function useWidth() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const keys = [
        ...theme.breakpoints.keys
    ].reverse();
    return keys.reduce((output, key)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = (0,_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)('up', key);
        return !output && matches ? key : output;
    }, null) || 'xs';
}


/***/ })

};
;