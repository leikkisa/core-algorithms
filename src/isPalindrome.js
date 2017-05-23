// Determines if a string is a palindrome. Returns `true` or `false`.
// Ignores punctuation, spacing, and case sensitivity.

export default function isPalindrome (string) {
  let cleanString = string.toLowerCase().replace(/[^a-z]/g, '')
  let reversedString = Array.prototype.map.call(cleanString, function (x) {
    return x
  }).reverse().join('')
  if (cleanString === reversedString) {
    return true
  } else {
    return false
  }
}
