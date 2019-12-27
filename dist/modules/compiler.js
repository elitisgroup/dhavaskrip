"use strict";
exports.__esModule = true;
var default_1 = /** @class */ (function () {
    function default_1(code, wait) {
        if (wait === void 0) { wait = false; }
        this.code = code;
        this.wait = wait;
        this.compiled = "";
        if (!wait)
            this.compile();
    }
    default_1.prototype.compile = function () {
        this.code.split("\n").forEach(function (line) {
            // TODO: Compile code, appending to this.compiled.
        });
        return this.compiled;
    };
    return default_1;
}());
exports["default"] = default_1;
