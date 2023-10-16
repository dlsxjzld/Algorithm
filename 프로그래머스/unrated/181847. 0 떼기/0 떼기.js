function solution(n_str) {
    var answer = '';
    
    for(let [index,str] of n_str.split('').entries()){

        if (str !== '0'){
            answer = n_str.slice(index,n_str.length)

            break
        }
    }
    return answer;
}