const targetDate = new Date(Date.UTC(2025, 10, 15, 21, 0, 0)); // 15/11/2025 18:00 GMT-3 = 21:00 UTC

const lastValues = {
  dias: null,
  horas: null,
  minutos: null,
  segundos: null,
};

function formatNumber(num) {
  return num.toString().padStart(2, '0');
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distance % (1000 * 60)) / 1000);

  actualizarElemento("dias", dias);
  actualizarElemento("horas", horas);
  actualizarElemento("minutos", minutos);
  actualizarElemento("segundos", segundos);

  // Mostrar el contador y ocultar el loader al primer render
  const loader = document.getElementById("loader");
  const countdown = document.getElementById("countdown");
  if (loader && countdown && countdown.style.display === "none") {
    loader.style.display = "none";
    countdown.style.display = "flex";
  }
}

function actualizarElemento(id, nuevoValor) {
  const elemento = document.getElementById(id);
  const valorFormateado = formatNumber(nuevoValor);

  if (lastValues[id] !== nuevoValor) {
    elemento.textContent = valorFormateado;
    elemento.classList.add("animate");

    // Remover animación después de que termine para que pueda repetirse
    setTimeout(() => {
      elemento.classList.remove("animate");
    }, 500);
  }

  lastValues[id] = nuevoValor;
}

setInterval(updateCountdown, 1000);
const audio = document.getElementById('audioCancion');

function reproducirCancion() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.currentTime = 0;
    audio.play();
  }
}

function pausarCancion() {
  audio.pause();
}

