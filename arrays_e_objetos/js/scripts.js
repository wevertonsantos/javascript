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

// loop em array
const users = ["Weverton","João","Pedro","Miguel"]
for (let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`)
}

// push e pop
const array = ["a", "b", "c"]

array.push("d") // adicionando no fim do array
console.log(array)

array.pop()
console.log(array) // removendo no fim do array

const itemRemovido = array.pop()
console.log(itemRemovido)
console.log(array)

array.push("z", "x", "y") // adicionando vários elementos
console.log(array)

// shift e unshift
const letters = ["a", "b", "c"]

const letter = letters.shift() // removendo elemento no início da lista
console.log(letter)
console.log(letters)

letters.unshift("p", "q", "r") //adicionando elementos no início da lista
letters.unshift("z")
console.log(letters)

//  indexOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

console.log(myElements.indexOf("Maçã")) // pegando index do elemento
console.log(myElements.indexOf("Abacate"))
console.log(myElements[myElements.indexOf("Abacate")])

console.log(myElements.lastIndexOf("Abacate")) // pegando o último index do elemento (pode ser repetido)

// slice
const testeSlice = ["a", "b", "c", "d", "e", "f"]
const subArray = testeSlice.slice(2,4) // pegando elemento do 2 até o 3
console.log(testeSlice)
console.log(subArray)

const subArray2 = testeSlice.slice(2, 4 + 1) // pegando elemento do 2 até o 4
console.log(subArray2)

const subArray3 = testeSlice.slice(2) // pegando do elemento 2 em diante
console.log(subArray3)

// forEach
const nums = [1, 2, 3, 4, 5]
nums.forEach((num) => {
    console.log(num)
})

const posts = [
    {title:"Primeiro post",category:"PHP"},
    {title:"Segundo post",category:"Javascript"},
    {title:"Terceiro post",category:"Python"}
]

posts.forEach((post) => {
    console.log(post.title,post.category)
})

// Includes
const brands = ["BMW", "VW", "Fiat"]
console.log(brands.includes("Fiat")) // verifica se tem o elemento no array

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW!")
}

// Reverse
const reverseTest = [1, 2, 3, 4, 5]
reverseTest.reverse()
console.log(reverseTest)