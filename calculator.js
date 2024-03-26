// One euro is:
let oneEuroIs = {
  "JPY": 156.5, // japan yen
  "USD": 1.07, // us dollar
  "GBP": 0.87, // british pound
}

function fromDollarToYen(valueInDollars) {
  let valueInEuros = valueInDollars / oneEuroIs["USD"];
  let valueInYen = valueInEuros * oneEuroIs["JPY"];
  return valueInYen;
}
function fromEuroToDollar(valueInEuros) {
  let valueInDollar = valueInEuros * oneEuroIs["USD"];
  return valueInDollar;
}
function fromYenToPound(valueInYen) {
  let valueInEuros = valueInYen / oneEuroIs["JPY"];
  let valueInPound = valueInEuros * oneEuroIs["GBP"];
  return valueInPound;
}
console.log(fromDollarToYen(100)); 
console.log(fromEuroToDollar(100)); 
console.log(fromYenToPound(100));

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};