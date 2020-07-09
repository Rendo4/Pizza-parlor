function Order () {
  this.pizzas = []
  this.currentId = 0
}

function cost(inputtedSize) {
  if (inputtedSize === "Small"){
    inputtedSize = 6;
  } else if  (inputtedSize === "Medium") {
    inputtedSize = 8;
  } else if (inputtedSize === "Large") {
    inputtedSize = 10;
  } else { (inputtedSize === "Xlarge")
    inputtedSize = 12;
  }
  return inputtedSize;
};

function deleteCost (total, pizza) {
  let totalCost= 0
  for(var i = 0; i < total.length; i++){
    //code to target and remove from an array here
    totalCost = total.reduce(function(a, b){
    return a + b;
    }, 0);
  $("#sum").text(totalCost)
  }
}


function orderTotal(total) {
  let totalCost = 0
  totalCost = total.reduce(function(a, b){
  return a + b;
  }, 0);
  $("#sum").text(totalCost)
}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

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

function Pizza(size, sauce, toppings, cost) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.cost = cost
}

let order = new Order();

function displayPizzaDetails(orderToDisplay) {
  let pizzasList = $("ul#order");
  let htmlForPizzaInfo = "";
  orderToDisplay.pizzas.forEach(function (pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.sauce + "-" + pizza.toppings + " " + pizza.cost + "</li>";
  })
  pizzasList.html(htmlForPizzaInfo);
};

function showPizza(pizzaId) {
  const pizza = order.findPizza(pizzaId)
  $("#show-order").show();
  $(".size").html(pizza.size);
  $(".sauce").html(pizza.sauce);
  $(".toppings").html(pizza.toppings);
  $(".cost").html(pizza.cost);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + pizza.id + ">Delete<button>");
}

function attachContactListeners() {
  $("ul#order").on("click", "li", function () {
    showPizza(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    order.deletePizza(this.id);
    deleteCost(total)
    $("#show-order").hide();
    displayPizzaDetails(order);
  });
}

// find a way to make not a global varriable
total = []
$(document).ready(function () {
  attachContactListeners();
  $("form#pizza").submit(function (event) {
    event.preventDefault();
    tops = []
    const inputtedSize = $("input:radio[type=radio]:checked").val();
    const inputtedSauce = $("input:radio[name=sauce]:checked").val();
    const inputtedToppings = $("input:checkbox[name=top]:checked").each(function(){
      const toppings = $(this).val()
      tops.push(toppings)
    });
    const pizzaCost = cost(inputtedSize) + tops.length
    total.push(pizzaCost)
    let newPizza = new Pizza(inputtedSize, inputtedSauce, tops, pizzaCost);
    order.addPizza(newPizza);
    displayPizzaDetails(order);
    orderTotal(total)
  })
})