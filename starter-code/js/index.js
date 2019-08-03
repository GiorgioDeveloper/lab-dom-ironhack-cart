
// here we nested 2 functions in order to get the price calculated, by line and total.

//this function call the 3 elements (qty, cost, result) runs a for loop to go into every object of the array (array because we used get Elements), creates a new variable itemPrice to multiply the 2 values, and re-attribute the variable result with the new value which get pushed into the DOM

function priceProduct () {
  var results = document.getElementsByClassName("result");
  const productCost = document.getElementsByClassName("productCost");
  const qty = document.getElementsByClassName("qty");

  for (let i =0 ; i < results.length ; i++) {
    const itemPrice = qty[i].value * productCost[i].innerHTML;
    results[i].innerHTML  = "<b>"+ itemPrice + "</b>";
  }
}

// this function is the one attributed to the event onclick added directly in the button HTML code. at first it fires the previous function for qty*price, then it calls the grand total, then it calls the NEW results per line, run a for loop based on the lenght of the array result, and add each value to the variable total, the parseInt is needed because the result is preceived as text and we need to get an integer. Last part of the function redifine the var grandTotal, which updates the DOM grand total.

function totalPrice () {
  priceProduct()
  const grandTotal = document.getElementsByClassName("totalPrice")[0];
  var results = document.getElementsByClassName("result");
  var total = 0;
   for (let i =0 ; i < results.length ; i++) {
   total=total + parseInt(results[i].getElementsByTagName("b")[0].innerHTML)
   }
   grandTotal.innerHTML = total;
}

// here we assign the event listener to each button-delete, 
//window.onlad is used to running a function or calling elements by default as soon as the page is loaded

window.onload = addEvents()

function addEvents(){
  let buttons = document.getElementsByClassName("btn-delete");
  for(let i=0; i<buttons.length ; i++){
  document.getElementsByClassName("btn-delete")[i].onclick = deleteItem;
 }
 document.getElementById("create").onclick = createItem
}

// this function is deleting the lines based on the .currentTarget method to establish which button is triggered,  and the .closest method to grab the closest element with flex container attribution, and then remove it using the method .remove
function deleteItem (e) {
  let theButtonClicked = e.currentTarget;
  let rowToDelete = theButtonClicked.closest(".flexContainer");
  rowToDelete.remove()
  // let parent = document.getElementById("bodyClass");
  // parent.removeChild(rowToDelete);
}

// this function is creating Items using createElement
function createItem () {
let prodName = document.getElementById("prodName").value
let prodCost = document.getElementById("prodCost").value

let newProduct = document.createElement("section")
newProduct.className = ("flexContainer")
newProduct.innerHTML = (`<div><span class = "productName">${prodName}</span></div>
<div>$<span class = "productCost">${prodCost}</span></div>
<div>Qty <input type="number" class="qty"></div>
<div>$<span class = "result">0</span></div>
<div><button type="button" name="button" class="btn btn-delete">Delete</button></div>`)
document.getElementById("bodyClass").appendChild(newProduct);

// here we add the event listener onclick to the new button delete

addEvents()
}

//adding a new product
//We need three elements
// One button, two input fields
//button should listen to an click event
// the click event get value of two inputfields



// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   //1. add eventlistener to btn
//   //2. callback = 'business logic.
//   //3. get innerHTML of price of product
//   //4. get quantity of product (value of input)
//   //5. multiply these two values. 
//   //6. set innerHTML of multiplication in result.

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

