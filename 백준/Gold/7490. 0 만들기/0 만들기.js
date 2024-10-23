const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const t = Number(input[0])

const dfs = (numbers, array, answer, index, sentence) => {

  if (index == numbers.length - 1) {
    // 연산자 numbers 사이에 넣고 계산하기
    if (array.reduce((a, b) => a + b) == 0) {
      answer.push(sentence)
    }

    return
  }
  if (index < numbers.length - 1) {
    dfs(
      numbers,
      [...array, -numbers[index + 1]],
      answer,
      index + 1,
      `${sentence}-${numbers[index + 1]}`,
    )
    dfs(
      numbers,
      [...array, numbers[index + 1]],
      answer,
      index + 1,
      `${sentence}+${numbers[index + 1]}`,
    )

    const tmp = [...array]
    const x = tmp.pop()
    const nx = (x * 10) + (x < 0 ? -numbers[index + 1] : numbers[index + 1])

    tmp.push(nx)

    dfs(numbers, tmp, answer, index + 1, `${sentence} ${numbers[index + 1]}`)
  }
}

for (let tc = 1; tc <= t; tc++) {
  const N = Number(input[tc])
  const numbers = Array.from({ length: N }, (_, i) => i + 1)
  const visited = Array.from({ length: N }, () => false)
  const answer = []
  const array = [numbers[0]]

  let index = 0
  dfs(
    numbers,
    [...array, -numbers[1]],
    answer,
    index + 1,
    `${numbers[0]}-${numbers[1]}`,
  )
  dfs(
    numbers,
    [...array, numbers[1]],
    answer,
    index + 1,
    `${numbers[0]}+${numbers[1]}`,
  )
  const tmp = [...array]
  const x = tmp.pop()
  const nx = (x * 10) + (x < 0 ? -numbers[1] : numbers[1])
  tmp.push(nx)

  dfs(numbers, tmp, answer, index + 1, `${numbers[0]} ${numbers[1]}`)
    answer.sort((a, b) => (a < b ? -1 : 1))
  console.log(answer.join("\n"))
    console.log()

}
