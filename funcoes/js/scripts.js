// Criando uma função

function minhaFuncao() {
    console.log("Testando")
}

minhaFuncao() // Chamando função
minhaFuncao()

// Função em variável
const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável")
}

minhaFuncaoEmVariavel()

// Função com parâmetro
function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Alguma coisa")