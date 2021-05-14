var bill = prompt("What is your bill?");
var totalPrice = calculateTaxes(bill);
var tipTotal = calculateTip(totalPrice);

function calculateTaxes (bill, salesTax) { 
 var salesTax = .07;
 var totalPrice = bill * (1 + salesTax); return totalPrice; }

function calculateTip (totalPrice, tip) { 
  var tip = .05;
  var tipTotal = totalPrice * (1 + tip);
return tipTotal; }

document.body.querySelector(".message").innerHTML="Your final bill is "+tipTotal;