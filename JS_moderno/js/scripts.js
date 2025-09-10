// 1 - var, let e const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

function logName() {
    const name = "Pedro"
    console.log(name)
}

const name = "Matheus"

logName()
console.log(name)

// arrow function
const sum = function (a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5,5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if (name) {
        return `Hello, ${name}`
    } else {
        return "Hello"
    }
}

console.log(greeting("Weverton"))
console.log(greeting())

const user = {
    name: "Theo",
    sayUsername() {
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000)
    }
}

// filter
const arr = [1, 2, 3, 4, 5, 6]
const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name:"Weverton", available: true},
    {name:"João", available: false},
    {name:"Maria", available: true},
    {name:"Josias", available: false},
    {name:"Kleber", available: true}
]

const availableUsers = users.filter((user) => user.available)
console.log(availableUsers)

// map
const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Chaleira Elétrica", price: 150, category: "Eletro"},
    {name: "Fogão", price: 499, category: "Eletro"},
    {name: "Calça Jeans", price: 87.99, category: "Roupas"}
]

products.map((product) => {
    if (product.category == "Roupas") {
        product.onSale = true
    }
})

console.log(products)