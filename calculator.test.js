// Import the functions from the calculator.js file
const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./calculator.js');

test('Dólar a Euro y luego a Yen.', () => {
  const yenes = fromDollarToYen(100);
  const expected = (100 / 1.07) * 156.5;
  expect(yenes).toBe(expected)
})

test('Euro a Dólar.', () => {
  const dollars = fromEuroToDollar(100);
  const expected = 100 * 1.07;
  expect(dollars).toBe(expected)
})

test('Yen a Libra esterlina.', () => {
  const pounds = fromYenToPound(100);
  const expected = (100 / 156.5) * 0.87;
  expect(pounds).toBe(expected)
})
