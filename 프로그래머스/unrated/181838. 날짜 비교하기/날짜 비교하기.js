function solution(date1, date2) {
    var answer = 0;
    if(date1[0]<date2[0]){
        answer = 1
    }else if (date1[0] === date2[0]){
        if(date1[1] < date2[1]){
            answer = 1
        }else if(date1[1] === date2[1]){
            if(date1[2] < date2[2]){
            answer = 1
            }else{
                answer = 0
            }
        }else{
            answer = 0
        }
    }else{
        answer = 0
    }
    return answer;
}