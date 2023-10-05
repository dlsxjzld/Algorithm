function solution(phone_book) {
    var answer = true;
    const map = new Map()
    phone_book.forEach((v,i)=>(map.set(v,1)))
    for(let phone_number of phone_book){
        let jubdoo = ''
        for(let number of phone_number){
            jubdoo += number
            if (map.get(jubdoo) === 1 && jubdoo !== phone_number){
                return false
            }
        }
    }
    return answer;
}