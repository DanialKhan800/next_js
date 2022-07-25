"use strict";
exports.id = 724;
exports.ids = [724];
exports.modules = {

/***/ 9724:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8538);
/* harmony import */ var _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2893);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var _mui_lab_Masonry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1584);
/* harmony import */ var _mui_lab_Masonry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_Masonry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5480);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4338);
/* harmony import */ var _nav_NavConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3955);
/* harmony import */ var _CustomLogo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9917);
/* harmony import */ var src_components_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_10__, src_components_shared__WEBPACK_IMPORTED_MODULE_13__, _CustomLogo__WEBPACK_IMPORTED_MODULE_12__, _hooks__WEBPACK_IMPORTED_MODULE_9__]);
([_components__WEBPACK_IMPORTED_MODULE_10__, src_components_shared__WEBPACK_IMPORTED_MODULE_13__, _CustomLogo__WEBPACK_IMPORTED_MODULE_12__, _hooks__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



// icons


// next

// @mui



// hooks

// components

//



// ----------------------------------------------------------------------
function Footer() {
    const isDesktop = (0,_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useResponsive */ .Fs)("up", "md");
    const lists = _nav_NavConfig__WEBPACK_IMPORTED_MODULE_11__/* .FooterPageLinks.filter */ .Gb.filter((list)=>list.subheader !== "Coming Soon"
    );
    const renderLists = isDesktop ? lists : lists.sort((listA, listB)=>Number(listA.order) - Number(listB.order)
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Divider, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Container, {
                sx: {
                    py: {
                        xs: 8,
                        md: 10
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                    container: true,
                    spacing: 3,
                    justifyContent: {
                        md: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                            item: true,
                            xs: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                spacing: {
                                    xs: 3,
                                    md: 5
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                        alignItems: "flex-start",
                                        spacing: 3,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomLogo__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                        spacing: 2,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                spacing: 1,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                                    variant: "h6",
                                                    children: "Be the first to find out when we launch"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_shared__WEBPACK_IMPORTED_MODULE_13__/* .CustomEmail */ .gp, {
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_Masonry__WEBPACK_IMPORTED_MODULE_6___default()), {
                                columns: 3,
                                spacing: 3,
                                children: renderLists.map((list, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListDesktop, {
                                        list: list
                                    }, index)
                                )
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                spacing: 1.5,
                                children: renderLists.map((list, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListMobile, {
                                        list: list
                                    }, index)
                                )
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Divider, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Container, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                    direction: {
                        xs: "column",
                        md: "row"
                    },
                    spacing: 2.5,
                    justifyContent: "space-between",
                    sx: {
                        py: 3,
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                            variant: "subtitle1",
                            children: "Hadaro, Inc. All Rights Reserved"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                            direction: "row",
                            spacing: 3,
                            justifyContent: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_10__/* .SocialsButton */ .Ij, {
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
// ----------------------------------------------------------------------
NextLinkItem.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function NextLinkItem({ children , sx , ...other }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
        passHref: true,
        ...other,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Link, {
            variant: "body3",
            sx: {
                mt: 1,
                color: theme.palette.mode === "light" ? theme.palette.brandcolor.primary : "#fff",
                "&:hover": {
                    color: theme.palette.mode === "light" ? theme.palette.brandcolor.primary : "#fff"
                },
                ...sx
            },
            children: children
        })
    }));
}
// ----------------------------------------------------------------------
ListDesktop.propTypes = {
    list: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
        subheader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    })
};
function ListDesktop({ list  }) {
    const { subheader , items  } = list;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
        alignItems: "flex-start",
        sx: {
            pb: {
                md: 1
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                variant: "h6",
                children: subheader
            }),
            items === null || items === void 0 ? void 0 : items.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextLinkItem, {
                    href: link.path,
                    children: link.title
                }, link.title)
            )
        ]
    }));
}
// ----------------------------------------------------------------------
ListMobile.propTypes = {
    list: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
        subheader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    })
};
function ListMobile({ list  }) {
    const { subheader , items  } = list;
    const { 0: expand , 1: setExpand  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const onExpand = ()=>{
        setExpand(!expand);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
        spacing: 1.5,
        alignItems: "flex-start",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                variant: "h6",
                onClick: onExpand,
                sx: {
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    subheader,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_10__/* .Iconify */ .Ir, {
                        icon: expand ? (_iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3___default()) : (_iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_4___default()),
                        sx: {
                            width: 20,
                            height: 20,
                            ml: 0.5
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Collapse, {
                in: expand,
                sx: {
                    width: 1
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                    sx: {
                        display: "grid",
                        rowGap: 1,
                        columnGap: 3,
                        gridTemplateColumns: {
                            xs: "repeat(1, 1fr)",
                            sm: "repeat(2, 1fr)"
                        }
                    },
                    children: items === null || items === void 0 ? void 0 : items.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextLinkItem, {
                            href: link.path,
                            children: link.title
                        }, link.title)
                    )
                })
            })
        ]
    }));
}

});

/***/ })

};
;