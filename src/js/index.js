const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  body.classList.toggle("modo-escuro");

  if (body.classList.contains("modo-escuro")) {
    imagemBotaoTrocaDeTema.src = "./src/imagens/sun.png";
  } else {
    imagemBotaoTrocaDeTema.src = "./src/imagens/moon.png";
  }
});
