export function fight(firstFighter, secondFighter) {

  let firstFighterHealth = firstFighter.health;
  let secondFighterHealth = secondFighter.health;

  showFightImage();

  while(true) {
    secondFighterHealth = secondFighterHealth - getDamage(firstFighter, secondFighter);
    if (secondFighterHealth <= 0) {
      return firstFighter;
    }
    firstFighterHealth = firstFighterHealth - getDamage(secondFighter, firstFighter);
    if (firstFighterHealth <= 0) {
      return secondFighter;
    }
  }
}

export function getDamage(attacker, enemy) {
  let damage = getHitPower(attacker) - getBlockPower(enemy);
  if (damage < 0) return 0;
  return damage; 
}

export function getHitPower(fighter) {
  const criticalHitChance = Math.random() + 1;
  const power = fighter.attack * criticalHitChance;
  return power;
}

export function getBlockPower(fighter) {
  const dodgeChance = Math.random() + 1;
  const power = fighter.defense * dodgeChance;
  return power;
}

function showFightImage() {
  const fightElement = document.getElementById('loading-overlay');
  fightElement.innerHTML = '<img id="overlay-image" src="resources/fight.jpg" alt="fight!"/>';
  fightElement.style.visibility = 'visible';
  setTimeout(() => fightElement.style.visibility = 'hidden' ,400);
}
