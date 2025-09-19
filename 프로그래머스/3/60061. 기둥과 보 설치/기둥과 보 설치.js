
function solution(n, build_frame) {
    var answer = [];
    
    const isBo = 1
    const isPillar = 0
    
    const isDelete = 0
    const isCreate = 1
    
    // 찾는 게 존재하는지
    const exist = (x,y,a)=> answer.some(([ax,ay,aa])=> ax===x && ay===y && aa===a)
    
    const validPillar = (x,y)=> y=== 0 || exist(x-1,y,isBo) || exist(x,y,isBo) || exist(x,y-1,isPillar)
    
    const validBo = (x,y)=> exist(x,y-1,isPillar) || exist(x+1,y-1,isPillar) || (exist(x-1,y,isBo) && exist(x+1,y,isBo))
    
    const isConnect = ()=>{
        for(let [ax,ay,aa] of answer){
            if(aa === isBo){
                if(!validBo(ax,ay)){
                    return false
                }
            }else{
                if(!validPillar(ax,ay)){
                    return false
                }
            }
        }
        return true
    }
    
    for(let [x,y,a,b] of build_frame){
        if(b === isDelete){
            answer = answer.filter(([ax,ay,aa])=> !(ax === x && ay===y && aa ===a))
            if(!isConnect()){
                answer.push([x,y,a])
            }

        }else{
            answer.push([x,y,a])
            if(!isConnect()){
                answer.pop()
            }
        }
        
    }
    
    
    
    return answer.sort((a,b)=> a[0]-b[0] || a[1]-b[1] || a[2]-b[2]);
}