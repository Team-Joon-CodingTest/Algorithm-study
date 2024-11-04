const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M] = input[0];
  const adjList = Array.from({ length: N + 1 }, () => []);

  for (let i = 1; i <= M; i++) {
    const [A, B, C] = input[i];
    adjList[A].push([B, C]);
    adjList[B].push([A, C]);
  }

  class MinHeap {
    constructor() {
      this.heap = [];
    }

    push(node) {
      this.heap.push(node);
      this._heapifyUp();
    }

    pop() {
      if (this.size() === 1) return this.heap.pop();
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this._heapifyDown();
      return root;
    }

    size() {
      return this.heap.length;
    }

    _heapifyUp() {
      let index = this.heap.length - 1;
      while (
        index > 0 &&
        this.heap[index][0] < this.heap[Math.floor((index - 1) / 2)][0]
      ) {
        [this.heap[index], this.heap[Math.floor((index - 1) / 2)]] = [
          this.heap[Math.floor((index - 1) / 2)],
          this.heap[index],
        ];
        index = Math.floor((index - 1) / 2);
      }
    }

    _heapifyDown() {
      let index = 0;
      while (
        (index * 2 + 1 < this.heap.length &&
          this.heap[index][0] > this.heap[index * 2 + 1][0]) ||
        (index * 2 + 2 < this.heap.length &&
          this.heap[index][0] > this.heap[index * 2 + 2][0])
      ) {
        let smallerChildIndex = index * 2 + 1;
        if (
          index * 2 + 2 < this.heap.length &&
          this.heap[index * 2 + 2][0] < this.heap[index * 2 + 1][0]
        ) {
          smallerChildIndex = index * 2 + 2;
        }
        [this.heap[index], this.heap[smallerChildIndex]] = [
          this.heap[smallerChildIndex],
          this.heap[index],
        ];
        index = smallerChildIndex;
      }
    }
  }

  function dijkstra(start) {
    const distances = Array(N + 1).fill(Infinity);
    const minHeap = new MinHeap();
    minHeap.push([0, start]);
    distances[start] = 0;

    while (minHeap.size() > 0) {
      const [currentCost, currentNode] = minHeap.pop();

      if (currentCost > distances[currentNode]) continue;

      for (const [nextNode, nextCost] of adjList[currentNode]) {
        const newCost = currentCost + nextCost;

        if (newCost < distances[nextNode]) {
          distances[nextNode] = newCost;
          minHeap.push([newCost, nextNode]);
        }
      }
    }

    return distances[N];
  }

  return dijkstra(1);
}

console.log(solution(input));
