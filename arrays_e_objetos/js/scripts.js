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

// objetos
const person = {
    name: "Weverton",
    age: 22,
    job:"Programador"
}

console.log(person)
console.log(person.name) // acessando nome no objeto
console.log(person.name.length)

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000
}
console.log(car)

car.doors = 4 // adicionando propriedade no objeto
console.log(car)

delete car.km // deletando um propriedade
console.log(car)

const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object) // verificando a instância

const obj2 = {
    c: []
}

Object.assign(obj2, obj) // implementando as propriedades do obj para o obj 2

console.log(Object.keys(obj)) // verificando as chaves do objeto
console.log(Object.keys(obj2))
console.log(Object.keys(car))
console.log(Object.entries(car)) // verificando chave e valor

const a = {
    name : "Weverton"
}

const b = a // mutação com objeto por referência
console.log(a)
console.log(b)
console.log(a === b)

a.age = 22
console.log(a)
console.log(b)