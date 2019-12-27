"use strict";
/******************************************************
 * dhavaskrip v1.0                                    *
 *                                                    *
 * Copyright (c) 2019 Elitis. All rights reserved.    *
 * Licensed under the AGPL v3.                        *
 ******************************************************/
exports.__esModule = true;
var compiler_1 = require("./modules/compiler");
var fs_1 = require("fs");
var child_process_1 = require("child_process");
if (process.argv[2] === "compile") {
    if (!process.argv[3] || !fs_1.existsSync(process.argv[3]))
        console.error("A file to compile must be passed.");
    else {
        var content = fs_1.readFileSync(process.argv[3]).toString("utf8");
        var compiler = new compiler_1["default"](content);
        console.log(compiler.compile());
        // TODO: Write the compiled code to a file.
    }
}
else if (process.argv[2] === "run") {
    if (!process.argv[3] || !fs_1.existsSync(process.argv[3]))
        console.error("A file to run must be passed.");
    else {
        var content = fs_1.readFileSync(process.argv[3]).toString("utf8");
        var compiler = new compiler_1["default"](content);
        child_process_1.exec("node -e '" + compiler.compile() + "'", function (err, stdout) {
            return console.log(err ? err.message : stdout);
        });
    }
}
