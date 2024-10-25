var replaceElements = function (arr) {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max;
    max = Math.max(temp, max);
  }
  return arr;
};
