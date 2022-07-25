"use strict";
exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 7680:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_trophy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6601);
/* harmony import */ var _iconify_icons_carbon_trophy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_trophy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_data_vis_4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9707);
/* harmony import */ var _iconify_icons_carbon_data_vis_4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_data_vis_4__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_carbon_increase_level__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(331);
/* harmony import */ var _iconify_icons_carbon_increase_level__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_increase_level__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_carbon_user_certification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8989);
/* harmony import */ var _iconify_icons_carbon_user_certification__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_user_certification__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6342);
/* harmony import */ var _iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4338);
/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7123);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_10__, _Team__WEBPACK_IMPORTED_MODULE_11__]);
([_components__WEBPACK_IMPORTED_MODULE_10__, _Team__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



// icons





// @mui


// utils
// components


// ----------------------------------------------------------------------
const SUMMARY = [
    {
        title: "Years of experience",
        total: 12,
        icon: (_iconify_icons_carbon_increase_level__WEBPACK_IMPORTED_MODULE_5___default())
    },
    {
        title: "Awards",
        total: 20,
        icon: (_iconify_icons_carbon_trophy__WEBPACK_IMPORTED_MODULE_3___default())
    },
    {
        title: "Projects",
        total: 150,
        icon: (_iconify_icons_carbon_data_vis_4__WEBPACK_IMPORTED_MODULE_4___default())
    },
    {
        title: "Happy clients",
        total: 32000,
        icon: (_iconify_icons_carbon_user_certification__WEBPACK_IMPORTED_MODULE_6___default())
    }, 
];
const COLORS = [
    "primary",
    "secondary",
    "warning",
    "success"
];
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.styled)("div")(({ theme  })=>({
        padding: theme.spacing(10, 0),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(15, 0)
        }
    })
);
const IconStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.styled)("div", {
    shouldForwardProp: (prop)=>prop !== "color"
})(({ color , theme  })=>({
        width: 160,
        height: 160,
        margin: "auto",
        display: "flex",
        borderRadius: "50%",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        color: theme.palette[color].darker,
        border: `dashed 2px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.alpha)(theme.palette[color].main, 0.24)}`,
        "&:before": {
            zIndex: 8,
            content: '""',
            borderRadius: "50%",
            position: "absolute",
            width: "calc(100% - 48px)",
            height: "calc(100% - 48px)",
            background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`
        },
        "& svg": {
            zIndex: 9
        }
    })
);
// ----------------------------------------------------------------------
function About() {
    const { 0: members , 1: setMembers  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        {
            id: 1,
            name: "Mustafa Assaad",
            role: "Founder & CEO",
            photo: `/assets/images/jpeg/mustafa.jpeg`,
            socialLinks: {
                facebook: `facebook.com`,
                instagram: `instagram.com`,
                linkedin: `https://www.linkedin.com/in/mustafa-assaad-b82839212`,
                twitter: `twitter.com`
            }
        },
        {
            id: 2,
            name: "Ali Balaghe",
            role: "CMO",
            photo: `/assets/images/jpeg/ali.jpeg`,
            socialLinks: {
                facebook: `facebook.com`,
                instagram: `https://instagram.com/alz_ecom?utm_medium=copy_lin`,
                linkedin: `linkedin.com`,
                twitter: `twitter.com`
            }
        },
        {
            id: 3,
            name: "Andy",
            role: "Token Economist and Writer",
            photo: `/assets/images/jpeg/andy.jpeg`,
            socialLinks: {
                facebook: `facebook.com`,
                instagram: `instagram.com`,
                linkedin: `linkedin.com`,
                twitter: `twitter.com`
            }
        },
        {
            id: 4,
            name: "Asad Ali",
            role: "Block Chain Developer",
            photo: `/assets/images/jpeg/asad.png`,
            socialLinks: {
                facebook: `facebook.com`,
                instagram: `instagram.com`,
                linkedin: `linkedin.com`,
                twitter: `twitter.com`
            }
        }, 
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {
                container: true,
                spacing: 3,
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        lg: 12,
                        sx: {
                            textAlign: {
                                xs: "center",
                                md: "left"
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                variant: "h2",
                                children: "ABOUT US"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                sx: {
                                    mt: 3,
                                    mb: 5,
                                    color: "text.secondary"
                                },
                                children: [
                                    "The future of buying and selling brand shares as NFTs.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "Hadaro is a multi chain platform offering a revolutionary experience for users to invest, sell and discover valuable NFTs as shares from real world brands.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                variant: "h2",
                                children: "VISION"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                sx: {
                                    mt: 3,
                                    mb: 5,
                                    color: "text.secondary"
                                },
                                children: [
                                    "Hadaro is built for mainstream adoption and focuses on turning the NFT industry into 100 billion dollar industry by 2025 all while creating a thriving token economy.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "At Hadaro we understand the importance of utility behind NFTs, that is the reason why NFTs have become extremely popular.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "Hadaro obsessively focuses on NFTs that provides access to exclusive utility from real world brands to consumers, changing the way we interact with brands forever.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "We strive to be the worlds most valuable NFT platform, every NFT is a valuable purchase for all investors and collectors. ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "Every NFT that’s listed on the hadaro marketplace is linked to exclusive real word utility, virtual experiences, iconic pieces, digital assets and so much more.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                variant: "h2",
                                children: "MISSION"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                sx: {
                                    mt: 3,
                                    mb: 5,
                                    color: "text.secondary"
                                },
                                children: "Hadaro’s strives to offer a smooth experience for the new age consumers to enter the NFT industry to invest, sell and discover the most richest and valuable NFTs as shares from their favourite real world brands."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                variant: "h2",
                                children: "COMPANY CULTURE"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                sx: {
                                    mt: 3,
                                    mb: 5,
                                    color: "text.secondary"
                                },
                                children: [
                                    "* Believe you are powerful and are capable of anything ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "* we challenge the status quo and give power back to the people through digital ownership. ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "* We focus obsessively on user experience because we are users ourselves and our community is our number 1 priority ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "* We empower self belief and ambitions to create a phenomenal world for now and future ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "* We find humour in the face of difficulties and continue solving problems together regardless",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "* We celebrate small wins and big wins together and develop deeper connections ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "* We don’t compete, we create & everyday is an advancement for all ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "* We go the extra mile * All work is efficient and high quality."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Team__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            members: members
                        })
                    })
                ]
            })
        })
    }));
};
// ----------------------------------------------------------------------
BoxItem.propTypes = {
    index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
        title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        total: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    })
};
function BoxItem({ value , index  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconStyle, {
                color: COLORS[index],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_10__/* .Iconify */ .Ir, {
                    icon: value.icon,
                    sx: {
                        width: 48,
                        height: 48
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                sx: {
                    color: "text.secondary"
                },
                children: value.title
            })
        ]
    }));
} // ----------------------------------------------------------------------

});

/***/ }),

/***/ 7123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Team)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TeamData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(547);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TeamData__WEBPACK_IMPORTED_MODULE_4__]);
_TeamData__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


// @mui


//

// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("div")(({ theme  })=>({
        padding: theme.spacing(8, 0),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(15, 0)
        }
    })
);
// ----------------------------------------------------------------------
Team.propTypes = {
    members: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)
};
function Team({ members  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                    variant: "h2",
                    sx: {
                        textAlign: "center",
                        mb: {
                            xs: 1,
                            md: 2
                        }
                    },
                    children: "The Team"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                    variant: "body1",
                    sx: {
                        textAlign: "center",
                        mb: {
                            xs: 8,
                            md: 10
                        }
                    },
                    children: "The Hadaro team believes web3.0 and NFTs have the potential to change the way we consume products and services with brands. The way we perceive and interact with businesses have changed towards a greater purpose for both brands and consumers."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    sx: {
                        display: "grid",
                        rowGap: {
                            xs: 4,
                            md: 5
                        },
                        columnGap: 3,
                        gridTemplateColumns: {
                            xs: "repeat(1, 1fr)",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(4, 1fr)"
                        }
                    },
                    children: members.map((member)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TeamData__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            member: member
                        }, member.id)
                    )
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TeamData)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4338);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__]);
_components__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


// @mui

// components

// ----------------------------------------------------------------------
TeamData.propTypes = {
    member: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        photo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        role: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        socialLinks: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
    })
};
function TeamData({ member  }) {
    const { name , role , photo , socialLinks  } = member;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                spacing: 0.5,
                sx: {
                    textAlign: "center",
                    pt: 3,
                    pb: 1.5
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "h6",
                        children: name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "body3",
                        sx: {
                            color: "text.disabled"
                        },
                        children: role
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Shape, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .BgOverlay */ .AU, {
                        sx: {
                            opacity: 0,
                            transition: (theme)=>theme.transitions.create("opacity", {
                                    easing: theme.transitions.easing.sharp,
                                    duration: theme.transitions.duration.short
                                })
                            ,
                            "&:hover": {
                                opacity: 1
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                width: 1,
                                zIndex: 9,
                                bottom: 24,
                                display: "flex",
                                position: "absolute",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .SocialsButton */ .Ij, {
                                color: "primary",
                                links: socialLinks
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .Ee, {
                        src: photo,
                        alt: name,
                        ratio: "1/1"
                    })
                ]
            })
        ]
    }));
};
// ----------------------------------------------------------------------
function Shape() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            top: 0,
            width: 1,
            height: 8,
            zIndex: 9,
            position: "absolute",
            color: "background.paper"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "1080",
            height: "32",
            viewBox: "0 0 1080 32",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M1080 32L0 0h1080v32z"
            })
        })
    }));
}

});

/***/ }),

/***/ 9924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FAQs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9485);
/* harmony import */ var _iconify_icons_carbon_add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_add__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_subtract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9296);
/* harmony import */ var _iconify_icons_carbon_subtract__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_subtract__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8148);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4338);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_7__]);
_components__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


// icons



// @mui


// components

// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.styled)("div")(({ theme  })=>({
        padding: theme.spacing(8, 0),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(10, 0, 15, 0)
        }
    })
);
// ----------------------------------------------------------------------
function FAQs() {
    const { 0: expanded , 1: setExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChange = (panel)=>(event, isExpanded)=>{
            setExpanded(isExpanded ? panel : false);
        }
    ;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                container: true,
                spacing: 3,
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                        item: true,
                        xs: 12,
                        md: 6,
                        lg: 6,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                spacing: 2,
                                sx: {
                                    mb: 5,
                                    textAlign: {
                                        xs: "center",
                                        md: "left"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                        variant: "overline",
                                        color: "text.disabled",
                                        children: "FAQS"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                        variant: "h2",
                                        children: "Frequently Asked Questions"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Accordion, {
                                expanded: expanded === "panel3",
                                onChange: handleChange("panel3"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AccordionSummary, {
                                        expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        }),
                                        "aria-controls": "panel3bh-content",
                                        id: "panel3bh-header",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                            children: "Advanced settings"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AccordionDetails, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                            children: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Accordion, {
                                expanded: expanded === "panel4",
                                onChange: handleChange("panel4"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AccordionSummary, {
                                        expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        }),
                                        "aria-controls": "panel4bh-content",
                                        id: "panel4bh-header",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                            children: "Personal data"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AccordionDetails, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                            children: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Accordion, {
                                expanded: expanded === "panel5",
                                onChange: handleChange("panel5"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AccordionSummary, {
                                        expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        }),
                                        "aria-controls": "panel5bh-content",
                                        id: "panel5bh-header",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                            children: "Personal data"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AccordionDetails, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                            children: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Accordion, {
                                expanded: expanded === "panel6",
                                onChange: handleChange("panel6"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AccordionSummary, {
                                        expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        }),
                                        "aria-controls": "panel6bh-content",
                                        id: "panel6bh-header",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                            children: "Personal data"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AccordionDetails, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                            children: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Accordion, {
                                expanded: expanded === "panel7",
                                onChange: handleChange("panel7"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AccordionSummary, {
                                        expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        }),
                                        "aria-controls": "panel7bh-content",
                                        id: "panel7bh-header",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                            children: "Personal data"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AccordionDetails, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                            children: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                        item: true,
                        xs: 12,
                        md: 6,
                        lg: 5,
                        sx: {
                            display: {
                                xs: "none",
                                md: "block"
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .Image */ .Ee, {
                            alt: "faqs",
                            src: "https://zone-assets-api.vercel.app/assets/illustrations/illustration_faqs.svg"
                        })
                    })
                ]
            })
        })
    }));
};

});

/***/ }),

/***/ 1962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HomeHero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_launch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5997);
/* harmony import */ var _iconify_icons_carbon_launch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_launch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5480);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3189);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4338);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_7__, _hooks__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_7__, _hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


// icons

// @mui


// hooks

// routes

// components

// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(({ theme  })=>({
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url("/assets/images/jpeg/hero-background.webp")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
        [theme.breakpoints.up("md")]: {
            height: "100vh"
        }
    })
);
// ----------------------------------------------------------------------
function HomeHero() {
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const container = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useBoundingClientRect */ .ZY)(containerRef);
    const offsetLeft = container === null || container === void 0 ? void 0 : container.left;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {
            sx: {
                height: 1
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                container: true,
                columnSpacing: 3,
                alignItems: "center",
                sx: {
                    height: 1
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                        item: true,
                        xs: 12,
                        md: 5,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                            spacing: 5,
                            alignItems: {
                                xs: "center",
                                md: "flex-start"
                            },
                            justifyContent: "center",
                            sx: {
                                py: 15,
                                textAlign: {
                                    xs: "center",
                                    md: "left"
                                },
                                color: "#fff"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                    variant: "h3",
                                    children: "The Stock Market of NFTs"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                    variant: "body1",
                                    children: "Hadaro is a multi chain platform offering a revolutionary experience for users to invest, sell and discover valuable NFTs as shares from real world brands."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    color: "inherit",
                                    size: "large",
                                    variant: "contained",
                                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .Iconify */ .Ir, {
                                        icon: (_iconify_icons_carbon_launch__WEBPACK_IMPORTED_MODULE_2___default())
                                    }),
                                    target: "_blank",
                                    rel: "noopener",
                                    href: _routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].figmaPreview */ .Z.figmaPreview,
                                    children: "About Us"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                        item: true,
                        xs: 12,
                        md: 7,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                            ref: containerRef
                        })
                    })
                ]
            })
        })
    }));
};

});

/***/ }),

/***/ 734:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xB": () => (/* reexport safe */ _home_HomeHero__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "J7": () => (/* reexport safe */ _faq_FAQs__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "CL": () => (/* reexport safe */ _about_About__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "Mo": () => (/* reexport safe */ _signup_SignUp__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "cL": () => (/* reexport safe */ _signup_SignIn__WEBPACK_IMPORTED_MODULE_6__.Z)
/* harmony export */ });
/* harmony import */ var _slider_AuctionSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5201);
/* harmony import */ var _slider_CustomSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _home_HomeHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1962);
/* harmony import */ var _faq_FAQs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9924);
/* harmony import */ var _about_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7680);
/* harmony import */ var _signup_SignUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5149);
/* harmony import */ var _signup_SignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8695);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_signup_SignIn__WEBPACK_IMPORTED_MODULE_6__, _signup_SignUp__WEBPACK_IMPORTED_MODULE_5__, _about_About__WEBPACK_IMPORTED_MODULE_4__, _faq_FAQs__WEBPACK_IMPORTED_MODULE_3__, _home_HomeHero__WEBPACK_IMPORTED_MODULE_2__, _slider_CustomSlider__WEBPACK_IMPORTED_MODULE_1__, _slider_AuctionSlider__WEBPACK_IMPORTED_MODULE_0__]);
([_signup_SignIn__WEBPACK_IMPORTED_MODULE_6__, _signup_SignUp__WEBPACK_IMPORTED_MODULE_5__, _about_About__WEBPACK_IMPORTED_MODULE_4__, _faq_FAQs__WEBPACK_IMPORTED_MODULE_3__, _home_HomeHero__WEBPACK_IMPORTED_MODULE_2__, _slider_CustomSlider__WEBPACK_IMPORTED_MODULE_1__, _slider_AuctionSlider__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








});

/***/ }),

/***/ 8695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4338);
/* harmony import */ var _apis_users_CreateUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3589);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_storeCookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4707);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];









const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)((theme)=>({
        root: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            "& .MuiTextField-root": {
                margin: "5px",
                width: "300px"
            },
            "& .MuiButtonBase-root": {
                margin: "10px"
            }
        }
    })
);
const Form = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const classes = useStyles();
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleSubmit = async (e)=>{
        var ref;
        e.preventDefault();
        const payload = {
            email: email,
            password: password
        };
        const user = await (0,_apis_users_CreateUser__WEBPACK_IMPORTED_MODULE_5__/* .userSignIn */ .ii)(payload);
        console.log(user);
        if (Object.keys(user === null || user === void 0 ? void 0 : (ref = user.data) === null || ref === void 0 ? void 0 : ref.data).length !== 0) {
            var ref1, ref2;
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("Sign in successfully", {
                autoClose: 1000
            });
            (0,_utils_storeCookies__WEBPACK_IMPORTED_MODULE_8__/* .storeCookies */ .R)(user === null || user === void 0 ? void 0 : (ref1 = user.data) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.data) === null || ref2 === void 0 ? void 0 : ref2.token);
            router.push("/");
        } else {
            var ref3;
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(user === null || user === void 0 ? void 0 : (ref3 = user.data) === null || ref3 === void 0 ? void 0 : ref3.message);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        container: true,
        spacing: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.NoSsr, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 6,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: classes.root,
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                label: "Email",
                                variant: "filled",
                                type: "email",
                                required: true,
                                value: email,
                                onChange: (e)=>setEmail(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                label: "Password",
                                variant: "filled",
                                type: "password",
                                required: true,
                                value: password,
                                onChange: (e)=>setPassword(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    variant: "containedInherit",
                                    onClick: (e)=>handleSubmit(e)
                                    ,
                                    children: "Sign In"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 5,
                    sx: {
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee, {
                        alt: "signup",
                        src: "https://zone-assets-api.vercel.app/assets/illustrations/illustration_faqs.svg"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

});

/***/ }),

/***/ 5149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4338);
/* harmony import */ var _apis_users_CreateUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3589);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)((theme)=>({
        root: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            "& .MuiTextField-root": {
                margin: "5px",
                width: "300px"
            },
            "& .MuiButtonBase-root": {
                margin: "10px"
            }
        }
    })
);
const Form = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const classes = useStyles();
    // create state variables for each input
    const { 0: firstName , 1: setFirstName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: lastName , 1: setLastName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleSubmit = async (e)=>{
        var ref, ref1;
        e.preventDefault();
        const payload = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        };
        const user = await (0,_apis_users_CreateUser__WEBPACK_IMPORTED_MODULE_5__/* .userSignUp */ .EQ)(payload);
        console.log(Object.keys(user === null || user === void 0 ? void 0 : (ref = user.data) === null || ref === void 0 ? void 0 : ref.data).length);
        if (Object.keys(user === null || user === void 0 ? void 0 : (ref1 = user.data) === null || ref1 === void 0 ? void 0 : ref1.data).length !== 0) {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("You have been sign up successfully", {
                autoClose: 1000
            });
            router.push("/");
        } else {
            var ref2;
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(user === null || user === void 0 ? void 0 : (ref2 = user.data) === null || ref2 === void 0 ? void 0 : ref2.message);
        }
    };
    const handleClear = ()=>{
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        container: true,
        spacing: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.NoSsr, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 6,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: classes.root,
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                label: "First Name",
                                variant: "filled",
                                required: true,
                                value: firstName,
                                onChange: (e)=>setFirstName(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                label: "Last Name",
                                variant: "filled",
                                required: true,
                                value: lastName,
                                onChange: (e)=>setLastName(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                label: "Email",
                                variant: "filled",
                                type: "email",
                                required: true,
                                value: email,
                                onChange: (e)=>setEmail(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                label: "Password",
                                variant: "filled",
                                type: "password",
                                required: true,
                                value: password,
                                onChange: (e)=>setPassword(e.target.value)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                        variant: "containedInherit",
                                        onClick: handleClear,
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                        type: "submit",
                                        variant: "containedInherit",
                                        color: "primary",
                                        children: "Signup"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 5,
                    sx: {
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee, {
                        alt: "signup",
                        src: "https://zone-assets-api.vercel.app/assets/illustrations/illustration_faqs.svg"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

});

/***/ }),

/***/ 5201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_shared__WEBPACK_IMPORTED_MODULE_4__]);
_components_shared__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


// mui

// slider

// common

function AuctionSlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, 
        ]
    };
    return(/*#__PURE__*/ _jsx(Container, {
        maxWidth: false,
        sx: {
            maxWidth: '1300px',
            pt: '150px'
        },
        children: /*#__PURE__*/ _jsxs(Grid, {
            container: true,
            children: [
                /*#__PURE__*/ _jsx(Grid, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ _jsx(Box, {
                        sx: {
                            width: '100%',
                            height: 'auto',
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'center',
                            marginBottom: '59px !important',
                            padding: {
                                md: '0px 20px',
                                lg: '0px 40px'
                            }
                        },
                        children: /*#__PURE__*/ _jsx(CardHeading, {
                            text: "Live Auctions"
                        })
                    })
                }),
                /*#__PURE__*/ _jsx(Grid, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ _jsx(Box, {
                        children: /*#__PURE__*/ _jsxs(Slider, {
                            ...settings,
                            children: [
                                /*#__PURE__*/ _jsx(AuctionCard, {
                                }),
                                /*#__PURE__*/ _jsx(AuctionCard, {
                                }),
                                /*#__PURE__*/ _jsx(AuctionCard, {
                                }),
                                /*#__PURE__*/ _jsx(AuctionCard, {
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 7:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4338);
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_shared__WEBPACK_IMPORTED_MODULE_7__, _components__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
([_components_shared__WEBPACK_IMPORTED_MODULE_7__, _components__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




// next
// @mui


//


// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
function CustomSlider() {
    const theme = useTheme();
    const carouselRef = useRef(null);
    const carouselSettings = {
        // arrows: false,
        // dots: true,
        // infinite: false,
        // slidesToShow: 4,
        // slidesToScroll: 1,
        // rtl: Boolean(theme.direction === 'rtl'),
        // ...CarouselDots(),
        // centerMode: true, // - (Gilad, 20.2.17) - we wanted it but it doesn't work for some reason...
        // draggable: true,
        // speed: 500,
        // slidesToShow: 3, //changes on responsive
        // slidesToScroll: 1,
        // responsive: [{ breakpoint: 500, settings: { autoplay: true, slidesToShow: 1 } }],
        // dots: true,
        //...CarouselDots(),
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        arrows: true,
        // centerPadding: '60px',
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 500,
        dots: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }, 
        ]
    };
    const handlePrevious = ()=>{
        var ref;
        (ref = carouselRef.current) === null || ref === void 0 ? void 0 : ref.slickPrev();
    };
    const handleNext = ()=>{
        var ref;
        (ref = carouselRef.current) === null || ref === void 0 ? void 0 : ref.slickNext();
    };
    return(/*#__PURE__*/ _jsx(Container, {
        maxWidth: false,
        sx: {
            maxWidth: '1300px',
            pt: '150px'
        },
        children: /*#__PURE__*/ _jsxs(Grid, {
            container: true,
            children: [
                /*#__PURE__*/ _jsx(Grid, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ _jsx(Box, {
                        sx: {
                            width: '100%',
                            height: 'auto',
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'center',
                            marginBottom: '59px !important',
                            padding: {
                                md: '0px 20px',
                                lg: '0px 40px'
                            }
                        },
                        children: /*#__PURE__*/ _jsx(CardHeading, {
                            text: "Discover, collect, Create and sell extraordinary NFTs"
                        })
                    })
                }),
                /*#__PURE__*/ _jsx(Grid, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ _jsxs(Box, {
                        children: [
                            /*#__PURE__*/ _jsxs(Slider, {
                                ref: carouselRef,
                                ...carouselSettings,
                                children: [
                                    /*#__PURE__*/ _jsx(Box, {
                                        component: m.a,
                                        sx: {
                                            borderRadius: 1.5
                                        },
                                        children: /*#__PURE__*/ _jsx(Image, {
                                            alt: "cover",
                                            src: "/assets/images/svgs/noteable2.svg",
                                            sx: {
                                                borderRadius: 1.5,
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    opacity: 0.8
                                                }
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(Box, {
                                        component: m.a,
                                        sx: {
                                            borderRadius: 1.5
                                        },
                                        children: /*#__PURE__*/ _jsx(Image, {
                                            alt: "cover",
                                            src: "/assets/images/svgs/noteable1.svg",
                                            sx: {
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    opacity: 0.8
                                                }
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(Box, {
                                        component: m.a,
                                        sx: {
                                            borderRadius: 1.5
                                        },
                                        children: /*#__PURE__*/ _jsx(Image, {
                                            alt: "cover",
                                            src: "/assets/images/svgs/noteable2.svg",
                                            sx: {
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    opacity: 0.8
                                                }
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(Box, {
                                        component: m.a,
                                        sx: {
                                            borderRadius: 1.5
                                        },
                                        children: /*#__PURE__*/ _jsx(Image, {
                                            alt: "cover",
                                            src: "/assets/images/svgs/noteable3.svg",
                                            sx: {
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    opacity: 0.8
                                                }
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(Box, {
                                        component: m.a,
                                        sx: {
                                            borderRadius: 1.5
                                        },
                                        children: /*#__PURE__*/ _jsx(Image, {
                                            alt: "cover",
                                            src: "/assets/images/svgs/noteable1.svg",
                                            sx: {
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    opacity: 0.8
                                                }
                                            }
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx(CarouselArrows, {
                                onNext: handleNext,
                                onPrevious: handlePrevious,
                                sx: {
                                    top: -10,
                                    position: 'relative',
                                    justifyContent: 'flex-end'
                                }
                            })
                        ]
                    })
                })
            ]
        })
    }));
};

});

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