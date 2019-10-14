
class CustomWorld {
  constructor() {
    this.variable = 0;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
  get(){
    return this.variable;
  }
}

module.exports = CustomWorld;