function getPosition(y){
    const position = []
    let x = 0
    position.push([x,y])
    while(y>1){
        if(y%2) y = y*3 +1
        else y = y/2
        x +=1
        position.push([x,y])
    }
    return position
}

function getArea(a,b,position){
    const n = position.length-1
    const start = a
    const end = n+b
    if(start>end) return -1
    let sum =0
    
    for(let x=start;x<end;x++){

        const [x1,y1] = position[x]
        const [x2,y2] = position[x+1]

        sum += (x2-x1)*Math.min(y1,y2) + (x2-x1) * Math.abs(y1-y2) / 2
    }
    return sum
}

function solution(k, ranges) {
    var answer = [];
    const position = getPosition(k)

    
    for(const [a,b] of ranges){
        answer.push(getArea(a,b,position))
    }
    
    return answer;
}