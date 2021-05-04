function join(arr, concatStr) {
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      result += arr[i]
    } else {
      result += (arr[i] + concatStr)
    }
  }
  return result
}

function repeat(str, times) {
  let newStr = ''
  for (let i = 0; i < times; i++) {
    newStr += str
  }
  return newStr
}

console.log(join(['a'], '!'))
console.log(repeat('a', 5))
