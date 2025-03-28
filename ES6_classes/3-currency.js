export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be an integer');
    }
    this._name = value;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be an string');
    }
    this._code = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
