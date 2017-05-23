// Returns an array of Fibonacci numbers to the nth position.

export default function fibonacci(n) {
  if (!Number.isInteger(n)) {
    throw new Error ('Input must be an integer')
  }
  let current = 0
  let result = []
  while (current < n) {
    if (current < 2) {
      result.push(current)
    } else {
      result.push(result[current-1]+result[current-2])
      }
    current++
  }
  return result
}
