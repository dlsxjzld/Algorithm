const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const N = Number(input[0])

let flag = false

const check = (string) => {
  const Length = string.length
  const end = Math.floor(Length / 2)
  for (let i = 1; i <= end; i++) {
    if (string.slice(Length - i, Length) === string.slice(Length - i * 2, Length - i)) {
      return true
    }
  }
  return false
}

const dfs = (depth, string) => {
  if (flag) return
  if (check(string)) return
  if (depth === N) {
    console.log(string)
    flag = true
    return
  }

  dfs(depth + 1, string + "1")
  dfs(depth + 1, string + "2")
  dfs(depth + 1, string + "3")
}
dfs(0, "")


