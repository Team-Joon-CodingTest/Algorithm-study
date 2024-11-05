const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const lastInsertedValue = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex][1] <= lastInsertedValue[1]) break;

      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }
    this.heap[index] = lastInsertedValue;
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const rootValue = this.heap[0];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex][1] < this.heap[smallest][1]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][1] < this.heap[smallest][1]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      this.heap[index] = this.heap[smallest];
      index = smallest;
    }
    this.heap[index] = rootValue;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function solution(input) {
  const [V, E] = input[0];
  const start = input[1][0];

  const nearNode = Array.from({ length: V + 1 }, () => []);

  for (let i = 2; i < E + 2; i++) {
    const [u, v, w] = input[i];
    nearNode[u].push([v, w]);
  }

  function dijkstra(start) {
    const distances = Array(V + 1).fill(Infinity);
    const minHeap = new MinHeap();
    minHeap.insert([start, 0]);
    distances[start] = 0;

    while (!minHeap.isEmpty()) {
      const [currentNode, currentCost] = minHeap.extractMin();

      if (currentCost > distances[currentNode]) continue;

      for (const [nextNode, nextCost] of nearNode[currentNode]) {
        const newCost = currentCost + nextCost;

        if (newCost < distances[nextNode]) {
          distances[nextNode] = newCost;
          minHeap.insert([nextNode, newCost]);
        }
      }
    }

    return distances.slice(1).map((a) => (a === Infinity ? 'INF' : a));
  }

  const result = dijkstra(start);

  return result.join('\n');
}

console.log(solution(input));
