//EVENTOS NO TECLADO
// keydown - keyup = Apertar e soltar a tecla

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    console.log(usdInput.value) // Aqui eu peço pra ele me exibir o valor do que esta digitado no campo
})

brlInput.addEventListener("keyup", () => {
    console.log(brlInput.value)
})