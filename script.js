function toggleMode() {
  const html = document.documentElement
  // Versão simplificada do codigo
  html.classList.toggle('light')

  // Codigo para fazer a transiçao de tema ao clicar no botao

  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // Condição para trocar a imagem ao trocar o tema
  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/eu.png')
  } else {
    img.setAttribute('src', './assets/eu.png')
  }
}
