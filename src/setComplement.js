// Return the complement of two sets, the values that are in array b that are not in array a

export default function setComplement (a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error('Inputs must be arrays')
  }
  return b.filter(function (x) {
    return a.indexOf(x) === -1
  })
}
