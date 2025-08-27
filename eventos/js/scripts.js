// - Adicionando eventos
const $ = document
const btn = $.querySelector("#my-button")
// adicionando evento de click
btn.addEventListener("click", () => {
    console.log("Clicou aqui!")
})