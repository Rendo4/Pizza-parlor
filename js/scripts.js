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

Pizza.prototype.cost = function() {
  return this.crustCost + toppingCost
}

Order.prototype.findPizza = function (id) {
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
    showPizza(this.id);
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
    tops = []
    event.preventDefault();
    const inputtedCrust = $("input:radio[name=crust]:checked").val();
    const inputtedSauce = $("input:radio[name=sauce]:checked").val();
    const inputtedToppings = $("input:checkbox[name=top]:checked").each(function(){
      const toppings = $(this).val()
      tops.push(toppings)
    })
    let newPizza = new Pizza(inputtedCrust, inputtedSauce, tops);
    order.addPizza(newPizza);
    displayPizzaDetails(order);
  })
})
