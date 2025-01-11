function solution(n, works) {
    var answer = 0;
    works.sort((a,b)=>a-b)
    const total = works.reduce((a,b)=>a+b,0)
    if(total <= n){
        return answer
    }
    let myN = n
    
    while(myN >0){
        let myMax = works[works.length-1]
        let startIdx = works.indexOf(myMax)

        for(let i=startIdx;i<works.length;i+=1){
            if(myN === 0){
                break
            }
            works[i] -=1
            myN -=1
        }
        
    }

    answer = works.reduce((a,b)=>a+b**2,0)
    return answer;
}


// 2, 15, 22, 55, 55 // 99
// 2, 15, 22, 22, 22 // 33
// 2, 15, 15, 15, 15 // 12
// 2, 12, 12, 12, 12 