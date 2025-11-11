function solution(n, costs) {
    var answer = 0;
    costs.sort((a,b)=>a[2]-b[2])
    const islands = Array.from({length:n},(_,i)=>i)  
    
    const getParent = (n) => {
        if(islands[n] === n){
            return n
        }
        
        return getParent(islands[n])
    }
    
    const unionParent = (a,b)=>{
        const aParent = getParent(a)
        const bParent = getParent(b)
        
        if(aParent < bParent){
            islands[bParent] = aParent
        }else{
            islands[aParent] = bParent
        }
    }
    
    const hasSameParent = (a,b)=>{
        return getParent(a) === getParent(b)
    }

    for(let cost of costs){
        const [s,e,c] = cost
        if(hasSameParent(s,e)){
            continue
        }else{
            unionParent(s,e)
            answer += c
        }
        
    }

    
    return answer;
}