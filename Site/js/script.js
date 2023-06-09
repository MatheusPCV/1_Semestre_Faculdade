const textElement = document.getElementById("typing_text");
const text = "Um mergulho nos projetos e conquistas do 1º semestre da\nfaculdade de Análise e Desenvolvimento de Sistemas.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    const currentChar = text.charAt(index);
    if (currentChar === "\n") {
      textElement.innerHTML += "<br>"; // Insere uma quebra de linha
    } else {
      textElement.innerHTML += currentChar;
    }
    index++;
    setTimeout(typeWriter, 8);
  }
}

typeWriter();
