// Métodos
const animal = {
    nome: "Bob",
    latir: () => {
        console.log("Au au")
    }
}
console.log(animal.nome)
animal.latir()

const pessoa = {
    nome: "Weverton",
    getNome: function () {
        return this.nome
    },

    setNome: function (novoNome) {
        this.nome = novoNome
    }
}

console.log(pessoa.nome)
console.log(pessoa.getNome())

pessoa.setNome("Joaquim")
console.log(pessoa.getNome())

// Prototype
const text = "asd"
console.log(Object.getPrototypeOf(text)) // verificando ancestral

const myObject = {
    a: "b"
}
console.log(Object.getPrototypeOf(myObject))

const mySecondObject = Object.create(myObject)
console.log(mySecondObject)
console.log(mySecondObject.a)

// Classes básicas
const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemão"
console.log(pastorAlemao)
console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro)
bulldog.raca = "Bulldog"
console.log(bulldog)

// Função como classe - função construtora
function criarCachorro(nome, raca) {
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob","Vira lata")
console.log(bob)

const jack = criarCachorro("Jack", "Poodle")
console.log(jack)

// Funções como classe com new
function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")
console.log(husky)

// Métodos na função construtora
Cachorro.prototype.uivar = function () {
    console.log("Auuuuuu!")
}
husky.uivar()