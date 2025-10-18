function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const bridge = Array.from({length:bridge_length},()=>0)
    // bridge_length 만큼 채워진 다리
    const reversedTruck = [...truck_weights].reverse()
    
    function getSum(br){
        return br.reduce((a,b)=>a+b,0)
    }
    

    while(bridge.length > 0){
        bridge.shift()

        if(reversedTruck.length>0){
            const truck = reversedTruck[reversedTruck.length-1]
            if(getSum(bridge) + truck <= weight){
                bridge.push(reversedTruck.pop())
            }else{
                bridge.push(0)
            }
        }
        
        answer +=1

        
         
    }
    return answer;
}