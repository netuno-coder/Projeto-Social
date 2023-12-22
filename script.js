function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  // pegar a tag img
  const img = document.querySelector("#profile img")
  
  // substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver no light mode, colocar imagem light
    img.setAttribute('src', './assets/avatar-light.jpeg')
  } else {
    // se tiver no dark mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar-imagem.jpg')
  }
}