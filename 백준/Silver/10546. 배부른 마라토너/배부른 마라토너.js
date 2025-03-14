const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const N = Number(input[0])
const participant = input.slice(1, 1 + N)
const didRace = input.slice(1 + N)

const check = new Map()
for (let member of participant) {
  check.set(member, (check.get(member) || 0) + 1)
}
for (let member of didRace) {
  check.set(member, check.get(member) - 1)
}

for(let [key,value] of check){
    if(value){
     console.log(key)
     break
    }
}
