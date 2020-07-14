(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.throttle = exports.debounce = exports.pick = void 0;
    /**
     * Picks the key-value pairs corresponding to the given keys from an object.
     * @example pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
     * @param obj
     * @param arr
     */
    exports.pick = (obj, arr) => arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
    /**
     * Make function that delays invoking the provided function until
     * at least ms milliseconds have elapsed since the last time it was invoked.
     * @param func
     * @param wait
     */
    exports.debounce = (func, wait = 50) => {
        let timerId = 0;
        return function (...args) {
            clearTimeout(timerId);
            // @ts-ignore
            timerId = setTimeout(() => func.apply(this, args), wait);
        };
    };
    /**
     * Make function that only invokes the provided function
     * at most once per every wait milliseconds.
     * @param func
     * @param wait
     */
    exports.throttle = (func, wait) => {
        let timerId;
        let lastTime = 0;
        return function (...args) {
            const now = Date.now();
            if (timerId)
                clearTimeout(timerId);
            if (now - lastTime >= wait) {
                // @ts-ignore
                func.apply(this, args);
                lastTime = now;
            }
            else {
                // @ts-ignore
                timerId = setTimeout(() => func.apply(this, args), wait);
            }
        };
    };
});
