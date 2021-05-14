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
  const m = Number(lines[0])
  for (let i = 1; i <= m; i++) {
    const line = lines[i].split(' ')
    const a = line[0]
    const b = line[1]
    const k = Number(line[2])
    if (a === b) {
      console.log('DRAW')
    } else if (k === 1) {
      if (a.length > b.length) {
        console.log('A')
      } else if (a.length < b.length) {
        console.log('B')
      } else {
        if (a > b) {
          console.log('A')
        } else {
          console.log('B')
        }
      }
    } else {
      if (a.length < b.length) {
        console.log('A')
      } else if (a.length > b.length) {
        console.log('B')
      } else {
        if (a < b) {
          console.log('A')
        } else {
          console.log('B')
        }
      }
    }
  }
}
