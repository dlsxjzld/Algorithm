const input =  require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = input[0]
const nums = new Map()

for(let i=1;i<=n;i++){
    const num = BigInt(input[i])
    if(!nums.has(num) ){
        nums.set(num,1)
    }else{
        nums.set(num,nums.get(num)+1)
    }
}

const sortedNum = [...nums]


sortedNum.sort((a,b)=> a[1]<b[1] ? 1: a[1]>b[1] ? -1 : a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0)

console.log(sortedNum[0][0].toString())