"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ______________________________________________________
//
function checkByRegExp(identifier, reg) {
    var res = identifier.match(reg);
    if (res)
        return false;
    return " " + reg;
}
function checkNode(checker, typeRegExpChecker, node) {
    try {
        var type = checker.getTypeAtLocation(node);
        var flags = type.flags, symbol = type.symbol;
        var checkByFunction = typeRegExpChecker[flags];
        if (!checkByFunction)
            return false;
        var identifier = node.name.getText();
        if (typeof checkByFunction === 'function') {
            var isArrayTypeNode = symbol.name === 'Array';
            return checkByFunction(identifier, isArrayTypeNode, node);
        }
        return checkByRegExp(identifier, checkByFunction);
    }
    catch (_a) {
        return false;
    }
}
exports.checkNode = checkNode;
