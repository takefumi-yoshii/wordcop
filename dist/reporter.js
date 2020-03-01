"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ______________________________________________________
//
function reporter(diagnostics, config) {
    if (!!config.customReporter) {
        config.customReporter(diagnostics);
        return;
    }
}
exports.reporter = reporter;
