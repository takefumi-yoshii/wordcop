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
        var check = typeRegExpChecker[flags];
        if (!check)
            return false;
        var identifier = node.name.getText();
        if (typeof check === 'function') {
            var isArrayTypeNode = symbol.name === 'Array';
            return check(identifier, isArrayTypeNode, node);
        }
        return checkByRegExp(identifier, check);
    }
    catch (_a) {
        return false;
    }
}
exports.checkNode = checkNode;
