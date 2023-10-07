function solution(clothes) {
    var answer = 1;
    // categoryLengthOfclothes
    // headgear : 2  , eyewear : 1 -> 3*2 - 1(전부 선택하지 않음)
    const categoryNumber = new Map()
    const categorySet = new Set()
    for(const [clothe,category] of clothes){
        categorySet.add(category)
    }
    
    for (const whatCategory of categorySet){
            categoryNumber.set(whatCategory,0)
        }
    
    for(const [clothe,category] of clothes){
        const number = categoryNumber.get(category)
        categoryNumber.set(category,number+1)
    }
    for (let num of categoryNumber.values()){
        // console.log(num)
        answer *= (num+1)
    }
    
    return answer-1;
}