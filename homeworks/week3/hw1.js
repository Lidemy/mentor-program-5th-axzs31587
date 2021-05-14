const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  const n = Number(lines[0])
  for (let i = 1; i <= n; i++) {
    console.log(repeat('*', i))
  }

  function repeat(str, times) {
    let newStr = ''
    for (let i = 0; i < times; i++) {
      newStr += str
    }
    return newStr
  }
}
