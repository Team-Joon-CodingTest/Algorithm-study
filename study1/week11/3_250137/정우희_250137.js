function solution(bandage, health, attacks) {
  let i = 0; //time
  let j = 0;
  let streamFlag = 0;
  const lastAttack = attacks[attacks.length - 1];
  let userHealth = health;

  for (i = 1; i <= lastAttack[0]; i++) {
    console.log('** Time', i, '**');

    //공격의 time과 현재 time이 일치할 경우 공격이 시행됩니다.
    if (i === attacks[j][0]) {
      console.log('Attack is accured!!');
      userHealth -= attacks[j][1];
      console.log('current health : ', userHealth);
      j++;
      streamFlag = 0;

      //공격 직후 체력이 0이하 라면 게임 오버
      if (userHealth <= 0) {
        return -1;
      }
    }
    //일치하지 않는 경우(공격이 없는 경우)는 붕대 치료를 진행합니다.
    else {
      console.log('healing~~');
      userHealth += bandage[1];
      console.log('current health : ', userHealth);
      streamFlag++;

      //붕대 치료 연속 스택과 보너스 값이 동일할 경우
      if (streamFlag === bandage[0]) {
        console.log('bonus healing~~');
        userHealth += bandage[2];
        console.log('current health : ', userHealth);
        streamFlag = 0;
      }
    }
    //최대 체력값을 초과할 경우
    if (userHealth > health) {
      console.log('overed');
      userHealth = health;
    }
  }

  return userHealth;
}
