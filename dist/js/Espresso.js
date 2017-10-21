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
