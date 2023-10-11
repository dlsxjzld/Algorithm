function solution(str1, str2) {
    var answer = 0;
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    const arr1 = []
    const arr2 = []
    for (let i = 0; i < str1.length - 1; i++) {
        const str = str1.slice(i, i+2);
        if (str[0] >= "a" && str[0] <= "z" && str[1] >= "a" && str[1] <= "z") {
          arr1.push(str);
        }
      }
    for (let i = 0; i < str2.length - 1; i++) {
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
            arr2.splice(arr2.indexOf(arr1[i]),1)
        }
        union.push(arr1[i])
    }
    for(let i=0;i<arr2.length;i++){
        union.push(arr2[i])
    }

    
    
    if (inter.length ===0 && union.length === 0){
        answer = 65536
    }else{
        answer = parseInt(Math.floor((inter.length / union.length)*65536))
    }
    return answer;
}