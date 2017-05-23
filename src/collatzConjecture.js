// Return the Collatz sequence for a given number.
//
// The Collatz sequence for any positive integer `n` is defined as follows:
//
// > If `n` is even, divide it by 2 to get `n / 2`. If `n` is odd, multiply it by 3 and add 1 to obtain `3n + 1`. Repeat the process until you reach 1.

export default function collatzConjecture (number) {
  if (!Number.isInteger(number) || number < 1) {
    throw new Error('Input must be a positive integer')
  }
  let result = []
  while (number !== 1) {
    result.push(number)
    if (number % 2 === 0) {
      number = number / 2
    } else {
      number = number * 3 + 1
    }
  }
  result.push(1)
  return result
}
