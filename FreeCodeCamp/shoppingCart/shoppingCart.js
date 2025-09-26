// get the DOM elements in the html 
const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

// the products array
const products = [
  {
    id: 1,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
  {
    id: 2,
    name: "French Macaron",
    price: 3.99,
    category: "Macaron",
  },
  {
    id: 3,
    name: "Pumpkin Cupcake",
    price: 3.99,
    category: "Cupcake",
  },
  {
    id: 4,
    name: "Chocolate Cupcake",
    price: 5.99,
    category: "Cupcake",
  },
  {
    id: 5,
    name: "Chocolate Pretzels (4 Pack)",
    price: 10.99,
    category: "Pretzel",
  },
  {
    id: 6,
    name: "Strawberry Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 7,
    name: "Chocolate Macarons (4 Pack)",
    price: 9.99,
    category: "Macaron",
  },
  {
    id: 8,
    name: "Strawberry Pretzel",
    price: 4.99,
    category: "Pretzel",
  },
  {
    id: 9,
    name: "Butter Pecan Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 10,
    name: "Rocky Road Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 11,
    name: "Vanilla Macarons (5 Pack)",
    price: 11.99,
    category: "Macaron",
  },
  {
    id: 12,
    name: "Lemon Cupcakes (4 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
];

// creat the elememts and use the object destructing to creta the varibles 
products.forEach(({name, id, price, category}) => {
    dessertCards.innerHTML += `
    <div class= "dessert-card">
        <h2>${name}</h2>
        <p class="dessert-price">$${price}</p>
        <p class="product-category"> Category: ${category}</p>
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart
        </button>
    </div>`
});


// creete a class
class ShoppingCart {
  constructor(parameters) {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25
  }
  
  addItem(id, products){
    
    const product = products.find(item => item.id === id); 
    const {name, price} = product; 
    this.items.push(product)

    // count the number of products in the array
    const totalCountPerProduct =  {}
    this.items.forEach(dessert => {
      // checks if the product exist indise the totalCountPerProduct and id it doesnot exit add the value of 0 and increment the value by one and return the value
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;//  assign  the value  
      
    });

    const currentProductCount = totalCountPerProduct[product.id]; //  gets the current quantity of a specific product from a totalCountPerProduct object, using the product's ID as the key.
    const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`); // get the span element

    currentProductCount > 1 
      ? currentProductCountSpan.textContent = `${currentProductCount}x`  // if greater than 1 count the number of items added
      : productsContainer.innerHTML += `
      <div id="dessert${id}" class="product">
        <p>
          <span class="product-count" id="product-count-for-id${id}"></span>${name}
        </p>
        <p>${price}</p>
      </div>
      `;
  }

  //  return the length of the array
  getCounts(){
    return this.items.length;
  }

  // calcuulate taxes
  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  // calculate the total
  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${this.total.toFixed(2)}`;
    return this.total;
  }

  // clears the cart and check if false show an alert message
  clearCart(){
    if(!this.items.length){
      alert("Your shopping cart is already empty");
      return;
    }

  // confirmation message when clearing the cart using the confirm prompt
  const isCartCleared = confrim("Are you sure you want to clear all items from your shopping cart?");

  if(isCartCleared){
    this.items = [];
    this.total= 0;
    productsContainer.innerHTML = "";
    totalNumberOfItems.textContent = 0;
    cartSubTotal.textContent = 0;
    cartTaxes.textContent = 0;
    cartTotal.textContent = 0;

  }
  }
}

// create the instances
const cart = new ShoppingCart(); 

// get element add to cart btn
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

// convert the add To button into an array using the spread syntax
[...addToCartBtns].forEach((btn) =>  {
  btn.addEventListener("click",(event) =>  {
    cart.addItem(Number(event.target.id),  products) //  pass product array and an id as arguments
    totalNumberOfItems.textContent = cart.getCounts();// callback the getcounts method retuned value
    cart.calculateTotal(); // callback the calculatetotal function which in turn calls the calculatetax function
  })
})
// add event listner to show or hide the cart
cartBtn.addEventListener("click", ()=>{
  isCartShowing = !isCartShowing; // reassign iscartShowing to false
  showHideCartSpan.textContent = isCartShowing ? "Hide" :  "Show";
  cartContainer.style.display = isCartShowing ? "block" :  "none"
})

// add  event listener to clear the cart and  callback the clearcart function
clearCartBtn.addEventListener("click", ()=> {
  cart.clearCart.bind(cart)
})



// create a products arry of objects

// iterate through the product array and create a new div element

//  declare a class

// declare a constructor inside the class

// declare a method inside the class
    // indise the method use the find method to look for te product in that array and return the product object if found 
    // use object destructing to assign the variable name and price
    // push the found product inside the items array

// declare a obejct to count number of times an elemet appears and increment by one. warp the condition in paranthesis. use the logic operator to compare
 // if the product doesnot exist and retunrs undefined assign the id property to 0 and add 1 and if it exist return the id property and add 1

// display the product that has been added

// get the matching element by setting the id value to product-count-for-id${product.id}

// check if the current product is already in the cart and return undefined if both true and false to avoid syntax error

// remove the undefined if true and add text content to the currentPorductCountSpan with a temperal literal of ${currentProductCount}

// remove the undefined if false and add a new div element to the productcontainer and a class of product and id of dessert.id

// create an instance of the object shoppingCart

// get the add cart btn using the getElement by class name and convert the variable into an array

// add an event listener to the add cart btn to listen for a click event
    // the event listener should callback the method object and pass arguments as id and products
    
// add a click event on the cart btn to change the span element text content to show or hide the cart items

// add a calculate total () method that has a variable sub total and it uses the reduce method to calculate the totaliin the items array
    // declare the tax varible and assign the value to the calculateTaxes callback function and pass subtotal as its arguments 

// add a calculate taxt rate that takes the amount paramater and it multiply using the taxRate divided by 100



// 
