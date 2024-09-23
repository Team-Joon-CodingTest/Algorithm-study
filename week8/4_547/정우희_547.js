var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  let provinceCount = 0;
  const visited = new Set();

  function dfs(city) {
    for (let i = 0; i < n; i++) {
      if (isConnected[city][i] === 1 && !visited.has(i)) {
        visited.add(i);
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      provinceCount++;
    }
  }

  return provinceCount;
};
