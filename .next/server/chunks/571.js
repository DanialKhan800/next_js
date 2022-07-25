"use strict";
exports.id = 571;
exports.ids = [571];
exports.modules = {

/***/ 5571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5480);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3189);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3726);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6528);
/* harmony import */ var _HeaderToolbarStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8296);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _CustomLogo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9917);
/* harmony import */ var _utils_getCookies__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7705);
/* harmony import */ var _utils_storeCookies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4707);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nav__WEBPACK_IMPORTED_MODULE_8__, _CustomLogo__WEBPACK_IMPORTED_MODULE_12__, _hooks__WEBPACK_IMPORTED_MODULE_5__]);
([_nav__WEBPACK_IMPORTED_MODULE_8__, _CustomLogo__WEBPACK_IMPORTED_MODULE_12__, _hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


// next

// @mui


// hooks

// routes

// config

//







// ----------------------------------------------------------------------
Header.propTypes = {
    transparent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function Header({ transparent  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const token = (0,_utils_getCookies__WEBPACK_IMPORTED_MODULE_13__/* .getUserCookie */ .d)();
    const isDesktop = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useResponsive */ .Fs)("up", "md");
    const isLight = theme.palette.mode === "light";
    const isScrolling = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useOffSetTop */ .yc)(_config__WEBPACK_IMPORTED_MODULE_7__/* .HEADER_DESKTOP_HEIGHT */ .zj);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const { 0: anchorEl , 1: setAnchorEl  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    function handleClose() {
        setAnchorEl(null);
    }
    const data = [
        {
            title: "Create NFT",
            path: "#",
            src: "/assets/images/svgs/createNft.svg"
        },
        {
            title: " Create Collections",
            path: "#",
            src: "/assets/images/svgs/createNft.svg"
        }, 
    ];
    const handleSignOut = ()=>{
        (0,_utils_storeCookies__WEBPACK_IMPORTED_MODULE_14__/* .removeCookies */ .s)();
        router.push("/");
    };
    // **************** Meta Mask ********************
    //
    //  Defined function to connect and disconnect metamask
    //
    // ***********************************************
    //**********************************************************************/
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.AppBar, {
        sx: {
            boxShadow: 0,
            bgcolor: "transparent"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderToolbarStyle__WEBPACK_IMPORTED_MODULE_9__/* .ToolbarStyle */ .t, {
                disableGutters: true,
                transparent: transparent,
                scrolling: isScrolling,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {
                    maxWidth: false,
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        maxWidth: "1300px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomLogo__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                            sx: {
                                flexGrow: 1
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                            spacing: 2,
                            direction: "row",
                            alignItems: "center",
                            children: [
                                isDesktop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nav__WEBPACK_IMPORTED_MODULE_8__/* .NavDesktop */ .KB, {
                                    isScrolling: isScrolling,
                                    isTransparent: transparent,
                                    navConfig: _nav__WEBPACK_IMPORTED_MODULE_8__/* .navConfig */ .KC
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {
                                    orientation: "vertical",
                                    sx: {
                                        height: 24
                                    }
                                }),
                                isDesktop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                    direction: "row",
                                    spacing: 1,
                                    children: token ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                        variant: "containedInherit",
                                        href: _routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].buyNow */ .Z.buyNow,
                                        target: "_blank",
                                        rel: "noopener",
                                        onClick: handleSignOut,
                                        children: "Logout"
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                href: "/sign-up",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                    variant: "containedInherit",
                                                    href: _routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].buyNow */ .Z.buyNow,
                                                    target: "_blank",
                                                    rel: "noopener",
                                                    children: "Sign Up"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                href: "/sign-in",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                    variant: "outlinedInherit",
                                                    sx: {
                                                        minWidth: "104px"
                                                    },
                                                    children: "Sign In"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        !isDesktop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nav__WEBPACK_IMPORTED_MODULE_8__/* .NavMobile */ .St, {
                            navConfig: _nav__WEBPACK_IMPORTED_MODULE_8__/* .navConfig */ .KC,
                            sx: {
                                ml: 1,
                                ...isScrolling && {
                                    color: "text.primary"
                                }
                            }
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

/***/ }),

/***/ 3540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavDesktop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8538);
/* harmony import */ var _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_chevron_up__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3991);
/* harmony import */ var _iconify_icons_carbon_chevron_up__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_up__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4338);
/* harmony import */ var _NavSubMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_9__]);
_components__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



// icons


// next


// @mui


// components

//

// ----------------------------------------------------------------------
const RootLinkStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Link, {
    shouldForwardProp: (prop)=>prop !== "active" && prop !== "scrolling" && prop !== "transparent" && prop !== "open"
})(({ active , scrolling , transparent , open , theme  })=>{
    const dotActiveStyle = {
        "&:before": {
            top: 0,
            width: 6,
            height: 6,
            bottom: 0,
            left: -14,
            content: '""',
            display: "block",
            margin: "auto 0",
            borderRadius: "50%",
            position: "absolute",
            backgroundColor: theme.palette.brandpurple.primary
        }
    };
    return {
        fontSize: theme.typography.subtitle2,
        fontWeight: theme.typography.fontWeightMedium,
        display: "flex",
        color: theme.palette.mode === "light" ? theme.palette.brandcolor.primary : "#fff",
        position: "relative",
        alignItems: "center",
        whiteSpace: "nowrap",
        transition: theme.transitions.create("opacity", {
            duration: theme.transitions.duration.shortest
        }),
        "&:hover": {
            // opacity: 0.72,
            textDecoration: "none",
            color: theme.palette.brandpurple.primary
        },
        ...active && {
            ...dotActiveStyle,
            color: theme.palette.brandpurple.primary,
            ...transparent && {
                color: theme.palette.brandpurple.primary
            },
            ...scrolling && {
                color: theme.palette.brandpurple.primary
            }
        },
        ...open && {
            color: theme.palette.brandpurple.primary
        }
    };
});
// ----------------------------------------------------------------------
NavDesktop.propTypes = {
    isScrolling: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    isTransparent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    navConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)
};
function NavDesktop({ isScrolling , isTransparent , navConfig  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
        direction: "row",
        spacing: 3,
        sx: {
            color: "#fff",
            ...isTransparent && {
                color: "inherit"
            },
            ...isScrolling && {
                color: "#fff"
            }
        },
        maxWidth: {
            md: "400px",
            lg: "100%"
        },
        className: "scrollBar",
        children: navConfig.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItemDesktop, {
                item: link,
                isScrolling: isScrolling,
                isTransparent: isTransparent
            }, link.title)
        )
    }));
};
// ----------------------------------------------------------------------
NavItemDesktop.propTypes = {
    isScrolling: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    isTransparent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    item: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
        path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    })
};
function NavItemDesktop({ item , isScrolling , isTransparent  }) {
    const { title , path , children  } = item;
    const { pathname , asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const isActiveRoot = path === pathname || path !== "/" && asPath.includes(path);
    const { 0: anchorEl , 1: setAnchorEl  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }
    function handleClose() {
        setAnchorEl(null);
    }
    // useEffect(() => {
    //   if (open) {
    //     handleClose();
    //   }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [pathname]);
    // const handleOpen = () => {
    //   setOpen(true);
    // };
    // const handleClose = () => {
    //   setOpen(false);
    // };
    if (children) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RootLinkStyle, {
                    // onClick={handleOpen}
                    // open={open}
                    "aria-owns": anchorEl ? "simple-menu" : undefined,
                    "aria-haspopup": "true",
                    onClick: handleClick,
                    onMouseOver: handleClick,
                    scrolling: isScrolling,
                    transparent: isTransparent,
                    children: [
                        title,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_9__/* .Iconify */ .Ir, {
                            icon: open ? (_iconify_icons_carbon_chevron_up__WEBPACK_IMPORTED_MODULE_4___default()) : (_iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3___default()),
                            sx: {
                                ml: 0.5,
                                width: 16,
                                height: 16
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavSubMenu__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    lists: children,
                    open: open,
                    handleClose: handleClose,
                    anchorEl: anchorEl
                })
            ]
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
        href: path,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootLinkStyle, {
            active: isActiveRoot,
            scrolling: isScrolling,
            transparent: isTransparent,
            children: title
        })
    }, title));
}

});

/***/ }),

/***/ 6431:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3726);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4338);
/* harmony import */ var _components_animate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_animate__WEBPACK_IMPORTED_MODULE_11__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components__WEBPACK_IMPORTED_MODULE_10__]);
([_components_animate__WEBPACK_IMPORTED_MODULE_11__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





// next


// @mui


// config

//


// ----------------------------------------------------------------------
const SubLinkStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItem, {
    shouldForwardProp: (prop)=>prop !== 'active'
})(({ active , theme  })=>({
        ...theme.typography.body3,
        padding: 0,
        width: 'auto',
        cursor: 'pointer',
        color: theme.palette.text.secondary,
        transition: theme.transitions.create('color'),
        '&:hover': {
            color: theme.palette.text.primary
        },
        ...active && {
            ...theme.typography.subtitle3,
            color: theme.palette.text.primary
        }
    })
);
const IconBulletStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
    shouldForwardProp: (prop)=>prop !== 'active'
})(({ active , theme  })=>({
        width: 12,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        '&:before': {
            content: '""',
            display: 'block',
            width: 4,
            height: 4,
            borderRadius: '50%',
            backgroundColor: theme.palette.text.disabled
        },
        ...active && {
            '&:before': {
                content: '""',
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: theme.palette.primary.main,
                transition: theme.transitions.create('all', {
                    duration: theme.transitions.duration.shortest
                })
            }
        }
    })
);
const ListSubheaderStyled = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListSubheader, {
        disableSticky: true,
        disableGutters: true,
        ...props
    })
)(({ theme  })=>({
        ...theme.typography.h5,
        marginBottom: theme.spacing(2.5),
        color: theme.palette.text.primary
    })
);
// ----------------------------------------------------------------------
NavDesktopMenu.propTypes = {
    isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    isScrolling: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    lists: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
function NavDesktopMenu({ lists , isOpen , onClose , isScrolling  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const theme1 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const carouselList = lists.filter((list)=>list.subheader !== 'Common'
    );
    const commonList = lists.filter((list)=>list.subheader === 'Common'
    )[0];
    const minList = lists.length > 5;
    const carouselSettings = {
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: Boolean(theme1.direction === 'rtl'),
        ...(0,_components__WEBPACK_IMPORTED_MODULE_10__/* .CarouselDots */ .A0)()
    };
    const handlePrevious = ()=>{
        var ref;
        (ref = carouselRef.current) === null || ref === void 0 ? void 0 : ref.slickPrev();
    };
    const handleNext = ()=>{
        var ref;
        (ref = carouselRef.current) === null || ref === void 0 ? void 0 : ref.slickNext();
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_animate__WEBPACK_IMPORTED_MODULE_11__/* .DialogAnimate */ .Kl, {
        hideBackdrop: true,
        maxWidth: false,
        open: isOpen,
        onClose: onClose,
        variants: (0,_components_animate__WEBPACK_IMPORTED_MODULE_11__/* .varFade */ .EU)({
            distance: 80,
            durationIn: 0.16,
            durationOut: 0.24,
            easeIn: 'easeIn',
            easeOut: 'easeOut'
        }).inRight,
        PaperProps: {
            sx: {
                m: 0,
                position: 'absolute',
                borderRadius: '0 !important',
                top: isScrolling ? _config__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_DESKTOP_HEIGHT */ .zj - 20 : _config__WEBPACK_IMPORTED_MODULE_9__/* .HEADER_DESKTOP_HEIGHT */ .zj
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
            container: true,
            columns: 15,
            spacing: 4,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                        sx: {
                            position: 'relative',
                            px: 2,
                            py: 6
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                                ref: carouselRef,
                                ...carouselSettings,
                                children: carouselList.map((list)=>{
                                    const { subheader , items , cover  } = list;
                                    const path1 = items.length > 0 ? items[0].path : '';
                                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.List, {
                                        disablePadding: true,
                                        sx: {
                                            px: 2
                                        },
                                        component: _components_animate__WEBPACK_IMPORTED_MODULE_11__/* .MotionContainer */ .NM,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.div, {
                                                variants: (0,_components_animate__WEBPACK_IMPORTED_MODULE_11__/* .varFade */ .EU)({
                                                    distance: 80
                                                }).inLeft,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListSubheaderStyled, {
                                                    children: subheader
                                                })
                                            }),
                                            cover ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                href: path1,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                    component: framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.a,
                                                    variants: (0,_components_animate__WEBPACK_IMPORTED_MODULE_11__/* .varFade */ .EU)({
                                                        distance: 80
                                                    }).inLeft,
                                                    sx: {
                                                        display: 'block'
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_10__/* .Image */ .Ee, {
                                                        alt: cover,
                                                        src: cover,
                                                        sx: {
                                                            mb: 2.5,
                                                            minHeight: 80,
                                                            borderRadius: 1.5,
                                                            cursor: 'pointer',
                                                            transition: theme1.transitions.create('opacity'),
                                                            border: (theme)=>`solid 1px ${theme.palette.divider}`
                                                            ,
                                                            '&:hover': {
                                                                opacity: 0.8
                                                            }
                                                        }
                                                    })
                                                })
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                sx: {
                                                    mb: 2.5,
                                                    height: 132,
                                                    borderRadius: 1.5,
                                                    display: 'flex',
                                                    typography: 'h5',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'text.disabled',
                                                    bgcolor: 'background.neutral'
                                                },
                                                children: "Coming Soon!"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                spacing: 1.5,
                                                alignItems: "flex-start",
                                                children: items === null || items === void 0 ? void 0 : items.map((item)=>{
                                                    const { title , path  } = item;
                                                    const active = router.pathname === path || router.asPath === path;
                                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkItem, {
                                                        title: title,
                                                        href: path,
                                                        active: active
                                                    }, title));
                                                })
                                            })
                                        ]
                                    }, subheader));
                                })
                            }),
                            minList && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_10__/* .CarouselArrows */ .i5, {
                                onNext: handleNext,
                                onPrevious: handlePrevious,
                                sx: {
                                    top: -28,
                                    position: 'relative',
                                    justifyContent: 'flex-end'
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                    item: true,
                    xs: 3,
                    sx: {
                        borderLeft: (theme)=>`dashed 1px ${theme.palette.divider}`
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.List, {
                        disablePadding: true,
                        sx: {
                            py: 6
                        },
                        component: _components_animate__WEBPACK_IMPORTED_MODULE_11__/* .MotionContainer */ .NM,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListSubheaderStyled, {
                                children: commonList.subheader
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                spacing: 1.5,
                                alignItems: "flex-start",
                                children: commonList.items.map((item)=>{
                                    const { title , path  } = item;
                                    const active = router.pathname === path;
                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkItem, {
                                        title: title,
                                        href: path,
                                        active: active
                                    }, title));
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
// ----------------------------------------------------------------------
LinkItem.propTypes = {
    active: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    href: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
function LinkItem({ title , href , active  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Link, {
            color: "inherit",
            underline: "hover",
            component: framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.a,
            variants: (0,_components_animate__WEBPACK_IMPORTED_MODULE_11__/* .varFade */ .EU)({
                distance: 12,
                durationIn: 0.16,
                durationOut: 0.12,
                easeIn: 'easeIn'
            }).inRight,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubLinkStyle, {
                active: active,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconBulletStyle, {
                        active: active
                    }),
                    title
                ]
            })
        })
    }, title));
}

});

/***/ }),

/***/ 9033:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavMobile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9369);
/* harmony import */ var _iconify_icons_carbon_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2893);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8538);
/* harmony import */ var _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3189);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3726);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4338);
/* harmony import */ var _components_animate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4744);
/* harmony import */ var _CustomLogo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9917);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_12__, _CustomLogo__WEBPACK_IMPORTED_MODULE_14__, _components_animate__WEBPACK_IMPORTED_MODULE_13__]);
([_components__WEBPACK_IMPORTED_MODULE_12__, _CustomLogo__WEBPACK_IMPORTED_MODULE_14__, _components_animate__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



// icons



// next


// @mui


// routes

// config

// components



// ----------------------------------------------------------------------
const RootLinkStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.ListItemButton, {
    shouldForwardProp: (prop)=>prop !== 'active'
})(({ active , theme  })=>({
        ...theme.typography.body2,
        height: 48,
        textTransform: 'capitalize',
        paddingLeft: theme.spacing(2.5),
        paddingRight: theme.spacing(2.5),
        color: theme.palette.text.secondary,
        ...active && {
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium,
            backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        }
    })
);
// ----------------------------------------------------------------------
NavMobile.propTypes = {
    navConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function NavMobile({ navConfig , sx  }) {
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { 0: drawerOpen , 1: setDrawerOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (drawerOpen) {
            handleDrawerClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    const handleDrawerOpen = ()=>{
        setDrawerOpen(true);
    };
    const handleDrawerClose = ()=>{
        setDrawerOpen(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_animate__WEBPACK_IMPORTED_MODULE_13__/* .IconButtonAnimate */ .w_, {
                color: "inherit",
                onClick: handleDrawerOpen,
                sx: sx,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_12__/* .Iconify */ .Ir, {
                    icon: (_iconify_icons_carbon_menu__WEBPACK_IMPORTED_MODULE_3___default())
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Drawer, {
                open: drawerOpen,
                onClose: handleDrawerClose,
                ModalProps: {
                    keepMounted: true
                },
                PaperProps: {
                    sx: {
                        width: _config__WEBPACK_IMPORTED_MODULE_11__/* .DRAWER_WIDTH */ .pG
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_12__/* .Scrollbar */ .eK, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                            sx: {
                                px: 2.5,
                                py: 3,
                                lineHeight: 0
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomLogo__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.List, {
                            sx: {
                                px: 0
                            },
                            children: navConfig.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItemMobile, {
                                    item: link
                                }, link.title)
                            )
                        })
                    ]
                })
            })
        ]
    }));
};
// ----------------------------------------------------------------------
NavItemMobile.propTypes = {
    item: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
        path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    })
};
function NavItemMobile({ item  }) {
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { title , path , children  } = item;
    const rootPath = pathname.split('/')[1];
    const isActiveRoot = pathname === path;
    const isActiveRootWithChild = pathname.includes(`/${rootPath}/`);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(isActiveRootWithChild);
    const handleOpen = ()=>{
        setOpen(!open);
    };
    if (children) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RootLinkStyle, {
                    onClick: handleOpen,
                    active: isActiveRootWithChild,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.ListItemText, {
                            disableTypography: true,
                            primary: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_12__/* .Iconify */ .Ir, {
                            icon: open ? (_iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_5___default()) : (_iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_4___default()),
                            sx: {
                                width: 16,
                                height: 16,
                                ml: 1
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Collapse, {
                    in: open,
                    timeout: "auto",
                    unmountOnExit: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                        sx: {
                            display: 'flex',
                            flexDirection: 'column-reverse'
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_12__/* .NavSection */ .yV, {
                            navConfig: children,
                            sx: {
                                // Root
                                position: 'relative',
                                '&:before': {
                                    top: 0,
                                    bottom: 0,
                                    height: 0.96,
                                    my: 'auto',
                                    left: 20,
                                    width: '1px',
                                    content: "''",
                                    bgcolor: 'divider',
                                    position: 'absolute'
                                },
                                '& .MuiListSubheader-root': {
                                    mb: 1
                                },
                                '& .MuiListItemButton-root': {
                                    backgroundColor: 'transparent',
                                    '&:before': {
                                        display: 'none'
                                    }
                                },
                                // Sub
                                '& .MuiCollapse-root': {
                                    '& .MuiList-root': {
                                        '&:before': {
                                            top: 0,
                                            bottom: 0,
                                            left: 40,
                                            my: 'auto',
                                            height: 0.82,
                                            width: '1px',
                                            content: "''",
                                            bgcolor: 'divider',
                                            position: 'absolute'
                                        }
                                    },
                                    '& .MuiListItemButton-root': {
                                        pl: 8,
                                        '& .MuiListItemIcon-root, .MuiTouchRipple-root': {
                                            display: 'none'
                                        },
                                        '&:hover': {
                                            backgroundColor: 'transparent'
                                        }
                                    }
                                }
                            }
                        })
                    })
                })
            ]
        }));
    }
    if (title === 'Documentation') {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Link, {
            href: path,
            underline: "none",
            target: "_blank",
            rel: "noopener",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootLinkStyle, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.ListItemText, {
                    disableTypography: true,
                    primary: title
                })
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: path,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootLinkStyle, {
            active: isActiveRoot,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.ListItemText, {
                disableTypography: true,
                primary: title
            })
        })
    }, title));
}

});

/***/ }),

/***/ 3134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavSubMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5907);


// next


// @mui


//

// ----------------------------------------------------------------------
const MenuItemStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active , theme  })=>({
        fontSize: theme.typography.subtitle2,
        fontWeight: theme.typography.fontWeightMedium,
        //width: 'auto',
        cursor: "pointer",
        color: theme.palette.brandcolor.primary,
        transition: theme.transitions.create("color"),
        "&:hover": {
            color: theme.palette.text.primary
        },
        ...active && {
            ...theme.typography.subtitle3,
            color: theme.palette.text.primary
        }
    })
);
const SubLinkStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active , theme  })=>({
        ...theme.typography.body3,
        fontSize: theme.typography.subtitle2,
        fontWeight: theme.typography.fontWeightMedium,
        padding: 0,
        width: "auto",
        cursor: "pointer",
        color: theme.palette.brandcolor.primary,
        transition: theme.transitions.create("color"),
        "&:hover": {
            color: theme.palette.text.primary
        },
        ...active && {
            ...theme.typography.subtitle3,
            color: theme.palette.text.primary
        }
    })
);
const IconBulletStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active , theme  })=>({
        width: 12,
        height: 24,
        display: "flex",
        alignItems: "center",
        color: theme.palette.brandcolor.primary,
        "&:before": {
            content: '""',
            display: "block",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: theme.palette.brandcolor.primary
        },
        ...active && {
            "&:before": {
                content: '""',
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: theme.palette.brandcolor.primary,
                transition: theme.transitions.create("all", {
                    duration: theme.transitions.duration.shortest
                })
            }
        }
    })
);
const ListSubheaderStyled = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListSubheader, {
        disableSticky: true,
        disableGutters: true,
        ...props
    })
)(({ theme  })=>({
        ...theme.typography.h5,
        marginBottom: theme.spacing(2.5),
        color: theme.palette.text.primary
    })
);
NavSubMenu.propTypes = {
    open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    lists: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    handleClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
function NavSubMenu({ lists , anchorEl , handleClose  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    //const minList = lists.length > 5;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Menu, {
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        id: "simple-menu",
        keepMounted: true,
        anchorEl: anchorEl,
        open: Boolean(anchorEl),
        onClose: handleClose,
        MenuListProps: {
            onMouseLeave: handleClose,
            disablePadding: true
        },
        getContentAnchorEl: null,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
            container: true,
            className: "scrollBar",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                    sx: {
                        position: "relative",
                        px: 2,
                        py: 2,
                        display: "flex"
                    },
                    children: lists.map((list)=>{
                        const { subheader , items  } = list;
                        const path1 = items.length > 0 ? items[0].path : "";
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.List, {
                            disablePadding: true,
                            sx: {
                                minWidth: "200px"
                            },
                            children: [
                                subheader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListSubheaderStyled, {
                                        children: subheader
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                    alignItems: "flex-start",
                                    children: items === null || items === void 0 ? void 0 : items.map((item)=>{
                                        const { title , path , src  } = item;
                                        const active = router.pathname === path || router.asPath === path;
                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkItem, {
                                            title: title,
                                            href: path,
                                            active: active,
                                            src: src
                                        }, title));
                                    })
                                })
                            ]
                        }, subheader));
                    })
                })
            })
        })
    }));
};
LinkItem.propTypes = {
    active: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    href: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
function LinkItem({ title , href , active , src  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Link, {
            color: "inherit",
            underline: "hover",
            sx: {
                minWidth: "100%"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MenuItemStyle, {
                active: active,
                children: [
                    src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        marginRight: "10px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            src: src,
                            sx: {
                                maxWidth: "20px",
                                maxHeight: "20px"
                            }
                        })
                    }),
                    title
                ]
            })
        })
    }, title));
}


/***/ }),

/***/ 6528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KC": () => (/* reexport safe */ _NavConfig__WEBPACK_IMPORTED_MODULE_0__.KC),
/* harmony export */   "St": () => (/* reexport safe */ _NavMobile__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "KB": () => (/* reexport safe */ _NavDesktop__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _NavConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3955);
/* harmony import */ var _NavMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9033);
/* harmony import */ var _NavDesktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3540);
/* harmony import */ var _NavDesktopMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6431);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavDesktopMenu__WEBPACK_IMPORTED_MODULE_3__, _NavDesktop__WEBPACK_IMPORTED_MODULE_2__, _NavMobile__WEBPACK_IMPORTED_MODULE_1__]);
([_NavDesktopMenu__WEBPACK_IMPORTED_MODULE_3__, _NavDesktop__WEBPACK_IMPORTED_MODULE_2__, _NavMobile__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





});

/***/ }),

/***/ 7705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ getUserCookie)
/* harmony export */ });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6153);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);

const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_0___default())();
const getUserCookie = ()=>{
    return cookies.get("jwt_token");
};


/***/ }),

/***/ 4707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ storeCookies),
/* harmony export */   "s": () => (/* binding */ removeCookies)
/* harmony export */ });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6153);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);

const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_0___default())();
const storeCookies = (data)=>{
    if (data) {
        cookies.set("jwt_token", data, {
            path: "/",
            sameSite: "strict",
            expires: new Date(new Date().getTime() + 100000 * 60),
            secure: true
        });
        console.log("Token stored in cookies");
    } else {
        console.log("Token not found for cookies");
    }
};
const removeCookies = ()=>{
    cookies.remove("jwt_token", {
        path: "/"
    });
};


/***/ })

};
;