// Variáveis

let nome = "Weverton" // palavra let para declaração
console.log(nome)

nome = "Weverton Santos" // alteração de valor
console.log(nome)

const idade = 22; // constante - não muda de valor
console.log(idade)

let a = 10, b = 20, c = 30 // criando várias variáveis
console.log(a, b, c)

let _teste = "ok" // com _ é permitido
let $teste = "ok" // com $ é permitido
console.log(_teste, $teste)

// Prompt
// const age = prompt("Digite a sua idade:")
// console.log(`Você tem ${age} anos.`)

// Alert
// alert("Testando")
// const z = 10
// alert(`O número é ${z}`)

// Objeto Math
console.log(Math.max(5, 2, 1, 10)) // verifica o maior
console.log(Math.floor(5.14)) // arredonda o número para baixo
console.log(Math.ceil(5.14)) // arredonda para cima

// Console
console.log("teste!")
console.error("erro!") // dispara um erro
console.warn("aviso!") // dispara um aviso

// if
const m = 10

if (m > 5) {
    console.log("M é maior que 5!")
}

const user = "João"
if (user === "João") {
    console.log(`O usuário tem o nome ${user}`)
}

if (user === "Maria") {
    console.log("Olá Maria")
}