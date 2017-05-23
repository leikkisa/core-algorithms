//Returns the union of two sets

export default function setUnion(a,b) {
  return a.concat(b).sort().filter(function(item, pos, arr) {
    return !pos || item != arr[pos - 1];
  })
}
