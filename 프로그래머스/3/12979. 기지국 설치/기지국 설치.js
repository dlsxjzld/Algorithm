function solution(n, stations, w) {
    var answer = 0;
    let start = 1
    let index =0
    
    while(start<=n){
        if(start >= stations[index]-w && start<=stations[index]+w){
            start = stations[index]+w+1
            index+=1
        }else{
            start += 2*w+1
            answer += 1
        }
    }

    return answer;
}