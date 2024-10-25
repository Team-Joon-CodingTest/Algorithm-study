function solution(keymap, targets) {
  var answer = [];
  map = new Map();

  for (key of keymap) {
    for (let i = 0; i < key.length; i++) {
      if (!map.has(key[i]) || i + 1 < map.get(key[i])) map.set(key[i], i + 1);
    }
  }

  for (target of targets) {
    let count = 0;
    for (let k = 0; k < target.length; k++) {
      count += map.get(target[k]);
    }
    answer.push(count || -1);
  }
  return answer;
}
