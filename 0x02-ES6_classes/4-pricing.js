import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('amount must be a number');
    if (!(currency instanceof Currency)) throw new TypeError('currency must be a Currency');

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') throw new TypeError('amount must be a number');
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) throw new TypeError('currency must be a Currency');
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw new TypeError('amount must be a number');
    if (typeof conversionRate !== 'number') throw new TypeError('conversionRate must be a number');
    return amount * conversionRate;
  }
}
