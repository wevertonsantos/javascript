// Movendo-se pelo DOM
console.log(document.body)
console.log(document.body.childNodes[1].childNodes) // nós
console.log(document.body.childNodes[1].childNodes[1].textContent) // acessando texto

// Selecionando por TAG
const listItens = document.getElementsByTagName("li")
console.log(listItens)

// Selecionando por ID
const title = document.getElementById("title")
console.log(title)

// Selecionando por classe
const products = document.getElementsByClassName("product")
console.log(products)

// Selecionando elementos por CSS
const productsQuery = document.querySelectorAll(".product") // selecionando todos da classe .product
console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)