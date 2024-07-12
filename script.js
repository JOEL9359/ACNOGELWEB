// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Aquí deberías implementar la lógica para enviar el correo
    // Por ejemplo, usando una API de envío de correos o un servicio de backend
    console.log('Correo enviado a:', email);
    console.log('Mensaje:', mensaje);
    
    alert('Gracias por contactarnos. Te responderemos pronto.');
    this.reset();
});

// Funcionalidad de acordeón para preguntas frecuentes
document.querySelectorAll('.accordion-item h3').forEach(item => {
    item.addEventListener('click', event => {
        const content = event.target.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
// funciones de nav
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('header.logo nav');

    function toggleMenu() {
        nav.classList.toggle('mobile-menu');
        if (window.innerWidth <= 768) {
            if (nav.style.display === 'block') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'block';
            }
        }
    }

    hamburger.addEventListener('click', toggleMenu);

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.style.display = 'block';
            nav.classList.remove('mobile-menu');
        } else {
            nav.style.display = 'none';
            nav.classList.remove('mobile-menu');
        }
    });
});
 //FUNCIONES DEL NAV 2.0 X//
 document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('header.logo nav');
    const header = document.querySelector('header.logo');
  
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('mobile-menu');
    });
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Cierra el menú móvil si la ventana se redimensiona a más de 768px
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        nav.classList.remove('mobile-menu');
}
    });
});
 //TERMINO AQUI//
console.log("Script de animación cargado");

window.addEventListener('scroll', function() {
    var header = document.querySelector('header.logo');
    if (window.scrollY > 50) { // Adjust this value as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

 

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.acnogel-div');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('waveCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = 50;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
    }

    window.addEventListener('resize', resizeCanvas);

    function drawWave(amplitude, frequency, speed, color1, color2, time) {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);

        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x < canvas.width; x++) {
            const y = amplitude * Math.sin((x * frequency + time * speed) / 20) + canvas.height / 2;
            ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.fillStyle = gradient;
        ctx.fill();
    }

    let time = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Ola más grande y más rápida (color blanco)
        drawWave(12, 0.02, 4, '#002005', '#002005', time);
        // Ola más pequeña y ligeramente más lenta (color blanco)
        drawWave(8, 0.025, 5, '#fff', '#fff', time);

        time += 0.08;
        requestAnimationFrame(animate);
    }

    animate();
});

//wave2//
document.addEventListener('DOMContentLoaded', function() {
    const canvas2 = document.getElementById('waveCanvas2');
    const ctx2 = canvas2.getContext('2d');

    canvas2.width = window.innerWidth;
    canvas2.height = 50;

    function resizeCanvas2() {
        canvas2.width = window.innerWidth;
    }
    window.addEventListener('resize', resizeCanvas2);

    function drawWave2(amplitude, frequency, speed, color1, color2, time) {
        const gradient2 = ctx2.createLinearGradient(0, 0, 0, canvas2.height);
        gradient2.addColorStop(0, color1);
        gradient2.addColorStop(1, color2);
        ctx2.beginPath();
        ctx2.moveTo(0, canvas2.height);
        for (let x = 0; x < canvas2.width; x++) {
            const y = amplitude * Math.sin((x * frequency + time * speed) / 20) + canvas2.height / 2;
            ctx2.lineTo(x, y);
        }
        ctx2.lineTo(canvas2.width, canvas2.height);
        ctx2.fillStyle = gradient2;
        ctx2.fill();
    }

    let time2 = 0;
    function animate2() {
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

        // Personaliza los parámetros para la segunda onda
        drawWave2(12, 0.10, 4, '#0095aa', '#0095aa', time2);

        time2 += 0.08;
        requestAnimationFrame(animate2);
    }

    animate2();
});

//wave3//
document.addEventListener('DOMContentLoaded', function() {
  const canvas3 = document.getElementById('waveCanvas3');
  const ctx3 = canvas3.getContext('2d');

  canvas3.width = window.innerWidth;
  canvas3.height = 50;

  function resizeCanvas3() {
      canvas3.width = window.innerWidth;
  }
  window.addEventListener('resize', resizeCanvas3);

  function drawWave3(amplitude, frequency, speed, color1, color2, time) {
      const gradient3 = ctx3.createLinearGradient(0, 0, 0, canvas3.height);
      gradient3.addColorStop(0, color1);
      gradient3.addColorStop(1, color2);
      ctx3.beginPath();
      ctx3.moveTo(0, canvas3.height);
      for (let x = 0; x < canvas3.width; x++) {
          const y = amplitude * Math.sin((x * frequency + time * speed) / 20) + canvas3.height / 2;
          ctx3.lineTo(x, y);
      }
      ctx3.lineTo(canvas3.width, canvas3.height);
      ctx3.fillStyle = gradient3;
      ctx3.fill();
  }

  let time3 = 0;
  function animate3() {
      ctx3.clearRect(0, 0, canvas3.width, canvas3.height);

      // Personaliza los parámetros para la tercera onda
      drawWave3(12, 0.10, 4, '#f0f8ff', '#f0f8ff', time3);

      time3 += 0.06;
      requestAnimationFrame(animate3);
  }

  animate3();
});

//MAQUINA DE ESCRIBIR ANIMACION//


function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const title = document.querySelector('.acerca-content h2');
  if (isElementInViewport(title) && !title.classList.contains('active')) {
    title.classList.add('typewriter', 'active');
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial state
});

//ACORDEON INGREDIENTES//


document.querySelectorAll('.ingredient-name').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  });
});

/*WAVE4*/
document.addEventListener('DOMContentLoaded', function() {
  const canvas4 = document.getElementById('waveCanvas4');
  const ctx4 = canvas4.getContext('2d');
  canvas4.width = window.innerWidth;
  canvas4.height = 50;

  function resizeCanvas4() {
      canvas4.width = window.innerWidth;
  }
  window.addEventListener('resize', resizeCanvas4);

  function drawWave4(amplitude, frequency, speed, color1, color2, time) {
      const gradient4 = ctx4.createLinearGradient(0, 0, 0, canvas4.height);
      gradient4.addColorStop(0, color1);
      gradient4.addColorStop(1, color2);

      ctx4.beginPath();
      ctx4.moveTo(0, canvas4.height);

      for (let x = 0; x < canvas4.width; x++) {
          const y = amplitude * Math.sin((x * frequency + time * speed) / 20) + canvas4.height / 2;
          ctx4.lineTo(x, y);
      }

      ctx4.lineTo(canvas4.width, canvas4.height);
      ctx4.fillStyle = gradient4;
      ctx4.fill();
  }

  let time4 = 0;

  function animate4() {
      ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
      // Customize parameters for the fourth wave
      drawWave4(10, 0.08, 3, '#fff', '#fff', time4);
      time4 += 0.05;
      requestAnimationFrame(animate4);
  }

  animate4();
});