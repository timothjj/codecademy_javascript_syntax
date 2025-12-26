const menu = {
  _meal:'',
  _price:0,
  set meal(mealToCheck) {
    if (typeof mealToCheck==='string') {
      this._meal = mealToCheck
    } else {console.log("Invalid meal option")}
  },
  set price(priceToCheck) {
    if (typeof priceToCheck==='number') {
      this._price = priceToCheck
    } else {
      console.log("Invalid price.")
    }
  },
  get todaysSpecial() {
    if (typeof this._meal === 'string' && typeof this._price === 'number') {
      return `Today's Special is ${this._meal} for \$${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
}

menu.meal='burgers';
menu.price=5.99;
console.log(menu.todaysSpecial);
//console.log(menu._price);
/*
menu._meal = 2;
menu._price = 'noodles'
console.log(menu['_meal'])
*/