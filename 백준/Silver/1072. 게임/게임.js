const fs = require('fs');
const [X,Y] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(v=>+v);

if(X===Y){
    console.log(-1)
    return
}else{
    const target = Math.floor(Y*100 / X) + 1
    if(target === 100){
        console.log(-1)
        return
    }else{
        console.log(Math.ceil((X*target-100*Y)/(100-target)))
    }
}