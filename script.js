// ⏳ CONTADOR DE TIEMPO
const targetDate = new Date(Date.UTC(2025, 10, 15, 21, 0, 0)); // 15/11/2025 18:00 GMT-3 = 21:00 UTC

const lastValues = { dias: null, horas: null, minutos: null, segundos: null };

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
    setTimeout(() => {
      elemento.classList.remove("animate");
    }, 500);
  }

  lastValues[id] = nuevoValor;
}

setInterval(updateCountdown, 1000);

// 🎵 AUDIO
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

// 🖼️ CARRUSEL CON SWIPER USANDO LISTA
const fotos = [
  'img/carrusel/foto-final.jpg',
  'img/carrusel/foto-final2.jpg',
  'img/carrusel/foto-final3.jpg',
  'img/carrusel/foto-final4.jpg',
  'img/carrusel/foto-final5.jpg',
  /* 'img/carrusel/foto-final6.jpg', */
  'img/carrusel/foto-final7.jpg',
  'img/carrusel/foto-final8.jpg',
  'img/carrusel/foto-final9.jpg',
 /*  'img/carrusel/foto-final10.jpg', */
  /* 'img/carrusel/foto-final11.jpg', */
  /* 'img/carrusel/foto-final12.jpg', */
  /* 'img/carrusel/foto-final13.jpg', */
  /* 'img/carrusel/foto-final14.jpg', */
  /* 'img/carrusel/foto-final15.jpg', */
  /* 'img/carrusel/foto-final16.jpg', */
  'img/carrusel/foto-final17.jpg',
  /* 'img/carrusel/foto-final18.jpg', */
  'img/carrusel/foto-final19.jpg',
  /* 'img/carrusel/foto-final20.jpg', */
  /* 'img/carrusel/foto-final21.jpg', */
  'img/carrusel/foto-final22.jpg',
  'img/carrusel/foto-final23.jpg'
];

document.addEventListener('DOMContentLoaded', () => {
  // Insertar dinámicamente los slides
  const wrapper = document.getElementById('swiper-wrapper');

  fotos.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Foto ${i + 1}`;

    slide.appendChild(img);
    wrapper.appendChild(slide);
  });

  // Inicializar Swiper después de insertar los slides
  new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
});
