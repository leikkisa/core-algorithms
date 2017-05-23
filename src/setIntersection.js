//Returns the intersection of two sets

export default function setIntersection(a,b)
  return a.concat(b).sort().filter(function(item, pos, arr) {
    return item === arr[pos - 1];
  })
}
