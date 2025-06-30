function solution(nums) {
    var answer = 0;
    const max = nums.length/2
    const uniqueNums = new Set(nums)
    answer = max > uniqueNums.size ? uniqueNums.size : max
    
    return answer;
}