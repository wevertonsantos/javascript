// setTimeout
console.log("Ainda não executou")

// executada depois de um certo tempo
setTimeout(function () {
    console.log("Requisição assíncrona")
}, 2000) // passando função e milisegundos

console.log("Ainda não executou 2")

// setInterval
console.log("Ainda não começou")
// executado de tempos em tempos
setInterval(function () {
    console.log("Intervalo assíncrono")
},3000)

console.log("Ainda não começou")

// Promise - é uma promessa de um valor que pode chegar em um ponto futuro

const promessa = Promise.resolve(5 + 5)
console.log("Algum código")

promessa.then(value => {
    console.log(`A soma é: ${value}`)
}) // utilizando o valor da promessa com then

console.log("Outro código")

// Falha na promise
Promise.resolve(4 * "asd")
    .then((n) => {
        if (Number.isNaN(n)) {
            throw new Error("Valores inválidos")
        }
    }).catch((err) => console.log(`Um erro ocorreu: ${err}`))

// Rejeição promise
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`O número é maior que 10`)
        } else {
            reject(new Error("Número muito baixo"))
        }
    })
}

const a = checkNumber(20)
const b = checkNumber(10)

a.then((v) => console.log(`O resultado é: ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`))

// Resolvendo várias promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(10)
    },1000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30)
    } else {
        reject("Erro!")
    }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))

// Async Functions
async function somarComDelay(a, b) {
    return a + b
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`)
})

// Async await
function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolveu a Promise")
        }, 2000)
    })
}

async function chamadaAsync() {
    console.log("Chamando a Promise, e esperando o resultado")
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync()

// Generators
function* generator() {
    yield 1
    yield 2
}

const gen = generator()
console.log(gen.next())
console.log(gen.next())