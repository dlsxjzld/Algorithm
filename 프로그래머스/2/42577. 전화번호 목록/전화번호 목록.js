function solution(phone_book) {
    var answer = true;
    // 10^6
    // 10^1
    

    const hash = new Map()
    
    for(let phone of phone_book){
        hash.set(phone,1)
    }
    
    for(let i=0;i<phone_book.length;i+=1){
        const cur = phone_book[i]
       
        let tmp = ''
        for(let j=0;j<cur.length;j+=1){
            tmp+=cur[j]
            if(tmp !==cur && hash.has(tmp)){
                return false
            }
        }
    }
    return answer;
}