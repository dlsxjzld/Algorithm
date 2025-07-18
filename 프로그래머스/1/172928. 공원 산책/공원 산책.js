function solution(park, routes) {
    var answer = [];
    let [x,y] = [-1,-1]
    park.forEach((row,ridx)=>row.split('').forEach((val,cidx)=>{
        if(val === 'S'){
            x = ridx
            y = cidx
        }
    }))
    
    const row = park.length
    const col = park[0].length
    
    const DIRECTION = {
        'N':[-1,0],
        'S':[1,0],
        'W':[0,-1],
        'E':[0,1]
    }
    
    for(let route of routes){
        const [direction,distance] = route.split(' ')
        const [dx,dy] = DIRECTION[direction]
        const targetX = x+dx * Number(distance)
        const targetY = y+dy * Number(distance)
        let canMove = true
        if(targetX >= row || targetY >= col || targetX<0 || targetY <0){
            canMove = false
            continue
        }
        let tmpX = x
        let tmpY = y
        for(let i=0;i<Number(distance);i+=1){
            tmpX += dx
            tmpY += dy

            if(park[tmpX][tmpY] === 'X'){
                canMove = false
                break
            }
        }
        
        if(canMove){
            x = targetX
            y = targetY
        }
    }
    answer.push(x,y)
    return answer;
}