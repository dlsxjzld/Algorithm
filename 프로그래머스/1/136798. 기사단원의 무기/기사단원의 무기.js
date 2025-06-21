
function solution(number, limit, power) {
    var answer = 0;
    
    const weapons = Array.from({length:number+1},(_,i)=> 1)
    
    for(let i=1;i<=number;i+=1){
        for(let j=i*2;j<=number;j+=i){
            weapons[j] +=1   
        }
    }



    answer = weapons.slice(1).reduce((prev,cur)=>{
        if(cur>limit){
            return power+prev
        }
        return cur+prev
    },0)
    
    
    
    
    return answer;
}