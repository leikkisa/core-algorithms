// Returns an array of Fibonacci numbers to the nth position.

export default function fibonacci(n) {
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

```javascript
fibonacci(10)
// => [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
