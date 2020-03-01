"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ______________________________________________________
//
function result(diagnostics) {
    if (diagnostics.allDiagnostics.length) {
        throw new Error('🚨 wordcop: Error! Found violation.🚨');
    }
    console.log('wordcop: No violations found. ✅');
}
exports.result = result;
