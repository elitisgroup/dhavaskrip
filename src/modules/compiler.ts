export default class {
  private compiled = "";

  constructor (private code: string, private wait: boolean = false) {
    if (!wait) this.compile();
  }

  public compile(): string {
    this.code.split("\n").forEach((line: string): void => {
      // TODO: Compile code, appending to this.compiled.
    });
    
    return this.compiled;
  }
}