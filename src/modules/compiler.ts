export default class Compiler {
  private compiled: string = "";
  private static functions: object = {
    TIMES: "*"
  };

  constructor(private code: string) {}

  public compile(): string {
    this.code.split("\n").forEach((line: string): void => {
      line = line.trim();
      
      if (line.startsWith("//")) return;
      if (line.startsWith("if")) this.ifStatement(line);
    });

    return this.compiled;
  }

  private ifStatement(line: string): void {
    const [
      condParam1,
      condFunc,
      condParam2,
      condChecker,
      param1,
      func,
      param2,
      elseExists,
      elseParam1,
      elseFunc,
      elseParam2
    ]: string[] = line.slice(2).trim().split(" ");

    // * This is absolute spaghetti
    this.compiled += `\nif ("${condParam1}" ${
      Compiler.functions[condFunc.toUpperCase()]
    } "${condParam2}" == "${condChecker}") console.log("${param1}" ${
      Compiler.functions[func.toUpperCase()]
    } "${param2}"); ${
      elseExists === "or"
        ? `else console.log("${elseParam1}" ${
            Compiler.functions[elseFunc.toUpperCase()]
          } "${elseParam2}");`
        : ""
    }`;
  }
}
