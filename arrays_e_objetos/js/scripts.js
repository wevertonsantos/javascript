// arrays

const lista = [1, 2, 3, 4, 5]
console.log(lista)
console.log(typeof lista)

const itens = ["Weverton",true,2,4.12,[]]
console.log(itens)

const arr = ["a", "b", "c", "d"]
console.log(arr[0]) // acessando primeiro elemento por índice
console.log(arr[2])

// propriedades
const numbers = [5, 3, 4]
console.log(numbers.length) // quantidade de elementos
console.log(numbers['length'])

const myName = "Weverton"
console.log(myName.length)

// métodos
const otherNumbers = [1, 2, 3]
const allNumbers = numbers.concat(otherNumbers) // concatenando arrays
console.log(allNumbers)

const text = "algum texto"
console.log(text.toUpperCase()) // letras maiúsculas
console.log(text.indexOf("g")) // encontrar posição do elemento