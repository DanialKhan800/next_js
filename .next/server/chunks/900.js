"use strict";
exports.id = 900;
exports.ids = [900];
exports.modules = {

/***/ 8900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useCountdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function useCountdown(date) {
    const { 0: countdown , 1: setCountdown  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const interval = setInterval(()=>setNewTime()
        , 1000);
        return ()=>clearInterval(interval)
        ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const setNewTime = ()=>{
        const startTime = date;
        const endTime = new Date();
        const distanceToNow = startTime.valueOf() - endTime.valueOf();
        const getDays = Math.floor(distanceToNow / (1000 * 60 * 60 * 24));
        const getHours = `0${Math.floor(distanceToNow % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))}`.slice(-2);
        const getMinutes = `0${Math.floor(distanceToNow % (1000 * 60 * 60) / (1000 * 60))}`.slice(-2);
        const getSeconds = `0${Math.floor(distanceToNow % (1000 * 60) / 1000)}`.slice(-2);
        setCountdown({
            days: getDays.toString() || '000',
            hours: getHours || '00',
            minutes: getMinutes || '00',
            seconds: getSeconds || '00'
        });
    };
    return countdown;
}; // Usage
 // const countdown = useCountdown(new Date('07/07/2022 21:30'));


/***/ })

};
;