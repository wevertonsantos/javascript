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

// insertBefore - cria um elemento antes de um outro elemento
const p = document.createElement("p") // criando um elemento
const header = title.parentElement // acessando pai do elemento
header.insertBefore(p, title) // inserindo p antes de title

// appendChild - adicionando último elemento dentro de outro
const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")
navLinks.appendChild(li)