export default class Pricing {
  // Constructor for Pricing
  constructor(amount, currency) {
    // Type validation for 'amount'
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    // Type validation for 'currency'
    if (typeof currency !== 'object' || !currency.name || !currency.code) {
      throw new TypeError('Currency must be an object with name and code properties');
    }

    // Assigning values to private attributes
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter for 'amount'
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // Getter and setter for 'currency'
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (typeof value !== 'object' || !value.name || !value.code) {
      throw new TypeError('Currency must be an object with name and code properties');
    }
    this._currency = value;
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
