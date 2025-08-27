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