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
    exports.pick = void 0;
    /**
     * Picks the key-value pairs corresponding to the given keys from an object.
     * @example pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
     * @param obj
     * @param arr
     */
    exports.pick = function (obj, arr) {
        return arr.reduce(function (acc, curr) { return (curr in obj && (acc[curr] = obj[curr]), acc); }, {});
    };
});
