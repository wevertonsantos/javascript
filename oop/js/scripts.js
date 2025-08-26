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

// Classes ES6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador")
console.log(jeff)

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é dar cor ${this.cor}`)
    }
}

const scania = new Caminhao(6,"Vermelha")
console.log(scania)
scania.descreverCaminhao()

Caminhao.prototype.motor = 4.0 // adicionando o propriedade pelo prototype
const c2 = new Caminhao(4, "Preta") 
console.log(c2)
console.log(c2.motor)

// Override
class Humano {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const weverton = new Humano("Weverton",22)
console.log(weverton)

Humano.prototype.idade = "Não definida" // substituindo propriedades pelo prototype
console.log(weverton.idade)
console.log(Humano.prototype.idade)

// Symbol
class Aviao {
    constructor(marca, turbinas){
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
Aviao.prototype[asas] = 2 // passando valor para objetos que ela instancia

const boeing = new Aviao("Boeing", 10)
console.log(boeing)
console.log(boeing[asas]) // acessando symbol