class Americano extends CoffeeDrink {
  constructor(coffee, water, price, x, y, coffeeMachine) {
    super(coffee, water, price, x, y, coffeeMachine);
    this.coffeeType = 'Americano';
  }

  get drawCup() {
    return this.drawCup();
  }
  get drawComponent() {
    return this.drawComponent();
  }

  drawCup() {
    var cupHtml = '<img src = "Cup.png">',
      //  ref = this;
      cupElement = $(cupHtml);
    cupElement.css({
      position: "absolute",
      left: this.x,
      top: this.y
    });
    $("p").append(cupElement);

  };
  drawComponent() {
    var waterHtml = '<img src="water.png">',
      ref = this;
    this.waterElement = $(waterHtml);
    this.waterElement.css({
      position: "absolute",
      left: ref.x,
      top: ref.y
    });
    $("p").append(this.waterElement);
  };



};

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

class Espresso extends CoffeeDrink {
  constructor(coffee, water, price, x, y, coffeeMachine) {
    super(coffee, water, price, x, y, coffeeMachine);
    this.coffeeType = 'Espresso';
  }

  get drawCup() {
    return this.drawCup();
  }
  get drawComponent() {
    return this.drawComponent();
  }

  drawCup() {
    var cupHtml = '<img src = "Cup.png">',
      //  ref = this;
      cupElement = $(cupHtml);
    cupElement.css({
      position: "absolute",
      left: this.x,
      top: this.y
    });
    $("p").append(cupElement);

  };
  drawComponent() {
    var waterHtml = '<img src="water.png">',
      ref = this;
    this.waterElement = $(waterHtml);
    this.waterElement.css({
      position: "absolute",
      left: ref.x,
      top: ref.y
    });
    $("p").append(this.waterElement);
  };
};

class RegularCoffee extends CoffeeDrink {
  constructor(coffee, water, price, x, y, coffeeMachine) {
    super(coffee, water, price, x, y, coffeeMachine);
    this.coffeeType = 'Regular Coffee';
  }

  get drawCup() {
    return this.drawCup();
  }
  get drawComponent() {
    return this.drawComponent();
  }

  drawCup() {
    var cupHtml = '<img src = "Cup.png">',
      //  ref = this;
      cupElement = $(cupHtml);
    cupElement.css({
      position: "absolute",
      left: this.x,
      top: this.y
    });
    $("p").append(cupElement);

  };
  drawComponent() {
    var waterHtml = '<img src="water.png">',
      ref = this;
    this.waterElement = $(waterHtml);
    this.waterElement.css({
      position: "absolute",
      left: ref.x,
      top: ref.y
    });
    $("p").append(this.waterElement);
  };
};
