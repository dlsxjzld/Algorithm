const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const init_money = Number(input[0])
const 주가모음 = input[1].split(" ").map(Number)

const bnp = {
  money: init_money,
  주식수: 0,
}
const timing = {
  money: init_money,
  주식수: 0,
}

for (let day = 0; day < 14; day++) {
  const 주가 = 주가모음[day]

  if (bnp.money >= 주가) {
    const 매수가능주식수 = Math.floor(bnp.money / 주가)
    bnp.주식수 += 매수가능주식수
    bnp.money -= 매수가능주식수 * 주가
  }
}
for (let day = 0; day < 10; day++) {
  const first = 주가모음[day]
  const second = 주가모음[day + 1]
  const third = 주가모음[day + 2]
  const 주가 = 주가모음[day + 3]

  if (first > second && second > third) {
    if (timing.money >= 주가) {
      const 매수가능주식수 = Math.floor(timing.money / 주가)
      timing.주식수 += 매수가능주식수
      timing.money -= 매수가능주식수 * 주가
    }
  } else if (first < second && second < third) {
    timing.money += timing.주식수 * 주가
    timing.주식수 = 0
  }
}

console.log(
  bnp.money + bnp.주식수 * 주가모음.at(-1) >
    timing.money + timing.주식수 * 주가모음.at(-1)
    ? "BNP"
    : bnp.money + bnp.주식수 * 주가모음.at(-1) ==
      timing.money + timing.주식수 * 주가모음.at(-1)
    ? "SAMESAME"
    : "TIMING",
)
