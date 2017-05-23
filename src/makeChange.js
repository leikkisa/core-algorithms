// Given a price and an amount paid, return the number of coins in each denomination that should be given as change. Numbers are represented as dollar + cent amounts, so `139` = $1.39

export default function makeChange({price, amountGiven}) {
  let change = amountGiven - price
  let result = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }
  let values = {
    quarters: 25,
    dimes: 10,
    nickels: 5,
    pennies: 1
  }
  for (let denomination in values) {
    if (change === 0) {return result}
    result[denomination] = Math.floor(change / values[denomination])
    change = change % values[denomination]
  }
  return result
}
