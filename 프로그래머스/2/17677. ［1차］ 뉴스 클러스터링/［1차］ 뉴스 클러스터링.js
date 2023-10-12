function solution(str1, str2) {
    var answer = 0;
    // 대소문자 구분 안함 -> 소문자로 통일
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    const arr1 = []
    const arr2 = []
    // str1 과 str2 영문자만 있는지 확인 후 새 배열 만들기
    for (let i = 0; i < str1.length - 1; i++) {
        // 두 글자씩 끊어서 확인
        const str = str1.slice(i, i+2);
        if (str[0] >= "a" && str[0] <= "z" && str[1] >= "a" && str[1] <= "z") {
          arr1.push(str);
        }
      }
    // str1 과 str2 영문자만 있는지 확인 후 새 배열 만들기
    for (let i = 0; i < str2.length - 1; i++) {
        // 두 글자씩 끊어서 확인
        const str = str2.slice(i, i+2);
        if (str[0] >= "a" && str[0] <= "z" && str[1] >= "a" && str[1] <= "z") {
          arr2.push(str);
        }
      }
    
    const inter = []
    const union = []
    // 교집합
    for(let i =0;i<arr1.length;i++){
        if(arr2.indexOf(arr1[i]) >=0){
            inter.push(arr1[i])
            // arr2 에서 교집합 빼기 
            arr2.splice(arr2.indexOf(arr1[i]),1)
        }
        // 합집합에 arr1 넣기
        union.push(arr1[i])
    }
    // arr2 는 arr2에서 교집합이 빠진 상태
    // 합집합 = arr1 + arr2 - 교집합
    for(let i=0;i<arr2.length;i++){
        // 합집합에 바뀐 arr2 넣기
        union.push(arr2[i])
    }

    
    
    if (inter.length ===0 && union.length === 0){
        answer = 65536
    }else{
        answer = parseInt(Math.floor((inter.length / union.length)*65536))
    }
    return answer;
}