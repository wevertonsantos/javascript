// Criando uma função

function minhaFuncao() {
    console.log("Testando")
}

minhaFuncao() // Chamando função
minhaFuncao()

// Função em variável
const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável")
}

minhaFuncaoEmVariavel()

// Função com parâmetro
function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Alguma coisa")

// Função com retorno
const a = 10
const b = 20
const c = 30
const d = 40

const soma = function (n1, n2) {
    return n1 + n2
}

const resultado = soma(a, b)
console.log(resultado)
console.log(soma(c, d))

// Escopo da função
let y = 10

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é: ${y}`)
}

testandoEscopo()

console.log(`Y fora da função é: ${y}`)

testandoEscopo()

// Escopo aninhado
let m = 10

function escopoAninhado() {
    let m = 20
    if (true) {
        let m = 30
        console.log(m)

        if (true) {
            let m = 40

            console.log(m)
        }
    }
    console.log(m)
}

escopoAninhado()
console.log(m)

// Arrow function

const testeArrow = () => {
    console.log("Está é uma arrow function")
}

testeArrow()

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par")
        return
    }
    console.log("Impar")
}

parOuImpar(2)
parOuImpar(5)

const raizQuadrada = (x) => {
    return x * x
}
console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x * x
console.log(raizQuadrada2(5))
console.log(raizQuadrada2(12))

// Parâmetro opcional
const multiplicacao = (m,n) => {
    if (n === undefined) {
        return m * 2
    } else {
        return m * n
    }
}

console.log(multiplicacao(5))
console.log(multiplicacao(2, 4))

const greeting = (name) => {
    if (!name) {
        console.log("Olá")
        return
    }
    console.log(`Olá, ${name}`)
}

greeting()
greeting("Weverton")

// Valor default
const customGreeting = (name, greet = "Olá") => {
    if (!name) {
        return `${greet}`
    } else {
        return `${greet}, ${name}`
    }
    
}

console.log(customGreeting())
console.log(customGreeting("Weverton"))
console.log(customGreeting("João", "Bom dia"))

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++){
        console.log(text);
    }
}

repeatText("Testando")
repeatText("Agora repete 5 vezes", 5)

// Closure

function someFunction() {
    let txt = "Alguma coisa"

    function display() {
        console.log(txt)
    }

    display()
} 

someFunction()

const multiplicacaoClosure = (n) => {
    return (m) => {
        return n * m
    }
}

const c1 = multiplicacaoClosure(5)
const c2 = multiplicacaoClosure(10)
console.log(c1(5))
console.log(c2(10))

// Recursão
const untilTen = (n, m) => {
    if (n < 10) {
        console.log("A função parou executar!")
    } else {
        const x = n - m 
        console.log(x)

        untilTen(x,m)
    }
}

untilTen(100, 7)

function factorial(x) {
    if (x === 0) {
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

const result = factorial(6)
console.log(result)