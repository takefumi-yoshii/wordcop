"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
//_______________________________________________________
//
exports.defaultConfig = {
    targetDir: '.',
    tsconfigFileName: 'tsconfig.json',
    isEmitLog: false,
    regExpChecker: {
        boolean: /.*$/,
        number: /.*$/,
        string: /.*$/,
        array: /.*$/
    }
};
exports.createConfig = function (injects) { return (__assign(__assign(__assign({}, exports.defaultConfig), injects), { regExpChecker: __assign(__assign({}, exports.defaultConfig.regExpChecker), injects === null || injects === void 0 ? void 0 : injects.regExpChecker) })); };
