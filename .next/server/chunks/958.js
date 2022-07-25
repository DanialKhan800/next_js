"use strict";
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 3589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Cz": () => (/* binding */ sendEmail),
  "ii": () => (/* binding */ userSignIn),
  "EQ": () => (/* binding */ userSignUp)
});

// EXTERNAL MODULE: ./src/utils/axios.js
var axios = __webpack_require__(2369);
;// CONCATENATED MODULE: ./src/apis/ApiRoutes.js
const ApiRoutes = {
    sign_in: "/auth/signin",
    sign_up: "/auth/signup",
    email: "/email"
};
/* harmony default export */ const apis_ApiRoutes = (ApiRoutes);

;// CONCATENATED MODULE: ./src/apis/users/CreateUser.js


const userSignUp = async (payload)=>{
    try {
        return await axios/* default.post */.Z.post(`${apis_ApiRoutes.sign_up}`, payload);
    } catch (error) {
        return {
            status: 404
        };
    }
};
const userSignIn = async (payload)=>{
    try {
        return await axios/* default.post */.Z.post(`${apis_ApiRoutes.sign_in}`, payload);
    } catch (error) {
        return {
            status: 404
        };
    }
};
const sendEmail = async (userEmail, token)=>{
    try {
        return await axios/* default.post */.Z.post(`${apis_ApiRoutes.email}`, {
            email: userEmail
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
    } catch (error) {
        return {
            status: 404
        };
    }
};


/***/ }),

/***/ 1741:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_3__);




function CardHeading({ text , children  }) {
    const theme = useTheme();
    return(/*#__PURE__*/ _jsx(Box, {
        children: /*#__PURE__*/ _jsxs(Typography, {
            variant: "h1",
            sx: {
                color: theme.palette.brandcolor.primary
            },
            children: [
                text,
                children
            ]
        })
    }));
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CardHeading)));


/***/ }),

/***/ 1092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CustomEmail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getCookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7705);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apis_users_CreateUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3589);






function CustomEmail() {
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const token = (0,_utils_getCookies__WEBPACK_IMPORTED_MODULE_3__/* .getUserCookie */ .d)();
    const handleSubmit = async ()=>{
        if (token) {
            const result = emailValidation(email);
            if (result) {
                console.log(email);
                console.log(token);
                const data = await (0,_apis_users_CreateUser__WEBPACK_IMPORTED_MODULE_5__/* .sendEmail */ .Cz)(email, token);
                if (data) {
                    setEmail("");
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success("Email subscribed successfully", {
                        autoClose: 1000
                    });
                }
            }
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Sign up first to connect with Hadaro");
        }
    };
    const emailValidation = (emailData)=>{
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailData || regex.test(emailData) === false) {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Email is not valid");
            return false;
        }
        return true;
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FilledInput, {
            placeholder: "Enter your Email",
            value: email,
            onChange: (e)=>setEmail(e.target.value)
            ,
            endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputAdornment, {
                position: "end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "containedInherit",
                    size: "large",
                    sx: {
                        borderRadius: "0px 10px 10px 0px",
                        px: 4,
                        height: "40px"
                    },
                    onClick: handleSubmit,
                    children: "Email Me!"
                })
            }),
            sx: {
                pr: 0,
                "& .MuiFilledInput-input": {
                    py: "14px"
                },
                background: "black",
                borderRadius: 1.5,
                //minWidth: '400px',
                height: "40px",
                width: "100%"
            }
        })
    }));
};


/***/ }),

/***/ 7622:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4338);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_2__]);
___WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const MenuItemStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
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
function CustomMenu({ anchorEl , handleClose , data  }) {
    return(/*#__PURE__*/ _jsx(Menu, {
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        id: "simple-menu",
        anchorEl: anchorEl,
        keepMounted: true,
        autoFocus: false,
        open: Boolean(anchorEl),
        onClose: handleClose,
        MenuListProps: {
            onMouseLeave: handleClose,
            disablePadding: true
        },
        getContentAnchorEl: null,
        PaperProps: {
            style: {
                minWidth: 150,
                marginTop: 5
            }
        },
        children: data && data.length > 0 && data.map((menu)=>{
            return(/*#__PURE__*/ _jsx(NextLink, {
                href: menu.path,
                passHref: true,
                children: /*#__PURE__*/ _jsxs(MenuItemStyle, {
                    children: [
                        menu.src && /*#__PURE__*/ _jsx(Box, {
                            marginRight: "10px",
                            children: /*#__PURE__*/ _jsx(Image, {
                                src: menu.src,
                                sx: {
                                    maxWidth: "20px",
                                    maxHeight: "20px"
                                }
                            })
                        }),
                        menu.title
                    ]
                })
            }, menu.title));
        })
    }));
};

});

/***/ }),

/***/ 2828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5907);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);





function LikesSection({ src , text  }) {
    const theme = useTheme();
    return(/*#__PURE__*/ _jsxs(Box, {
        display: "flex",
        alignItems: "center",
        children: [
            /*#__PURE__*/ _jsx(Image, {
                src: src
            }),
            /*#__PURE__*/ _jsx(Typography, {
                variant: "body0",
                sx: {
                    ml: '10px'
                },
                children: text
            })
        ]
    }));
};


/***/ }),

/***/ 8403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5907);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);





function PriceSection({ src , text  }) {
    const theme = useTheme();
    return(/*#__PURE__*/ _jsxs(Box, {
        display: "flex",
        alignItems: "center",
        children: [
            /*#__PURE__*/ _jsx(Image, {
                src: src
            }),
            /*#__PURE__*/ _jsx(Typography, {
                variant: "h5",
                sx: {
                    marginLeft: '10px',
                    color: theme.palette.brandpurple.primary
                },
                children: text
            })
        ]
    }));
};


/***/ }),

/***/ 959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5907);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);





function ViewsSection({ src , text  }) {
    const theme = useTheme();
    return(/*#__PURE__*/ _jsxs(Box, {
        display: "flex",
        alignItems: "center",
        children: [
            /*#__PURE__*/ _jsx(Image, {
                src: src
            }),
            /*#__PURE__*/ _jsx(Typography, {
                variant: "body4",
                sx: {
                    ml: '10px'
                },
                children: text
            })
        ]
    }));
};


/***/ }),

/***/ 8972:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4338);
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6451);
/* harmony import */ var _LikesSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2828);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_shared__WEBPACK_IMPORTED_MODULE_4__, _components__WEBPACK_IMPORTED_MODULE_3__]);
([_components_shared__WEBPACK_IMPORTED_MODULE_4__, _components__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//mui

// shared



function AuctionCard() {
    let image = '/assets/images/svgs/noteable1.svg';
    const sectionStyle = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '410px',
        borderRadius: '20px'
    };
    return(/*#__PURE__*/ _jsxs(Box, {
        className: "box",
        children: [
            /*#__PURE__*/ _jsx(Box, {
                padding: 3,
                children: /*#__PURE__*/ _jsxs(Grid, {
                    style: sectionStyle,
                    container: true,
                    display: "flex",
                    direction: 'column',
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ _jsx(Grid, {
                            item: true,
                            pl: 4,
                            pt: 1,
                            display: "flex",
                            justifyContent: "flex-start",
                            children: /*#__PURE__*/ _jsxs(AvatarGroup, {
                                max: 3,
                                spacing: "small",
                                children: [
                                    /*#__PURE__*/ _jsx(Avatar, {
                                        alt: "Remy Sharp",
                                        src: "/assets/images/svgs/stagelogo.svg"
                                    }),
                                    /*#__PURE__*/ _jsx(Avatar, {
                                        alt: "Travis Howard",
                                        src: "/assets/images/svgs/stagelogo.svg"
                                    }),
                                    /*#__PURE__*/ _jsx(Avatar, {
                                        alt: "Cindy Baker",
                                        src: "/assets/images/svgs/stagelogo.svg"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx(Grid, {
                            item: true,
                            display: "flex",
                            justifyContent: "center",
                            height: "100px",
                            children: /*#__PURE__*/ _jsx(Box, {
                                className: "timer-box",
                                display: "flex",
                                alignItems: 'center',
                                px: 2,
                                children: /*#__PURE__*/ _jsxs(Grid, {
                                    container: true,
                                    display: 'flex',
                                    alignItems: "center",
                                    spacing: 1,
                                    children: [
                                        /*#__PURE__*/ _jsx(Grid, {
                                            item: true,
                                            children: /*#__PURE__*/ _jsx(Typography, {
                                                variant: "subtitle1",
                                                children: "Time Left"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx(Grid, {
                                            item: true,
                                            children: /*#__PURE__*/ _jsx(Box, {
                                                width: "13px",
                                                height: "18px",
                                                children: /*#__PURE__*/ _jsx(Image, {
                                                    src: "/assets/images/svgs/fireIcon.svg"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx(Grid, {
                                            item: true,
                                            children: /*#__PURE__*/ _jsx(Box, {
                                                children: /*#__PURE__*/ _jsx(Typography, {
                                                    variant: "h4",
                                                    children: "02:05:55"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                px: 3,
                pb: 2,
                children: /*#__PURE__*/ _jsxs(Grid, {
                    container: true,
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ _jsxs(Grid, {
                            item: true,
                            xs: 7,
                            children: [
                                /*#__PURE__*/ _jsx(Typography, {
                                    variant: "h5",
                                    children: "Undersea Rock"
                                }),
                                /*#__PURE__*/ _jsx(LikesSection, {
                                    src: "/assets/images/svgs/fireIcon.svg",
                                    text: "90"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Grid, {
                            item: true,
                            xs: 5,
                            display: "flex",
                            justifyContent: 'flex-end',
                            alignItems: "center",
                            height: '100%',
                            children: /*#__PURE__*/ _jsx(PriceSection, {
                                src: "/assets/images/svgs/fireIcon.svg",
                                text: "0.908 ETH"
                            })
                        })
                    ]
                })
            })
        ]
    }));
};

});

/***/ }),

/***/ 4024:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5907);




const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)('div')(({ theme  })=>({
        overflow: 'hidden',
        position: 'relative'
    })
);
function ContainedImageCard({ cardWidth , cardHeight , src , alt , width , borderRadius , height , ...props }) {
    return(/*#__PURE__*/ _jsx(RootStyle, {
        children: /*#__PURE__*/ _jsx(Card, {
            sx: {
                maxWidth: {
                    cardWidth
                },
                borderRadius: {
                    borderRadius
                },
                height: {
                    cardHeight
                }
            },
            children: /*#__PURE__*/ _jsx(Image, {
                src: src,
                alt: alt,
                width: width,
                height: height,
                ...props
            })
        })
    }));
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ContainedImageCard)));


/***/ }),

/***/ 6451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gp": () => (/* reexport safe */ _CustomEmail__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _card_ContainedImageCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4024);
/* harmony import */ var _ViewsSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(959);
/* harmony import */ var _CardHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1741);
/* harmony import */ var _CustomMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7622);
/* harmony import */ var _CustomEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1092);
/* harmony import */ var _card_AuctionCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8972);
/* harmony import */ var _PriceSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8403);
/* harmony import */ var _LikesSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2828);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_card_AuctionCard__WEBPACK_IMPORTED_MODULE_5__, _CustomMenu__WEBPACK_IMPORTED_MODULE_3__]);
([_card_AuctionCard__WEBPACK_IMPORTED_MODULE_5__, _CustomMenu__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









});

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


/***/ })

};
;