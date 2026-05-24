// Renamed to Pizza - more accurate, Menu interface removed (it was unused/wrong)
// Note: functions in typescript needs to return a value

// interface Pizza {
//     id?: number
//     name: string
//     price: number
// }
interface PizzaName {
    id: number
    name: string
    price: number
}

interface Order {
    id: number
    pizza: PizzaName
    status: "ordered" | "completed"
}


type PizzaDetail = string | number;

interface PizzaDetail_2 {
    identifier: string | number
}
let cashInRegister: number = 100
let nextOrderId: number = 1
let nextPizzaId = 1

const menu: PizzaName[] = [
    { id: nextPizzaId++ ,name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]

const orderQueue: Order[] = []  // Typed instead of []

// This returns an array of objects - The omit removes the id property from the pizza type and remains with the name and the price property
function addNewPizza(pizzaObj: Omit<PizzaName, "id">): PizzaName {  // Returns updated menu
    // get the last index of the id / previous id
    const newPizza = { id: nextPizzaId++, ...pizzaObj}; // add the id inside the pizza object
    menu.push(newPizza)
    return newPizza
}

// Generics 
function addToArray<T>(array: T[], item: T): T[] { // This function can take theh types of pizzaName or Order
    array.push(item)
    return array
}

// example usage: Adding the generic in the callback function makes the type checking follow the specific type it needs to prevent changing of the value properties
addToArray<PizzaName>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addToArray<Order>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" }); // explicit type: 


// This function returns an object or undefined no value is found
function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return undefined  // Early return prevents accessing .price on undefined - gurad safety
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder; // This return an object from the array of objects
}

// This function return an object
function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`Order ${orderId} not found`)
        return undefined  // Guard prevents accessing .status on undefined
    }
    order.status = "completed"
    return order;
}

// This function gets te number or a string as the number

// Option A
function getPizzaDetail(identifierId: PizzaDetail): PizzaName | undefined {
    if(typeof identifierId === 'number') {
        const order = menu.find(pizza => pizza.id === identifierId)
        return order
    }
    const order = menu.find(pizza => pizza.id === Number(identifierId))

    if(!order) {
        return undefined
    }
    return order
}

// Option B 
function getPizzaDetail_2(identifierId: string | number): PizzaName | undefined {
   const order = typeof identifierId === "string" ?
    menu.find(pizza => pizza.id ===  Number(identifierId)): 
    menu.find(pizza => pizza.id === identifierId)

    if(!order) {
        return undefined
    }
    return order
}

// Option C: useful to throw an error when importing to another file
function getPizzaDetail_3(identifier: string | number): PizzaName | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if(typeof identifier === 'number') {
        return menu.find(pizza => pizza.id === identifier)
    }else {
        throw TypeError("paramater `identfier must be of type string or number`")
    }
}

getPizzaDetail("1")
getPizzaDetail_2(1)
getPizzaDetail_3("2")

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)