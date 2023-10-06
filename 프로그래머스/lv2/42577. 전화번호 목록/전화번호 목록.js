function solution(phone_book) {
    var answer = true;
    const map = new Map()
    // 해시맵 설정 { phone_number : 1}
    phone_book.sort()
    phone_book.forEach((v,i)=>map.set(v,1)) 
    
    
    
    for(let phone_number of phone_book){
        let jubdoo = '' // 접두사
        for (let number of phone_number){
            jubdoo += number // phone_number 돌면서 접두사 갱신
            if(map.get(jubdoo) === 1 && jubdoo !== phone_number){
                // 접두사가 해시맵에 있고 && 접두사가 자기 자신(phone_number)이 아니라면
                return false
            }
        }
    }
    
    return answer;
}