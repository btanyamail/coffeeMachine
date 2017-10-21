class CoffeeDrink {
  constructor(coffee, water, price, x, y, coffeeMachine) {
    this.coffee = coffee;
    this.water = water;
    this.price = price;
    this.x = x;
    this.y = y;
    this.imgExt = '.png';
    this.img = ['Cup', 'Water', 'Cream']
    this.coffeeMachine = coffeeMachine;
  }

  get checkMin() {
    return this.checkMin();
  }
  checkMin() {
    console.log('outputting Coffee Drink object');
    console.log(this);
    console.log('oputting CoffeeMachine object');
    console.log(this.coffeeMachine);

    if (
      this.coffeeMachine.mainCoffee >= this.coffee &&
      this.coffeeMachine.mainWater >= this.water &&
      this.coffeeMachine.mainCash >= this.price //&&
      //this.coffeeMachine.mainSugar >= 4
    ) {
      return true;
    } else {
      return false;
    }
  }

  get useIngredients() {
    return this.useIngredients();
  }

  useIngredients() {
    this.coffeeMachine.mainCoffee-=this.coffee;
    this.coffeeMachine.mainWater-=this.water;
    this.coffeeMachine.mainSugar -= this.coffeeMachine.mainSugar;
    this.coffeeMachine.mainCash -= this.price;
    this.coffeeMachine.mainCream -= this.coffeeMachine.mainCream;

  }
  get brew() {
    return this.brew();
  }

  brew() {
    var checkedMin = this.checkMin();
    alert(checkedMin);
    if (checkedMin) {
      this.coffeeMachine.makeCoffee(this);
      //this.drawCup();
      this.useIngredients();
      //console.log(this.coffeeMachine);
    } else {
      alert('going to try to check ingredients');
      this.coffeeMachine.checkIngredients(this);
    }
  }
};
