function capitalize(str) {
  let newStr = ''
  if (str[0] >= 'a' && str[0] <= 'z') {
    newStr += str[0].toUpperCase()
  } else {
    newStr += str[0]
  }
  for (let i = 1; i < str.length; i++) {
    newStr += str[i]
  }
  return newStr
}

console.log(capitalize('hello'))
