const fs=require('fs');
let ip=fs.readFileSync('/dev/stdin').toString().split('\n');
t=parseInt(ip[0]);
for(let i=1;i<=t;i++){
    console.log("Hello World, Judge %d!",i);
}