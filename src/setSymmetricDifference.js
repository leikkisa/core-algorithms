//Return the symmetric difference of two sets

export default function setSymmetricDifference(a,b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error ('Inputs must be arrays')
  }
  let result = a.filter(function(x) {
    return b.indexOf(x) === -1
  })
  return result.concat(b.filter(function(x) {
    return a.indexOf(x) === -1
  }))
}
