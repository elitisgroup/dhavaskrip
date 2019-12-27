"use strict";
exports.__esModule = true;
var Compiler = /** @class */ (function () {
    function Compiler(code) {
        this.code = code;
        this.compiled = "";
    }
    Compiler.prototype.compile = function () {
        var _this = this;
        this.code.split("\n").forEach(function (line) {
            line = line.trim();
            if (line.startsWith("//"))
                return;
            if (line.startsWith("if"))
                _this.ifStatement(line);
        });
        return this.compiled;
    };
    Compiler.prototype.ifStatement = function (line) {
        var _a = line
            .slice(2)
            .trim()
            .split(" "), condParam1 = _a[0], condFunc = _a[1], condParam2 = _a[2], condChecker = _a[3], param1 = _a[4], func = _a[5], param2 = _a[6], elseExists = _a[7], elseParam1 = _a[8], elseFunc = _a[9], elseParam2 = _a[10];
        // * This is absolute spaghetti
        this.compiled += "\nif (\"" + condParam1 + "\" " + Compiler.functions[condFunc.toUpperCase()] + " \"" + condParam2 + "\" == \"" + condChecker + "\") console.log(\"" + param1 + "\" " + Compiler.functions[func.toUpperCase()] + " \"" + param2 + "\"); " + (elseExists === "or"
            ? "else console.log(\"" + elseParam1 + "\" " + Compiler.functions[elseFunc.toUpperCase()] + " \"" + elseParam2 + "\");"
            : "");
    };
    Compiler.functions = {
        TIMES: "*"
    };
    return Compiler;
}());
exports["default"] = Compiler;
