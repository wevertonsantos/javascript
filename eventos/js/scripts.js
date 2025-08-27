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