export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw new TypeError('code must be string');
    if (typeof name !== 'string') throw new TypeError('name must be string');

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') throw new TypeError('code must be string');
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw new TypeError('name must be string');
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
