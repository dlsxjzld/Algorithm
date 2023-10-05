function solution(myString, pat) {
    var answer = 0;
    for (let idx = 0;idx<myString.length-pat.length+1;idx++){
        if (myString.slice(idx,idx+pat.length) === pat){
            answer +=1
        }
    }
    return answer;
}