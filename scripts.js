const form = document.querySelector (".formulario-fale-conosco")
const mascara = document.querySelector (".mascara-formulario")

function cliqueinobotao() {
  form.style.left = "45vw"
  mascara.style.visibility = "visible"
      
}

function telainicial() {
    mascara.style.visibility = "hidden"
    form.style.left = "-300px"

}