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