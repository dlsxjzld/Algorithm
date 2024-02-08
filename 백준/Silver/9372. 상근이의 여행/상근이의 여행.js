const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

  const T = Number(input.shift())


  for(let testcase = 0; testcase<T;testcase++){
    const [n,m]= input.shift().split(' ').map(Number)
    input.splice(0,m)
    console.log(n-1)

  }
