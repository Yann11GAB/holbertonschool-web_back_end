export default class Airport {
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
  
    get name() {
      return this._name;
    }
  
    get code() {
      return this._code;
    }
  
    // Override the default string description
    toString() {
      return `[${this._code}]`;
    }
  }  