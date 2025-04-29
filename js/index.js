// IIFE (Expresión de Función Ejecutada Inmediatamente) para el cambio de tema de color
((d) => {
   const $btnSwitch = d.querySelector('#switch');

   $btnSwitch.addEventListener('click', () => {
      d.body.classList.toggle('dark');
      $btnSwitch.classList.toggle('active');
   });
})(document);

// IIFE (Expresión de Función Ejecutada Inmediatamente) para el deslizador automático
((d) => {
   const $slider = d.querySelector("#slider");
   let $seccionSlider = d.querySelectorAll(".slider__section"),
      $ultimaSeccionSlider = $seccionSlider[$seccionSlider.length - 1];

   const $btnIzquierda = d.querySelector("#btn-left"),
      $btnDerecha = d.querySelector("#btn-right");

   $slider.insertAdjacentElement("afterbegin", $ultimaSeccionSlider);

   function siguienteCertificado() {
      let $primeraSeccionSlider = d.querySelectorAll(".slider__section")[0];
      $slider.style.marginLeft = "-200%";
      $slider.style.transition = "todo 0.5s";
      setTimeout(function(){
         $slider.style.transition = "none";
         $slider.insertAdjacentElement("beforeend", $primeraSeccionSlider);
         $slider.style.marginLeft = "-100%";
      }, 500);
   }

   function anteriorCertificado() {
      let $seccionSlider = d.querySelectorAll(".slider__section");
      $ultimaSeccionSlider = $seccionSlider[$seccionSlider.length - 1];
      $slider.style.marginLeft = "-200%";
      $slider.style.transition = "todo 0.7s"; 
      setTimeout(() => {
         $slider.style.transition = "none";
         $slider.insertAdjacentElement("afterbegin", $ultimaSeccionSlider);
         $slider.style.marginLeft = "-100%";
      }, 500);
   }

   $btnDerecha.addEventListener("click", siguienteCertificado);
   $btnIzquierda.addEventListener("click", anteriorCertificado);

   // Siguiente certificado cada seis segundos -> El deslizador avanza
   setInterval(siguienteCertificado, 5000);

})(document);

// IIFE (Expresión de Función Ejecutada Inmediatamente) para el menú responsivo
(() => {
   const $boton = document.querySelector('.navbar__menu');
   const $enlaces = document.querySelector('.navbar__links');
   let $contador = 0;

   $boton.addEventListener('click', function() {
      if ($contador == 0) {
         $contador = 1;
         $enlaces.classList.remove('one');
         $enlaces.classList.add('two');
      } else {
         $contador = 0;
         $enlaces.classList.add('one');
         $enlaces.classList.remove('two');
      }
   });

   window.addEventListener('resize', function() {
      if (screen.width > 991) {
         $contador = 0;
         $enlaces.classList.remove('two');
         $enlaces.className = ('navbar__links one');
      }
   });

   $enlaces.addEventListener('click', function(e) {      
      setTimeout(() => {         
         $contador = 0;
         $enlaces.classList.add('one');
         $enlaces.classList.remove('two');
      }, 600);
   });
})();

// IIFE para descargar el CV
((d) => {
   const $btnDownloadCV = d.getElementById('downloadCV'); // Botón para descargar el CV

   $btnDownloadCV.addEventListener('click', () => {
      const cvUrl = '../img/certificates/CV-Daniela-Sanchez-Valencia.pdf'; // Ruta CV
      const link = document.createElement('a'); // Crear un enlace
      link.href = cvUrl; // Asignar la URL del CV
      //link.download = 'CV-Daniela-Sanchez-Valencia.pdf'; // Nombre del archivo que se descargará
      document.body.appendChild(link); // Añadir el enlace al documento
      link.click(); // Simular un clic en el enlace
      document.body.removeChild(link); // Eliminar el enlace del documento
   });
})(document);

// IIFE para manejar el envío del formulario de contacto
((d) => {
   const $formContact = d.getElementById('contactForm'); // Obtén el formulario

   $formContact.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío del formulario para manejarlo manualmente

      const formData = new FormData(this);

      fetch(this.action, {
         method: this.method,
         body: formData,
         headers: {
            'Accept': 'application/json'
         }
      }).then(response => {
         if (response.ok) {
            // Muestra el mensaje de éxito
            alert('¡Gracias por tu mensaje! Te responderé lo antes posible.');
            this.reset(); // Reinicia el formulario
         } else {
            alert('Ocurrió un error, por favor intenta de nuevo.');
         }
      }).catch(error => {
         alert('Ocurrió un error, por favor intenta de nuevo.');
      });
   });
})(document);