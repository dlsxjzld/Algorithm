function getDistance({x,nx,y,ny}){
    return Math.abs(x-nx) + Math.abs(y-ny)
}
function isValidP(p,otherP,place){
    const [x,y] = p

    for(const [nx,ny] of otherP){
        const distance = getDistance({x,nx,y,ny})
        if(distance >2) continue
        if(distance === 1) return false // 테이블인지 파티션인지 검사할 필요 없음
        // console.log('distance',distance)
        
        if(nx === x+1 && ny === y+1){
            // console.log("place[nx][y]",place[nx][y],'place[x][ny]',place[x][ny])
            if(place[nx][y] !== 'X' || place[x][ny] !== 'X') return false
        }else if(nx === x+2 && ny === y){
            // console.log('place[x+1][y]',place[x+1][y])
            if(place[x+1][y] !== 'X') return false
        }else if(nx === x && ny === y+2){
            // console.log('place[x][y+1]',place[x][y+1])
            if(place[x][y+1] !== 'X') return false
        }else if(nx === x+1 && ny === y-1){
            if(place[nx][y] !=='X' || place[x][ny] !=='X') return false
        }
    }
    
    return true // 거리두기 준수한 P면 true 리턴
}

function checkPlace(place){
    // place -> 5x5, P의 위치 정보
    const positionOfP = []
    place.forEach((row,r)=>row.split('').forEach((val,c)=>{
        if(val === 'P'){
            positionOfP.push([r,c])
        }
    }))

    // console.log(positionOfP)
    for(let [x,y] of positionOfP){
        
        const filteredP = positionOfP.filter(([tmpX,tmpY])=> tmpX > x || (tmpX===x && tmpY >y))
        if(filteredP.length === 0){ // 마지막 P나 P가 하나만 있다면 검사할 필요 없음
            break
        }
        // console.log('x,y,filteredP' , x,y,filteredP)
        const flag = isValidP([x,y],filteredP,place)
        if(flag === false){
            return 0
        }
        
        // console.log('filteredP',filteredP)
    }
    
    return 1 // 거리두기 성공 시
}

function solution(places) {
    var answer = [];
    // const Places = places.map((place)=>place.map((value)=>value.split('')))

    for(const place of places){
        answer.push(checkPlace(place))
        // console.log('answer',answer)
    }
    return answer;
}