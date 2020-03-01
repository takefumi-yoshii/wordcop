"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts = __importStar(require("typescript"));
// ______________________________________________________
//
exports.getTypeRegExpChecker= function (regExpChecker) {
    var _a;
    return (_a = {},
        _a[ts.TypeFlags.Object] = function (identifier, isArrayTypeNode) {
            if (!isArrayTypeNode)
                return false;
            var res = identifier.match(regExpChecker.array);
            if (res)
                return false;
            return " " + regExpChecker.array;
        },
        _a[ts.TypeFlags.Boolean] = regExpChecker.boolean,
        _a[ts.TypeFlags.Number] = regExpChecker.number,
        _a[ts.TypeFlags.String] = regExpChecker.string,
        _a[ts.TypeFlags.BooleanLiteral] = regExpChecker.boolean,
        _a[ts.TypeFlags.NumberLiteral] = regExpChecker.number,
        _a[ts.TypeFlags.StringLiteral] = regExpChecker.string,
        _a);
};
