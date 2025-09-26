// // // get the relevant variables
// // const cartContainer = document.getElementById("cart-container")
// // const productsContainer = document.getElementById("products-container")
// // const dessertCards = document.getElementById("dessert-card-container")
// // const totalNumberOfItems= document.getElementById("total-items");
// // const cartSubTotal = document.getElementById("subtotal");
// // const cartTaxes = document.getElementById("taxes");
// // const cartTotal = document.getElementById("total");
// // const cartBtn = document.getElementById("cart-btn");
// // const clearCartBtn = document.getElementById("clear-cart-btn");
// // const showHideCartSpan =  document.getElementById("show-hide-cart");
// // let isCartShowing = false;

// // // products array
// // const products = [
// //   {
// //     id: 1,
// //     name: "Vanilla Cupcakes (6 Pack)",
// //     price: 12.99,
// //     category: "Cupcake",
// //   },
// //   {
// //     id: 2,
// //     name: "French Macaron",
// //     price: 3.99,
// //     category: "Macaron",
// //   },
// //   {
// //     id: 3,
// //     name: "Pumpkin Cupcake",
// //     price: 3.99,
// //     category: "Cupcake",
// //   },
// //   {
// //     id: 4,
// //     name: "Chocolate Cupcake",
// //     price: 5.99,
// //     category: "Cupcake",
// //   },
// //   {
// //     id: 5,
// //     name: "Chocolate Pretzels (4 Pack)",
// //     price: 10.99,
// //     category: "Pretzel",
// //   },
// //   {
// //     id: 6,
// //     name: "Strawberry Ice Cream",
// //     price: 2.99,
// //     category: "Ice Cream",
// //   },
// //   {
// //     id: 7,
// //     name: "Chocolate Macarons (4 Pack)",
// //     price: 9.99,
// //     category: "Macaron",
// //   },
// //   {
// //     id: 8,
// //     name: "Strawberry Pretzel",
// //     price: 4.99,
// //     category: "Pretzel",
// //   },
// //   {
// //     id: 9,
// //     name: "Butter Pecan Ice Cream",
// //     price: 2.99,
// //     category: "Ice Cream",
// //   },
// //   {
// //     id: 10,
// //     name: "Rocky Road Ice Cream",
// //     price: 2.99,
// //     category: "Ice Cream",
// //   },
// //   {
// //     id: 11,
// //     name: "Vanilla Macarons (5 Pack)",
// //     price: 11.99,
// //     category: "Macaron",
// //   },
// //   {
// //     id: 12,
// //     name: "Lemon Cupcakes (4 Pack)",
// //     price: 12.99,
// //     category: "Cupcake",
// //   },
// // ]

// // // loop through the product array to create a div element with the products
// // products.forEach(({name, price, id, category}) => {
// //   dessertCards.innerHTML += 
// //       `<div class = "dessert-card">
// //           <h2>${name}</h2>
// //           <p classs = "dessert-price">$${price}</p>
// //           <p class="product-category">Category: ${category}</p>
// //           <button id = "${id}" class = "btn add-to-cart-btn">Add to cart</button>
// //       </div>`
// // })

// // // shopping class

// // class ShoppingCart {
// //   constructor() {
// //     this.items = [];
// //     this.total = 0;
// //     this.taxRate = 8.25;
// //   }

// //   // additem method
// //   addItem(id, products){
// //     const product = products.find(item => item.id === id);
// //     const {name, price} = product;
// //     this.items.push(product);

// //     // count the number of product in the cart 
// //     const totalCountPerProduct = {};
// //     this.items.forEach((dessert) => {
// //       totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1 ;// check if the product exist and if it doesnot add the id plus 1 and if it does also add the id plus 1
// //     })
    
// //     const currentProductCount = totalCountPerProduct[product.id]; // get the value of the porperty of the current object totalCountPerProduct. the curentProductCount becomes a number 
// //     const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);// Looks for an HTML element in the page with an id matching the string product-count-for-id${id}.

// //     currentProductCount > 1 
// //       ? currentProductCountSpan.textContent = `${currentProductCount}x` : productsContainer.innerHTML += 
// //       `<div id="dessert${id}" class="product">
// //         <p>
// //           <span class ="product-count" id ="product-count-for-id${id}"></span>${name}
// //         </p>
// //         <p>${price}</p>
// //       </div>
// //       `;
// //   }

// //   // get counts method
// //   getCounts(){
// //     return this.items.length;
// //   }

// //   // calculate taxes
// //   calculateTaxes(){
// //     return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
// //   }

// //   // calculate total
// //   calculateTotal(){
// //     const subTotal = this.items.reduce((total, item) => total + item.price);
// //     const tax = this.calculateTaxes(subTotal); // callback the calculateTaxes and pass an argument subtotal
// //     this.total = subTotal + tax; // update total property
// //     cartSubTotal.textContent = `$${subTotal.toFixed(2)}`; // display the subtotal
// //     cartTaxes.textContent = `$${tax.toFixed(2)}`; // display the taxes
// //     cartTotal.textContent = `$${this.total.toFixed(2)}`;//  display cartTotal
// //     return this.total;
// //   }

// //   // clear the cart
// //   clearCart(){

// //     if(!this.items.length){
// //       alert("Your shopping cart is already empty");
// //       return;
// //     }
// //     // ask the user to  clear the items 
// //     const isCartCleared = confirm("Are you sure you want to clear all items from your shopping cart?");

// //     if(isCartCleared){

// //       this.items =[];
// //       this.total =  0;
// //       productsContainer.innerHTML = "";
// //       totalNumberOfItems.textContent = 0;
// //       cartSubTotal.textContent = 0;
// //       cartTaxes.textContent = 0;
// //       cartTotal.textContent = 0;

// //     }
// //   }
// // }

// // // instances of a cart
// // const cart = new ShoppingCart();
// // //  get the add cart button which is a nodelist 
// // const addToCartBtns = document.getElementsByClassName("add-to-cart-btn"); 

// // // convert the nodelist into an array using the spread operator and loop through the array by adding an event listener to all the buttons
// // [...addToCartBtns].forEach((btn) => {
// //   btn.addEventListener("click", (event) =>  {
// //     // callback the addItem function
// //     cart.addItem(Number(event.target.id), products); // pass the product and the id as arguments
// //     totalNumberOfItems.textContent = cart.getCounts(); // callback the fucntion to get the  total number of items in the cart
// //     cart.calculateTotal(); // callback the calculateTotal function
// //   })
// // })

// // // cartBtn button
// // cartBtn.addEventListener("click", () => {
// //   isCartShowing = !isCartShowing; // change the booelan value to true
// //   showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show"; // if true show the hide text and if false show the show text
// //   cartContainer.style.display = isCartShowing ? "block" : "none"; // is true change the css didplay property to block and if false change it to none 
// // });

// // // add  event listener to clear the cart and  callback the clearcart function
// // clearCartBtn.addEventListener("click", ()=> {
// //   cart.clearCart.bind(cart);
// // });


// // // Looks for an HTML element in the page with an id matching the string product-count-for-id${id}.
// // // / get the value of the porperty of the current object totalCountPerProduct. the curentProductCount becomes a number 



// // // loop throug the elements using forEach method 
// // // use the object destructuring and create a div element 


// // // create shoppingCart class
// // // add a method called addItem() two parameters  id and product

// // // find the product using find method

// // // get the name and price using destructing

// // // push the product into the item array

// // // total count per product to counter the number of  products

// // // loop through the items array and assign a deseert paramter

// // // check if the product already exist using the logical operator. if the product exist add plus 1 and if it doesnot (undefined) add plus 1
// // // totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0)+1

// // // get the current product count 

// // // create an instance of the class

// // // get the add cart button and convert it to an array using the spread syntax
// // // iterate through the button using the for each metod

// // // call back the add item method and pass two argument Number(event.target.id) and products
// // // add an click event listener with an event paramter and target the id. remember to convert the id to a number


// // // add a click event listner to the carbtn a

// // // invert the isCartshowing boolean value 

// // // change the showHideCartSpan variable to check if the isCartshowing is true then hide the cart and if false hsow the cart span

// // // style the cartContainer of the display property to check if isCartshowing is true change the display to block and if false change it to none 

// // // add a method getCounts that returns the number of item in the array

// // // add a clearCart method that checkk if the array is empty using the length
// // // deaclare a variable isCartCleared that uses a prompt message to ask if user what to clear all items
// // // this.items = [];
// //       // this.total = 0;
// //       // productsContainer.innerHTML = "";
// //       // totalNumberOfItems.textContent = 0;
// //       // cartSubTotal.textContent = 0;
// //       // cartTaxes.textContent = 0;
// //       // cartTotal.textContent = 0;


// // // add a calculateTax


// // project idea board and status

// // define project status
// const projectStatus =  {
//     PENDING: {
//         description: "Pending Execution"
//     },
//     SUCCESS: {
//         description:  "Executed Successfully"
//     },
//     FAILURE: {
//         description: "Execution Failed"
//     }
// }

// // define project class
// class ProjectIdea {
//     // initialize title description and default status
//     constructor(title, description) {
//         this.title = title;
//         this.description = description;
//         this.status = projectStatus.PENDING; // pending execution
//     }
//     updateProjectStatus(newStatus){
//         this.status = newStatus;
//     }
// }

// class  ProjectIdeaBoard {
//     constructor(title) {
//         this.title = title;
//         this.ideas = [];
//     }
//     // add idea to the ideas array
//     pin(idea){
//         this.ideas.push(idea);
//     }

//     // remove the idea 
//     unpin(){
//         this.ideas.pop();
//     }

//     // count the ideas in an array
//     count(){
//         return this.ideas.length;
//     }
//     // format output string
//     formatToString(){
//        let result = `${this.title} has ${this.count()} idea(s)\n`;
//     this.ideas.forEach(idea => {
//       result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
//     });
//     return result;

//     }
// }

// const idea11 = new ProjectIdea(
//   "Smart Window Locks",
//   "An automation project allowing users to lock, unlock windows automatically based on weather conditions."
// );
// console.log(idea11);

// const idea12 = new ProjectIdea(
//   "Fitness Tracker App",
//   "An app that tracks user workouts, diet, and sleep patterns."
// );
// idea12.updateProjectStatus(projectStatus.SUCCESS);
// console.log(idea12);

// const idea13 = new ProjectIdea(
//   "Breakfast Chef Robot",
//   "A robot that can follow a given list of instructions and prepare breakfast for the user and let them know through their phone."
// );
// idea13.updateProjectStatus(projectStatus.FAILURE);
// console.log(idea13);

// const idea14 = new ProjectIdea(
//   "Online Used Video Games Store",
//   "An online platform where users can buy second hand physical copies of video games from other users."
// );
// idea14.updateProjectStatus(projectStatus.SUCCESS);
// console.log(idea14);

// // Board Tests
// const emptyBoard = new ProjectIdeaBoard("Empty Board");
// console.log(emptyBoard.formatToString());

// const techProjects = new ProjectIdeaBoard("Tech Projects Board");
// const idea18 = new ProjectIdea(
//   "Smart Home System",
//   "An integrated system to control lighting, temperature, and security devices remotely."
// );
// techProjects.pin(idea18);
// console.log(techProjects.formatToString());


