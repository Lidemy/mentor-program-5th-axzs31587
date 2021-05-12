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
  const line = lines[0].split(' ')
  const n = Number(line[0])
  const m = Number(line[1])
  for (let i = n; i <= m; i++) {
    const n = i.toString()
    let sum = 0
    for (let k = 0; k < n.length; k++) {
      sum += Number(n[k]) ** n.length
    }
    if (Number(n) === sum) {
      console.log(Number(n))
    }
  }
}
