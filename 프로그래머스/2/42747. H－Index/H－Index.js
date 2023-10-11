function solution(citations) {
    var answer = 0;
    // h번 이상 인용된 논문이 h편 이상, 나머지 논문이 h번 이하 인용
    // h의 최댓값이 H-index
    citations.sort((a,b)=>b-a) // 내림차순 정렬

    // idx+1 -> 전체 논문 중에 h번 이상 인용된 논문 수
    // citation -> 각 논문의 인용 횟수
    // 논문의 인용 횟수가 인용된 논문 수 보다 크거나 같으면 h_index 구할 수 있다.
    for(let [idx,citation] of citations.entries()){
        if(citation >= idx+1){
            answer = idx+1
        }
}
    
    return answer;
}