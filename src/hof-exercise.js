/**********/
// EXAMPLES
/**********/

// numbers: [number]
const numbers = [1, 2, 3];

// pricedItem: {price: number, taxable: boolean}
const pricedItem = { price: 10, taxable: false };

// pricedItems: [{price: number, taxable: boolean}]
const pricedItems = [pricedItem, pricedItem];

// calculateTotalImperative: (items: [{price: number, taxable: boolean}], tax: number) -> number
const calculateTotalImperative = (items, tax) => {
  let result = 0;
  for (const item of items) {
    const { price, taxable } = item;
    if (taxable) {
      result += price * Math.abs(tax);
    }
    result += price;
  }
  return result;
};

/**********/
// ASSIGNMENT
/**********/

// prices: (items: [{price: number}]) -> [number]
const prices = items => {
  // implementation 3 (most declarative/functional. No temporary variables used.)
  return items.map(item => item.price);
};

// sum: (numbers: [number]) -> number
const sum = numbers => {
  return numbers.reduce(((accumulator, currentvalue) => accumulator + currentvalue), 0)
};

// selectTaxable: (items: [{taxable: boolean}]) -> [{taxable: boolean}]
const selectTaxable = (items) => {
  return items.filter(item => item.taxable)
};

// applyTax: (prices: [number], tax: number) -> [number]
const applyTax = (prices, tax) => {
  return prices.map(price => price * tax)
};

// baseSum -- calculate the sum of prices before tax
// baseSum: (items: [{prices: number}]) -> number
const baseSum = items => sum(prices(items));
// sum of prices array which was created from the items array
// so...
// [{},{},{},...,{}] --prices()--> [number] --sum()--> number

// taxSum -- calculate the sum of the tax, without the base cost included
// taxSum: (items:[{prices: number}], tax: number) -> number
const taxSum = (items, tax) => sum(applyTax(prices(selectTaxable(items)), tax));
// sum of taxed prices array which was created from the taxable subset of the items array
// [{},{},{},...,{}] --selectTaxable()--> [{},{},...,{}] --prices()--> [number] --applyTax()--> [number] --sum()--> number

// calculateTotalDeclarative -- calculate the total price, base cost + tax
// calculateTotalDeclarative: (items: [{price: number}], number) -> number
const calculateTotalDeclarative = (items, tax) => 
  baseSum(items) + taxSum(items, Math.abs(tax));
// [{},{},{},...,{}] --baseSum()--> number
// [{},{},{},...,{}], number --taxSum()--> number

export default {
  prices,
  sum,
  selectTaxable,
  applyTax,
  baseSum,
  taxSum,
  calculateTotalDeclarative
};
