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

// else
const loggedIn = false
if (loggedIn) {
    console.log("Está autenticado")
} else {
    console.log("Não está autenticado")
}

const q = 10
const w = 15

if (q > 5 && w > 20) {
    console.log("Número mais altos")
} else {
    console.log("Os número não são mais altos")
}

// else if
if (1 > 2) {
    console.log("Teste")
} else if (2 > 3) {
    console.log("Teste 2")
} else if (5 > 1) {
    console.log("Agora sim!")
}

const userName = "Weverton"
const userAge = 22

if (userName === "José") {
    console.log("Bem vindo José!")
} else if (userName === "Weverton" && userAge === 22) {
    console.log("Olá, Weverton, você tem 22 anos")
} else {
    console.log("Nenhuma condição aceita")
}

// while
let i = 0

while (i < 5) {
    console.log(`Repetindo ${i}`)
    i = i + 1;
}

// do while
i = 10

do {
    console.log(`Valor de i: ${i}`)
    i--
} while (i > 1);

// for
for (let t = 0; t < 10; t++) {
    console.log("Repetindo algo..")
}

let r = 10
for (r; r > 0; r--){
    console.log(`O r está diminuindo ${r}`)
}

// break
for (let g = 20; g > 10; g--) {
    console.log(`Valor de g é: ${g}`)
    
    if (g === 12) {
        console.log("O g é 12!")
        break
    }
}

// continue
for (let s = 1; s < 10; s++){
    // operador de resto = %
    if (s % 2 === 0) {
        console.log("Número par!")
        continue
    }

    console.log(s)
}