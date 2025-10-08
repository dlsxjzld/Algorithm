function solution(users, emoticons) {
    var answer = [];
    // 이모티콘 플러스 서비스 가입자를 최대한 늘리기
    // 이모티콘 판매액을 최대한 늘리기
    
    // 각 이모티콘들마다 할인율을 어떻게 하냐에 따라 조합이 만들어짐
    // 각 조합에 따른 사용자들이 이모티콘을 구매를 함
    // 이모티콘 구매 여부에 따른 이모티콘 비용이 나오고 플러스 서비스 가입 여부가 나온다
    
    const emoticons_comb = []
    const discount = [10,20,30,40]
    
    function makeComb (comb,index){
        if(index === emoticons.length){
            emoticons_comb.push([...comb])
            return
        }
        for(let dist of discount){
            const price = emoticons[index]* (100 - dist)/100
            makeComb([...comb,[dist,price]],index+1)
        }
    }
    
    makeComb([],0)


    for(let comb of emoticons_comb){
        const _users = Array.from({length:users.length},()=>0)
        for(let [discount,price] of comb){
            for(let index=0;index<users.length;index+=1){
                const [userDiscount,userLimit] = users[index]
                if(userDiscount <= discount){ // user는 구매
                    _users[index] += price
                }
            }
        }
        const buyPlus = _users.filter((val,index)=>{
            const [userDiscount,userLimit] = users[index]
            if(val >= userLimit){
                return true
            }else{
                return false
            }
        })
        const buyImoticons = _users.filter((val,index)=>{
            const [userDiscount,userLimit] = users[index]
            if(val >= userLimit){
                return false
            }else{
                return true
            }
        })
        const totalPrice = buyImoticons.reduce((a,b)=>a+b,0)
        answer.push([buyPlus.length,totalPrice])
    }
    
    const sortedAnswer = answer.sort((a,b)=>a[0]-b[0] || a[1]-b[1])[answer.length-1]
    
    return sortedAnswer
    

}