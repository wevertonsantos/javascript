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