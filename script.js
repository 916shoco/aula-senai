// === TELA DE LOADING ===
window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1000);
  }, 2000); // Tempo de exibição aumentado para 2s
});


// === MODO ESCURO ===
const toggleDarkModeBtn = document.getElementById("darkModeToggle");

function applyDarkMode(isDark) {
  document.body.classList.toggle("dark", isDark);
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

toggleDarkModeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  applyDarkMode(!isDark);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "enabled") {
    applyDarkMode(true);
  }
});


// === ENVIO VIA WHATSAPP ===
const form = document.getElementById("formularioServico");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const servico = document.getElementById("servicos").value;

    if (!nome || !email || !servico) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const mensagem = `Olá, meu nome é ${nome} (${email}). Gostaria de solicitar o serviço: ${servico}.`;
    const numeroWhatsApp = "5571986150185";
    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
  });
}


// === DIGITAÇÃO NO TÍTULO PRINCIPAL ===
const tituloTexto = "Divine Beauty | Centro de Estética & Spa";
let tituloIndex = 0;
const tituloElemento = document.querySelector(".hero-banner h1");

function digitarTitulo() {
  if (tituloIndex < tituloTexto.length) {
    tituloElemento.textContent += tituloTexto.charAt(tituloIndex);
    tituloIndex++;
    setTimeout(digitarTitulo, 100);
  }
}

tituloElemento.textContent = ""; // Limpa antes de começar
window.addEventListener("DOMContentLoaded", digitarTitulo);


// === BOTÃO WHATSAPP FLUTUANTE ===
const whatsappFloat = document.createElement("a");
whatsappFloat.href = "https://wa.me/5571986150185";
whatsappFloat.className = "whatsapp-float";
whatsappFloat.target = "_blank";
whatsappFloat.innerHTML = "💬";
document.body.appendChild(whatsappFloat);


// === CURSOR PERSONALIZADO ===
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});


// BOLHAS ALEATÓRIAS SUAVES NO FUNDO
document.addEventListener('DOMContentLoaded', () => {
  // Container fixo para bolhas
  const bolhasContainer = document.createElement('div');
  bolhasContainer.classList.add('bolhas-container');
  document.body.prepend(bolhasContainer); // ⬅️ Garante que fique atrás de tudo

  // Criar múltiplas bolhas
  for (let i = 0; i < 20; i++) {
    const bolha = document.createElement('span');
    bolha.classList.add('bolha');

    // Posição e tamanho aleatórios
    bolha.style.left = `${Math.random() * 100}%`;
    bolha.style.width = `${10 + Math.random() * 20}px`;
    bolha.style.height = bolha.style.width;
    bolha.style.animationDuration = `${8 + Math.random() * 5}s`;
    bolha.style.animationDelay = `${Math.random() * 5}s`;

    bolhasContainer.appendChild(bolha);
  }
});

// Carrosel de imagens
let slideIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carrossel-slide img');
  const totalSlides = slides.length;

  slideIndex = (slideIndex + step + totalSlides) % totalSlides;
  document.querySelector('.carrossel-slide').style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(() => moveSlide(1), 3000); // Muda a imagem a cada 3 segundos

