

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((item)=> item.split(" "));

var a1 = Number(input[0][0]);
var a0 = Number(input[0][1]);
var c = Number(input[1][0]);
var n0 = Number(input[2][0]);

if(a0<0) n0 = n0 - a0;  

var fn = (a1*n0) + a0;

if(fn <= n0*c){
    console.log(1);
}else{
    console.log(0);
}