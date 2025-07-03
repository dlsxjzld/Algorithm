function solution(strings, n) {
    var answer = [];
    const x = [...strings]
     x.sort((a,b)=>{
        const at = a[n]
        const bt = b[n]
        if(at<bt){
            return -1
        }else if(at>bt){
            return 1
        }else{
            if(a<b){
                return -1
            }else if(a>b){
                return 1
            }
            return 0
        }
    })
    

    answer = x
    return answer;
}