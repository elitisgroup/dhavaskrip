/******************************************************
 * dhavaskrip v1.0                                    *
 *                                                    *
 * Copyright (c) 2019 Elitis. All rights reserved.    *
 * Licensed under the AGPL v3.                        *
 ******************************************************/

import Compiler from "./modules/compiler";
import { readFileSync, existsSync } from "fs";

if (process.argv[2] === "compile") {
  if (!process.argv[3] || !existsSync(process.argv[3])) console.error("A file to compile must be passed.");
  else {
    const content: string = readFileSync(process.argv[3]).toString("utf8");
    const compiler: Compiler = new Compiler(content);

    console.log(compiler.compile());
    // TODO: Write the compiled code to a file.
  }
}