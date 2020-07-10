# _{Arrays and Looping}_

#### A project practicing arrays and looping to return set of numbers with exceptions. 07/10/2020

#### By _**{Ryan Rendon}**_

## Description

This code will allow to select options to create custom pizzas. It takes in a size, a sauce and any number of selected toppings. It then creates the pizza, gives it an id and displays it on a clickable dropdown. After creation the cost is pushed to an array and a loop is ran to add them to give you a total cost among all pizzas. 

Clicking the created pizza will display your selections and gives the option to remove the pizza should the user decide they don't want that particular pizza anymore.

Examples: 
User selects medium, no sauce, and pineapple and submites. Returns a pizza with those selected and creates it at the bottom of the page as a clickable and updates the order total to $9($8 cost of medium + $1/topping). User can decide they don't want this pizza and delete it. 

## Known Bugs

The delete button is causing problems for the order total. Filtering it will delete all cases of that cost for instance if you had 3 pizzas: 2 that cost 13 and 1 that cost 9 and you only wanted to delete one 13 it would delete both 13s and you would have 2 pizzas that only cost $9. 

Does not require all fields at this time so you can build a pizza showing undfiend on submit add pizza.

### License
Copyright (c) 2020 **_{Ryan Rendon}_**