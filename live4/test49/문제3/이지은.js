function solution(new_id) {
  var answer = '';
  newId = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.+|\.+$/g, '');

  if (newId === '') {
    newId = 'a';
  }
  if (newId.length > 15) {
    newId = newId.slice(0, 15).replace(/\.+$/g, '');
  }
  if (newId.length <= 2) {
    newId = newId.padEnd(3, newId[newId.length - 1]);
  }

  return (answer = newId);
}

console.log(solution('=.='));
