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