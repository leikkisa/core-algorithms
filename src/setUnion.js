// Returns the union of two sets

export default function setUnion (a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error('Inputs must be arrays')
  }
  return a.concat(b).sort().filter(function (item, pos, arr) {
    return !pos || item !== arr[pos - 1]
  })
}
