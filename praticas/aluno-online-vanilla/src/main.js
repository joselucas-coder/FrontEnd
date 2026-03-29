
const form = document.getElementById("login-formulario"); // era "form-login"
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("password"); // era "senha"

function mostrarErro(campo, mensagem) {
  campo.classList.add("input-erro"); // era "input-invalido"
  campo.nextElementSibling.textContent = mensagem;
  campo.nextElementSibling.style.display = "block";
}

function limparErro(campo) {
  campo.classList.remove("input-erro"); // era "input-invalido"
  campo.nextElementSibling.textContent = "";
  campo.nextElementSibling.style.display = "none";
}

campoEmail.addEventListener("input", () => limparErro(campoEmail));
campoSenha.addEventListener("input", () => limparErro(campoSenha));

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  let valido = true;

  if (campoEmail.value.trim() === "") {
    mostrarErro(campoEmail, "O campo de email é obrigatório.");
    valido = false;
  }

  if (campoSenha.value.trim() === "") {
    mostrarErro(campoSenha, "O campo de senha é obrigatório.");
    valido = false;
  }

  if (valido) {
    window.location.href = "index.html";
  }
});