function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({ priority, index }));
  let count = 1;
  while (queue.length > 0) {
    const max = Math.max(...queue.map((item) => item.priority));
    const current = queue.shift();
    if (current.priority < max) {
      queue.push(current);
    } else {
      if (current.index === location) {
        return count;
      }
      count++;
    }
  }
}
// console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
