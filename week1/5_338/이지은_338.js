/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  var ans = [];
  for (var i = 0; i <= n; i++) {
    var binary = i.toString(2); // 숫자를 이진수 문자열로 변환
    var count = 0;
    for (var j = 0; j < binary.length; j++) {
      if (binary[j] === '1') {
        count++; // 이진수에서 '1'의 개수를 센다
      }
    }
    ans.push(count);
  }
  return ans;
};
