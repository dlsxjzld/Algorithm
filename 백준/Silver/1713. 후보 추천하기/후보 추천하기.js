const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const recommend = Number(input[1])
const students = input[2].split(" ").map(Number)

const pictures = () => {
  const pics = []

  const pushPic = (newPic) => {
    if (!checkPic(newPic)) {
      if (pics.length < n) {
        pics.push(newPic)
      } else {
        const minRec = Math.min(
          ...pics.map(({ recommendCount }) => recommendCount),
        )
        const notRecommendedPic = pics.filter(
          ({ recommendCount }) => recommendCount === minRec,
        )
        if (notRecommendedPic.length === 1) {
          const idx = pics.findIndex((pic) => pic.recommendCount === minRec)
          pics[idx] = newPic
        } else {
          const times = notRecommendedPic.map(({ time }) => time)
          const old = Math.min(...times)
          const idx = pics.findIndex((pic) => pic.time === old)
          pics[idx] = newPic
        }
      }
    } else {
      const pic = checkPic(newPic)
      pic.recommendCount += 1
    }
  }

  const checkPic = (newPic) => {
    return pics.find((pic) => pic.name === newPic.name)
  }
  const getPics = () => {
    return pics
  }

  return { pushPic, getPics }
}

const { pushPic, getPics } = pictures()

for (let curTime = 0; curTime < recommend; curTime += 1) {
  const stu = students[curTime]
  const studentInfo = {
    name: stu,
    recommendCount: 0,
    time: curTime,
  }
  pushPic(studentInfo)
}

console.log(getPics().map(({name})=>name).sort((a,b)=>a-b).join(' '))
