
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
]
// get the elements with their classes and assign the to relevant variables
const selectContainer = document.querySelector(".select-container"); 
const productContainer = document.querySelector(".products-container");
// const displayTotal = document.querySelector(".total");

//Step 1: Filter instruments based on selected category
function instrumentCards(instrumentCategory) {
  const instruments = instrumentCategory === 'all'
    ? instrumentsArr
    : instrumentsArr.filter((item) => item.category === instrumentCategory);

    console.log(instruments);

  // Step 1: Generate the card HTML from the filtered instruments
  const instrumentsUsed = instruments.map((item) => {
    return `<div class="card">
              <h2>${item.instrument}</h2>
              <p>$${item.price}</p>
            </div>`;
  }).join("");

  // step 3: calculate the total by using the for of loop
  let total = 0;
  for(const item of instruments){
    total= total + item.price;
  }
  console.log(total);

  // step 4: dipslay the total in the span element in html
  const displayTotal = document.getElementById("total");
  displayTotal.textContent= total;

  // return statement
  return instrumentsUsed;
}


//   // using the object destructing
//   return instruments.map(({instrument, price}) => {
//     return `<div class="card">
//                <h2>${instrument}</h2>
//                <p>$${price}</p>
//            </div>`
//   }).join("");


selectContainer.addEventListener("change", ()=> {
  productContainer.innerHTML = instrumentCards(selectContainer.value);
});


