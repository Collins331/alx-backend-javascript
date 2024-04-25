export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (typeof code !== 'string') throw new TypeError('code must be a string');

    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw new TypeError('name must be a string');
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') throw new TypeError('code must be a string');
    this._code = newCode;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
