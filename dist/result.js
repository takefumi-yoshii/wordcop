"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ______________________________________________________
//
function result(diagnostics, config) {
    if (diagnostics.aggregate.coverage < config.errorThrethold) {
        throw new Error('🚨 wordcop: Error! TypeSafe coverage under threthold.🚨');
    }
    console.log('wordcop: Your project is type safety. ✅');
}
exports.result = result;
