function order () {
  this.pizzas = []
  this.currentId = 0
}

order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

AddressBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

order.prototype.findContact = function (id) {
  for (let i = 0; i < this.pizzas.length; i++) {
    if (this.contacts[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  }
  return false;
};

AddressBook.prototype.deleteContact = function (id) {
  for (let i = 0; i < this.pizzass.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
        return true;
      }
    }
  }
  return false;
};

function Pizza(crust, sauce, toppings) {
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
}