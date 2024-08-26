const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const n = parseInt(input[0]);
  const log = input.slice(1);

  const office = {};

  for (let i = 0; i < n; i++) {
    const [name, action] = log[i].split(' ');

    if (action === 'enter') {
      office[name] = true;
    } else if (action === 'leave') {
      delete office[name];
    }
  }

  const peopleInOffice = [];

  for (const name in office) {
    if (office[name]) {
      peopleInOffice.push(name);
    }
  }

  peopleInOffice.sort().reverse();

  console.log(peopleInOffice.join('\n'));
}
solution(input);
