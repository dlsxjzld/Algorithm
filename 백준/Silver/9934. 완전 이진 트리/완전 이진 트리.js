const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(newNode) {
    if (this.root === null) {
      this.root = newNode
      return
    }
  }
}

const K = Number(input[0])
const builidings = input[1].split(" ").map(Number)
const visited = Array.from({ length: 2 ** K }, () => false)

const bt = new BinaryTree()

const divide = (arr) => {
  const Length = arr.length
  const middle = Math.floor(Length / 2)

  const newNode = new Node(arr[middle])
  if (Length === 1) return newNode

  newNode.left = divide(arr.slice(0, middle))
  newNode.right = divide(arr.slice(middle + 1))

  return newNode
}

bt.insert(divide(builidings))

let answer = ""
let currentNode = bt.root
const queue = [currentNode]
let index = 0
answer += currentNode.val +'\n'
let cnt = 1
let level = 2


while (queue.length > index) {
  const currentNode = queue[index++]

  if (!visited[currentNode.val]) {
    visited[currentNode.val] = true

    if (currentNode.left !== null) {
      queue.push(currentNode.left)
      answer += currentNode.left.val + " "
      cnt +=1
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right)
      answer += currentNode.right.val + " "
      cnt +=1
    }
    if(cnt === (2**level)-1 ){
        
        answer +='\n'
        level +=1
    }
  }
}

console.log(answer)
