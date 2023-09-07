let light = document.querySelector(".light")
let dark = document.querySelector(".dark")
let grad1 = document.querySelector(".grad1")
let container = document.querySelector(".container")

light.addEventListener("click", changeToLight)
dark.addEventListener("click", changeToDark)
grad1.addEventListener("click", changeToGrad1)

function changeToLight(){
  container.style.background = "#eee"
  container.style.color = "black"
}

function changeToDark(){
  container.style.background = "#333"
  container.style.color = "white"
}

function changeToGrad1(){
  container.style.background = "linear-gradient(335deg, rgba(48,92,122,1) 0%, rgba(255,255,255,1) 48%, rgba(182,83,71,1) 100%)"
  container.style.color = "brown"
}