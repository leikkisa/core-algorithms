//Return the symmetric difference of two sets

export default function setSymmetricDifference(a,b) {
  let result = a.filter(function(x) {
    return b.indexOf(x) === -1
  })
  return result.concat(b.filter(function(x) {
    return a.indexOf(x) === -1
  }))
}
