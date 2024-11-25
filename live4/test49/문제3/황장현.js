function solution(new_id) {
  const firstStep = new_id.toLowerCase();
  const secondStep = firstStep.replace(/[^a-z0-9-_.]/g, '');
  const thirdStep = secondStep.replace(/\.{2,}/g, '.');
  const fourthStep = thirdStep.replace(/^\.|\.$/g, '');
  let fifthStep = fourthStep === '' ? 'a' : fourthStep;
  let sixthStep =
    fifthStep.length >= 16
      ? fifthStep.slice(0, 15).replace(/\.$/, '')
      : fifthStep;
  let seventeenthStep = sixthStep;
  while (seventeenthStep.length < 3) {
    seventeenthStep += seventeenthStep[seventeenthStep.length - 1];
  }

  return seventeenthStep;
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('z-+.^.'));
console.log(solution('=.='));
console.log(solution('123_.def'));
console.log(solution('abcdefghijklmn.p'));
