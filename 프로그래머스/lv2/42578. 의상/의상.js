function solution(clothes) {
    var answer = 1;
    // headgear : 2  , eyewear : 1 -> 3*2 - 1(전부 선택하지 않음)
    const categoryNumber = new Map()
    
    
    for(const [clothe,category] of clothes){
        if (categoryNumber.has(category)){
            categoryNumber.set(category,categoryNumber.get(category)+1)
        }else{
            categoryNumber.set(category,1)
        }

        
    }
    for (let num of categoryNumber.values()){
        answer *= (num+1)
    }
    
    return answer-1;
}