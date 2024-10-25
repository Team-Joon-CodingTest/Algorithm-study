function dfs(result, depth) {
  if (depth == n - 1) {
    let str = '';
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i];
    str += arr[n - 1] + '';
    current = eval(str.split(' ').join(''));
    if (current == 0) console.log(str);
    return;
  }
  for (let x of [' ', '+', '-']) {
    result.push(x);
    dfs(result, depth + 1);
    result.pop();
  }
}
