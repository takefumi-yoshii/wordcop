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
var checkNode_1 = require("./checkNode");
var getDiagnostic_1 = require("./getDiagnostic");
// ______________________________________________________
//
function visitSource(checker, typeRegExpChecker, source) {
    var diagnostics = [];
    function visit(node) {
        switch (node.kind) {
            case ts.SyntaxKind.VariableDeclaration:
                if (ts.isVariableDeclaration(node)) {
                    var erorrMessage = checkNode_1.checkNode(checker, typeRegExpChecker, node);
                    if (erorrMessage) {
                        var diagnostic = getDiagnostic_1.getDiagnostic(source, node, erorrMessage);
                        console.log(diagnostic);
                        diagnostics.push(diagnostic);
                    }
                }
                break;
        }
        ts.forEachChild(node, visit);
    }
    visit(source);
    return {
        diagnostics: diagnostics
    };
}
exports.visitSource = visitSource;
