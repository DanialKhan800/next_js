"use strict";
exports.id = 623;
exports.ids = [623];
exports.modules = {

/***/ 4623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);


// next

//
const Header = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(11), __webpack_require__.e(131), __webpack_require__.e(571)]).then(__webpack_require__.bind(__webpack_require__, 5571))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(5571)
            ]
        ,
        modules: [
            "../src/layouts/index.js -> " + "./header/Header"
        ]
    },
    ssr: false
});
const HeaderSimple = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(131), __webpack_require__.e(540)]).then(__webpack_require__.bind(__webpack_require__, 5540))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(5540)
            ]
        ,
        modules: [
            "../src/layouts/index.js -> " + "./header/HeaderSimple"
        ]
    },
    ssr: false
});
const Footer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(958), __webpack_require__.e(11), __webpack_require__.e(724)]).then(__webpack_require__.bind(__webpack_require__, 9724))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(9724)
            ]
        ,
        modules: [
            "../src/layouts/index.js -> " + "./footer/Footer"
        ]
    },
    ssr: false
});
const FooterSimple = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 634).then(__webpack_require__.bind(__webpack_require__, 7634))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(7634)
            ]
        ,
        modules: [
            "../src/layouts/index.js -> " + "./footer/FooterSimple"
        ]
    },
    ssr: false
});
// ----------------------------------------------------------------------
Layout.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    disabledFooter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    disabledHeader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    simpleFooter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    simpleHeader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    transparentHeader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function Layout({ children , transparentHeader , disabledHeader , disabledFooter , simpleHeader , simpleFooter ,  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            disabledHeader ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: simpleHeader ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderSimple, {
                    transparent: transparentHeader
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                    transparent: transparentHeader
                })
            }),
            children,
            disabledFooter ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: simpleFooter ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterSimple, {
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {
                })
            })
        ]
    }));
};


/***/ })

};
;