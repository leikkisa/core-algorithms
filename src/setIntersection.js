//Returns the intersection of two sets

export default function setIntersection(a,b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error ('Inputs must be arrays')
  }
  return a.concat(b).sort().filter(function(item, pos, arr) {
    return item === arr[pos - 1];
  })
}
