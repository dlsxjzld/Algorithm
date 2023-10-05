function solution(strArr) {
    var answer = [];
    strArr.forEach((v,i)=> 
                   {if (!v.includes('ad')){
                       answer.push(v)
                   }})
    return answer;
}