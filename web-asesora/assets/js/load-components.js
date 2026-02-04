// Cargar el header
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
    
    // Inicializar funcionalidad del header
    const abrir = document.getElementById('abrir');
    const cerrar = document.getElementById('cerrar');
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('menu-overlay');

    if (abrir) {
      abrir.addEventListener('click', () => {
        nav.classList.add('visible');
        if (overlay) overlay.classList.add('visible');
      });
    }

    if (cerrar) {
      cerrar.addEventListener('click', () => {
        nav.classList.remove('visible');
        if (overlay) overlay.classList.remove('visible');
      });
    }

    // Cerrar menú al hacer clic en el overlay (área visible a la izquierda)
    if (overlay) {
      overlay.addEventListener('click', () => {
        nav.classList.remove('visible');
        overlay.classList.remove('visible');
      });
    }

    // Detectar página actual y marcar enlace activo
    const paginaActual = window.location.pathname.split('/').pop() || 'index.html';
    const enlaces = document.querySelectorAll('.nav-list li a');
    
    enlaces.forEach(enlace => {
      const hrefEnlace = enlace.getAttribute('href');
      if (hrefEnlace === paginaActual || 
          (paginaActual === '' && hrefEnlace === 'index.html') ||
          (paginaActual === 'index.html' && hrefEnlace === 'index.html')) {
        enlace.classList.add('activo');
      }
    });
  })
  .catch(error => console.error('Error cargando el header:', error));
