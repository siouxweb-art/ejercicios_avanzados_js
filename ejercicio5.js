function rollDice(sidesOfRoll) {

    const randomNum = Math.floor(Math.random() * sidesOfRoll) + 1;

    return randomNum;
}

const result = rollDice(6);
console.log("El resultado de la tirada es:", result);