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