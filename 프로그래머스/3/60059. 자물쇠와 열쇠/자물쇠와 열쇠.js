// 완전탐색
function solution(key, lock) {
  var answer = []

  const board = makeBoard(key, lock)

  const rotatedKeys = []
  let tmpKey = key.map((row) => [...row])
  for (let i = 0; i < 4; i += 1) {
    const newKey = rotate(tmpKey)
    rotatedKeys.push(newKey)
    tmpKey = newKey.map((row) => [...row])
  }

  for (let i = 0; i < 4; i += 1) {
    const curKey = rotatedKeys[i]
    answer.push(checkKeyAndLock(board, curKey, lock))
  }
  return answer.some((val) => val === true)
}

// board의 lock에 해당하는 위치 값이 모두 1인지 확인하는 기능 필요
// board의 lock에 해당하는 위치 값이 0이거나 2이면 false
// board의 lock에 해당하는 위치 값이 모두 1이면 true
function checkBoard(board, key, lock) {
  for (let lr = key.length - 1; lr < key.length - 1 + lock.length; lr += 1) {
    for (let lc = key.length - 1; lc < key.length - 1 + lock.length; lc += 1) {
      if (board[lr][lc] === 2 || board[lr][lc] === 0) {
        return false
      }
    }
  }
  return true
}

// board의 모든 위치에 key를 대입해보는 기능 필요
// board는 key와 lock을 합친 큰 지도
// key는 0과 1로 이루어져 있고, lock은 0과 1로 이루어져 있음
// key의 1이 lock의 0에 들어가야 함
// key의 0이 lock의 1에 들어가야 함
// 즉, board의 값이 2가 되면 안되고, board의 값이 0이 되면 안됨
// board의 lock에 해당하는 위치 값이 모두 1이어야 함
function checkKeyAndLock(board, key, lock) {
  for (let r = 0; r < key.length + lock.length - 1; r += 1) {
    for (let c = 0; c < key.length + lock.length - 1; c += 1) {
      const tmpBoard = board.map((row) => [...row])
      for (let kr = 0; kr < key.length; kr += 1) {
        for (let kc = 0; kc < key.length; kc += 1) {
          tmpBoard[r + kr][c + kc] += key[kr][kc]
        }
      }
      if (checkBoard(tmpBoard, key, lock)) {
        return true
      }
    }
  }
}

// key를 90도 로테이션하는 기능 필요
// 0, 90, 180, 270,
function rotate(key) {
  const rotatedKey = Array.from({ length: key.length }, () =>
    Array.from({ length: key.length }, () => null),
  )
  key.forEach((row, r) =>
    row.forEach((value, c) => {
      const tmp = value
      // 0 0 -> 0 2
      // 0 1 -> 1 2
      // 0 2 -> 2 2
      rotatedKey[c][key.length - 1 - r] = tmp
    }),
  )

  return rotatedKey
}

// 열쇠와 자물쇠 홈 일치하는지 확인하는 기능 필요

// 크게 만든 지도를 로테이션과 비교해야 하므로 깊은 복사하는 기능 필요

// 키 N x N
// 자물쇠 M x M

// 가로, 세로 2*(N-1) + M 인 큰 지도 필요
// 자물쇠는 지도의 가운데에 위치
function makeBoard(key, lock) {
  const keyLength = key.length
  const lockLength = lock.length
  const boardLength = 2 * (keyLength - 1) + lockLength

  const board = Array.from({ length: boardLength }, () =>
    Array.from({ length: boardLength }, () => 0),
  )
  for (let r = keyLength - 1; r < keyLength - 1 + lockLength; r += 1) {
    for (let c = keyLength - 1; c < keyLength - 1 + lockLength; c += 1) {
      board[r][c] = lock[r - (keyLength - 1)][c - (keyLength - 1)]
    }
  }
  return board
}
