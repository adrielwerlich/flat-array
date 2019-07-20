function flatten(array, result) {
  if (array.length === 0) {
    return result
  }
  var head = array[0]
  var rest = array.slice(1)
  if (Array.isArray(head)) {
    return flatten(head.concat(rest), result)
  }
  result.push(head)
  return flatten(rest, result)
}

console.log(flatten([], []))
console.log(flatten([1], []))
console.log(flatten([1,2,3], []))
console.log(flatten([1,2,[3,4]], []))
console.log(flatten([1,2,[3,[4,5,6]]], []))
console.log(flatten([[1,2,3],[4,5,6]], []))
console.log(flatten([[1,2,3],[[4,5],6,7]], []))
console.log(flatten([[1,2,3],[[4,5],6,[7,8,9]]], []))