function solution(picture, k) {
    var answer = [];
    picture = picture
                    .map(v=>v.split(''))
    picture = picture.map(v=>v.map(vi=>vi.repeat(k)).join(""))

    for(let pic of picture){
        for(let i=0;i<k;i++){
            answer.push(pic)
        }
    }
    
    return answer;
}