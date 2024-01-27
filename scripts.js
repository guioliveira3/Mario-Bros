const form = document.querySelector (".formulario-fale-conosco")
const mascara = document.querySelector (".mascara-formulario")

function mostrarform() {
    form.style.left = "43%"
    form.style.top = "33%"
  mascara.style.visibility = "visible"
      
}

function esconderform() {
    mascara.style.visibility = "hidden"
    form.style.left = "-300px"

}