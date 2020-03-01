"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ______________________________________________________
//
function getDiagnostic(source, node, message) {
    var start = node.getStart();
    var _a = source.getLineAndCharacterOfPosition(start), line = _a.line, character = _a.character;
    var location = source.fileName + ":" + (line + 1) + ":" + (character + 1);
    var log = location + " \uD83D\uDC6E\u200D\u2642\uFE0F < " + message;
    return log;
}
exports.getDiagnostic = getDiagnostic;
