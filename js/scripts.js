function Order () {
  this.pizzas = []
  this.currentId = 0
}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.findpizza = function (id) {
  for (let i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  }
  return false;
};

Order.prototype.deletePizza = function (id) {
  for (let i = 0; i < this.pizzas.length; i++) {
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

let order = new Order();

function displayPizzaDetails(orderToDisplay) {
  let pizzasList = $("ul#order");
  let htmlForPizzaInfo = "";
  orderToDisplay.pizzas.forEach(function (pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.crust + " " + pizza.sauce + " - " + pizza.toppings + "</li>";
  })
  pizzasList.html(htmlForPizzaInfo);
};

function showPizza(pizzaId) {
  const pizza = order.findPizza(pizzaId)
  $("#show-order").show();
  $(".crust").html(pizza.crust);
  $(".sauce").html(pizza.sauce);
  $(".toppings").html(pizza.toppings);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + pizza.id + ">Delete<button>");
}

function attachContactListeners() {
  $("ul#order").on("click", "li", function () {
    showOrder(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    order.deletePizza(this.id);
    $("#show-order").hide();
    displayPizzaDetails(order);
  });
}

$(document).ready(function () {
  attachContactListeners();
  $("form#pizza").submit(function (event) {
    event.preventDefault();
    const inputtedCrust = $("input.crust").val();
    const inputtedSauce = $("input.sauce").val();
    const inputtedToppings = $("input.toppings").val();
    let newPizza = new Pizza(inputtedCrust, inputtedSauce, inputtedToppings);
    $("input.crust").val("");
    $("input.sauce").val("");
    $("input.toppings").val("");
    order.addPizza(newPizza);
    displayPizzaDetails(order);
  })
})