function solution(numbers) {
    var answer = 0;
    const nums = numbers.split('')
    const candidates = new Set()
    
    const isPrime = (target)=>{
        if(target <= 1){
            return false
        }
        if(target === 2 || target ===3){
            return true
        }
        
        for(let i=2;i<=Math.floor(Math.sqrt(target))+1;i+=1){
            if(target %i === 0){
                return false
            }
        }
        return true
        
    }
    
    const dfs = (number,visited)=>{
        candidates.add(Number(number))
        if(number.length === nums.length){
            return
        }
        
        for(let i=0;i<nums.length;i+=1){
            if(!visited[i]){
                visited[i] = true
                dfs(number+nums[i],visited)
                visited[i] = false
            }
        }   
        
    }
    
    const visited = Array.from({length:nums.length},()=>false)
    for(let i=0;i<nums.length;i+=1){
        if(!visited[i]){
            visited[i] = true
            dfs(nums[i],visited)
            visited[i] = false
        }
    }
    
    answer = Array.from(candidates).filter(isPrime).length
    return answer;
}