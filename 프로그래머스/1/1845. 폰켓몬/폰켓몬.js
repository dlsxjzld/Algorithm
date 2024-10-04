function solution(nums) {
    var answer = 0;
    const can = nums.length/2
    const kind = new Set(nums)
    answer = kind.size > can ? can : kind.size
    return answer;
}