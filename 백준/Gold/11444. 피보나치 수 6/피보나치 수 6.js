const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = BigInt(input[0]);

const mod = 1_000_000_007n;

let memo = new Map();

const fibo = (n) => {
  if (n === 0n) return 0n;
  if (n === 1n) return 1n;
  if (n === 2n) return 1n;
  if (memo[n] > 0n) return memo[n];

  if (n % 2n === 0n) {
    memo[n] = (fibo(n / 2n) * (fibo(n / 2n + 1n) + fibo(n / 2n - 1n))) % mod;
  }
  if (n % 2n === 1n) {
    memo[n] = (fibo((n + 1n) / 2n) ** 2n + fibo((n - 1n) / 2n) ** 2n) % mod;
  }
  return memo[n]
};

const result = fibo(n);
console.log(result.toString().replace('n', ''));
