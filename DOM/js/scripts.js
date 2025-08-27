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

// replaceChild - trocar um elemento
const h2 = document.createElement("h2")
h2.textContent = "Meu novo título!" // adicionando valor a um elemento
header.replaceChild(h2, title)

// createTextNode - cria um nó de texto
const myText = document.createTextNode("Agora vamos colocar mais um título")
const h3 = document.createElement("h3")
h3.appendChild(myText) // inserindo texto na h3
mainContainer.appendChild(h3) // inserindo texto no container

// Atributos
const firstLink = navLinks.querySelector("a")
// colocando no atributo href o link do google
firstLink.setAttribute("href", "https://www.google.com") 
// pegando atributo href
console.log(firstLink.getAttribute("href"))
// atributo blank
firstLink.setAttribute("target", "_blank")

// - Altura e largura
const footer = document.querySelector("footer")
// altura e largura com a borda em consideração
console.log(footer.offsetWidth)
console.log(footer.offsetHeight)
// altura e largura sem borda em consideração
console.log(footer.clientWidth)
console.log(footer.clientHeight)

// - Posição do elemento na tela
const product1 = products[0]
console.log(product1.getBoundingClientRect())