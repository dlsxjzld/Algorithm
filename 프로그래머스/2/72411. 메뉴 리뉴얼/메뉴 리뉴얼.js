function getCandidate(candidates,order,cour,visited,index,arr=[]){
    if(arr.length === cour){
        const tmp = [...arr]
        tmp.sort()
        if(!candidates.get(cour)[tmp.join('')] ){
            candidates.get(cour)[tmp.join('')] = 0
        }
        candidates.get(cour)[tmp.join('')] += 1
        return
    }
    
    for(let i=index;i<order.length;i+=1){
        if(!visited[i]){
            visited[i] = true
            arr.push(order[i])
            getCandidate(candidates,order,cour,visited,i+1,arr)
            arr.pop()
            visited[i] = false
        }
    }
}

function solution(orders, course) {
    var answer = [];
    // course 수에 따라 조합을 다 구해야함?-> orders 순회하면서 course 수에 맞게 조합 만들기
    // 각 course 의 원소에 맞는 조합들 다 구하고 그 중에서 orders 순회하면서 되는 값들 count +1
    // count 높은 것들로 정답, 같은 count면 다 추가?
    const candidates = new Map()
    for(let cour of course){
        candidates.set(cour,{})
    }
    for(let order of orders){
        for(let cour of course){
            const visited = Array.from({length:order.length},()=>false)
            getCandidate(candidates,order,cour,visited,0)
        }
    }
    
    for(let cour of course){
        const cand = candidates.get(cour) 
        const real_cand = Object.entries(cand)
        const MAX = Object.entries(cand).sort((a,b)=>b[1]-a[1])[0]

        if(MAX){
            const MAX_COUNT = MAX[1]
            const ans = real_cand.filter((val)=>val[1] === MAX_COUNT && val[1]>=2).map(([v,i])=>v)
            answer.push(...ans)
        }
        // console.log(Object.entries(cand).sort((a,b)=>b[1]-a[1]))
    }
    // console.log(candidates)
    answer.sort()
    
    return answer;
}