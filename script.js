  
  alert("JS CARREGOU");
  // ===== ANIMAÇÃO DAS HABILIDADES =====
const skills = document.querySelectorAll(".skill-fill");
window.addEventListener("scroll", () => {
  skills.forEach(skill => {
    const position = skill.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      skill.style.width = skill.dataset.width;
    }
  });
});


// ===== TEXTO DO BANNER =====
const texto = "Sua marca no topo do mercado com a NextWave";
let index = 0;

function escreverTexto() {
  const elemento = document.getElementById("texto-animado");

  if (index < texto.length) {
    elemento.innerHTML += texto.charAt(index);
    index++;
    setTimeout(escreverTexto, 50);
  }
}

window.onload = escreverTexto;

// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {

  /* MENSAGEM DE SUCESSO */

  const form = document.getElementById("form-contato");
  const mensagem = document.getElementById("mensagem");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // impede recarregar a página

      const formData = new FormData(form);

fetch("http://localhost/nextwave-site/enviar.php", {          method: "POST",
        body: formData
      })
      .then(response => response.text())
.then(data => {
  console.log("RESPOSTA:", data);

  if (data.includes("SUCESSO")) {
    mensagem.innerHTML = "✅ Enviado com sucesso!";
    mensagem.style.color = "green";
    form.reset();
  } else {
    mensagem.innerHTML = "❌ " + data;
    mensagem.style.color = "red";
  }
})
      .catch(error => {
        mensagem.innerHTML = "❌ Erro ao enviar!";
        mensagem.style.color = "red";
      });
    });
  }

});