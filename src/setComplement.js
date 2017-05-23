//Return the complement of two sets, the values that are in array b that are not in array a

export default function setComplement(a,b) {
  return b.filter(function(x) {
    return a.indexOf(x) === -1;
  })
}
