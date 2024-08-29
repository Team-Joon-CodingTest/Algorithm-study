const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const initialString = input[0];
  const commands = input.slice(2);

  let leftStack = initialString.split('');
  let rightStack = [];

  commands.forEach((command) => {
    if (command[0] === 'L') {
      if (leftStack.length > 0) {
        rightStack.push(leftStack.pop());
      }
    } else if (command[0] === 'D') {
      if (rightStack.length > 0) {
        leftStack.push(rightStack.pop());
      }
    } else if (command[0] === 'B') {
      if (leftStack.length > 0) {
        leftStack.pop();
      }
    } else if (command.startsWith('P')) {
      const charToAdd = command.split(' ')[1];
      leftStack.push(charToAdd);
    }
  });

  console.log(leftStack.join('') + rightStack.reverse().join(''));
}

solution(input);
