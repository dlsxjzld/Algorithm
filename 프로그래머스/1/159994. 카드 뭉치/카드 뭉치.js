function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    // cards1 과 cards2의 첫번째 자리를 goal의 첫번째와 비교
    // goal이 전부 비어있을때까지 시도하기
    while(goal.length>0){
        const card1 = cards1[0]
        const card2 = cards2[0]
        if(goal[0] === card1){
            goal.shift()
            cards1 = cards1.slice(1)
        } 
        else if(goal[0] === card2){
            goal.shift()
            cards2 = cards2.slice(1)
        }else{
            answer = 'No'
            break
        }
    }
    
    return answer;
}