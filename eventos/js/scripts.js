// - Adicionando eventos
const $ = document
const btn = $.querySelector("#my-button")
// adicionando evento de click
btn.addEventListener("click", () => {
    console.log("Clicou aqui!")
})

// - Removendo evento
const secondBtn = $.querySelector("#btn")
const imprimirMensagem = () => {
    console.log("Teste")
}
secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = $.querySelector("#other-btn")
thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    // removendo evento com função
    secondBtn.removeEventListener("click",imprimirMensagem)
})

// - Argumento do evento
const myTitle = $.querySelector("#my-title")
myTitle.addEventListener("click", (e) => {
    console.log(e)
    // posição x do elemento
    console.log(e.offsetX)
    // qual tipo de pointer
    console.log(e.pointerType)
    // próprio elemento
    console.log(e.target)
})

// - Propagação
const containerBtn = $.querySelector("#btn-container")
const btnInsideContainer = $.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (e) => {
    // parar propagação
    e.stopPropagation()
    console.log("Evento 2")
})