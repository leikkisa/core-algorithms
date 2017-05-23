export default function factorial (number) {
  let result = number
  while (number > 1) {
    result *= (number - 1)
    number = number - 1
  }
  return result
}
