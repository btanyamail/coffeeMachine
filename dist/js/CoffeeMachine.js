class CoffeeMachine {
  constructor(mainCoffee, mainWater, mainCream, mainCash, mainSugar, ingredient) {
    this.mainCoffee = mainCoffee;
    this.mainWater = mainWater;
    this.mainCream = mainCream;
    this.mainCash = mainCash;
    this.mainSugar = mainSugar;
    this.ingredient = ingredient;
    this.coffeeDrinks = [];
  }
  get refill() {
    return this.refill();
  }
  get checkIngredients() {
    return this.checkIngredients();
  }
  set makeCoffee(coffeeDrink) {
    return this.makeCoffee(coffeeDrink);
  }
  refill() {
    console.log(this);
    switch (this.ingredient) {
      case 'coffee':
        this.mainCoffee += 10;
        break;
      case 'sugar':
        this.mainSugar = document.getElementById('sugar').value;
        break;
      case 'cream':
        this.mainCream = document.getElementById('cream').value;
        break;
      case 'water':
        this.mainWater += 10;
        break;
      default:

    }
  }
  checkIngredients(coffeeDrink) {
    // console.log('outputing object inside checkIngredients\n');
    // console.log(this);

    if (this.mainCoffee < coffeeDrink.coffee) {
      alert('No coffee !');
    } else if (this.mainWater < coffeeDrink.water) {
      alert('No water !');
    } else if (this.mainCash < coffeeDrink.price) {
      var dif = this.mainCash - coffeeDrink.price;
      alert('Please add ' + Math.abs(dif) + ' USD');
    }
    // else if (this.mainSugar <= 3) {
    //   alert('No sugar !');
    // } else if (this.mainCream < coffeeDrink.cream) {
    //   alert('No cream !');
    // }
  }
  makeCoffee(coffeeDrink) {
    //alert('ok about to make some coffee!');
    console.log(coffeeDrink);
    this.coffeeDrinks.unshift(coffeeDrink);
    //alert(this.coffeeDrinks[0]);
    document.getElementById('recentCoffee').innerHTML = this.coffeeDrinks[0].coffeeType;

  }
  get indicateLevel() {
    return this.indicateLevel();
  }

  indicateLevel() {
    document.getElementById('coffeeLevel').innerHTML = coffeeMachine.mainCoffee;
    document.getElementById('waterLevel').innerHTML = coffeeMachine.mainWater;
    document.getElementById('cashAdded').innerHTML = coffeeMachine.mainCash;
    document.getElementById('sugarLevel').innerHTML = coffeeMachine.mainSugar;
    document.getElementById('creamLevel').innerHTML = coffeeMachine.mainCream;
  }
  get addCash() {
    return this.addCash();
  }
  addCash() {
    this.mainCash = document.getElementById('cash').value;
    console.log(this.mainCash);

  }

};
