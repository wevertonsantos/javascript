// Movendo-se pelo DOM
console.log(document.body)
console.log(document.body.childNodes[1].childNodes) // nós
console.log(document.body.childNodes[1].childNodes[1].textContent) // acessando texto

// Selecionando por TAG
const listItens = document.getElementsByTagName("li")
console.log(listItens)