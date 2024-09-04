function solution(k, ranges) {
  const integral = [0];
  while (k !== 1) {
      // console.log('-1',integral.at(-1))
    if (k % 2) {
      integral.push((k + k * 3 + 1) / 2 + integral.at(-1));
      k = k * 3 + 1;
    } else {
      integral.push((k * 3) / 4 + integral.at(-1));
      k /= 2;
    }
  }
    // console.log(integral)
  return ranges.map(([s, e]) => {
    if (integral.length - 1 + e < s) return -1;
    return integral.at(e-1) - integral[s];
  });
}