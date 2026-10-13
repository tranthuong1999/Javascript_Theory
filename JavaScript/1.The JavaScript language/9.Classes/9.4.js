


/*
class CoffeeMachine {
    #waterAmount = 10;
}

class SmartCoffeeMachine extends CoffeeMachine {
    checkWater() {
        console.log("waterAmount", this.waterAmount)
        return this._waterAmount > 0;
    }
}

const water = new SmartCoffeeMachine();
console.log(water.checkWater())
*/

class CoffeeMachine {
    _waterAmount = 0;

    constructor(power) {
        this.power = power;
    }
}

const coffeeMachine = new CoffeeMachine(100);

coffeeMachine._waterAmount = -10;

console.log(coffeeMachine._waterAmount); // -10