/**
 * Carga dinámica de datos del producto
 * Lee el parámetro 'id' de la URL y busca el producto en productosData
 */

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el ID del producto de la URL
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get('id');

    // Verificar que existe el ID
    if (!productoId) {
        mostrarError('No se especificó un producto');
        return;
    }

    // Buscar el producto en la base de datos
    const producto = productosData[productoId];

    // Verificar que el producto existe
    if (!producto) {
        mostrarError('Producto no encontrado');
        return;
    }

    // Cargar los datos del producto en la página
    cargarProducto(producto);
});

/**
 * Carga los datos del producto en los elementos del DOM
 */
function cargarProducto(producto) {
    // Título de la página
    document.title = producto.titulo + ' - Asesora';

    // Título
    document.getElementById('producto-titulo').textContent = producto.titulo;

    // Slogan principal (el primero del array)
    document.getElementById('producto-slogan-principal').textContent = producto.slogans[0];

    // Slogans secundarios (índices 1 y 2, excluyendo el último)
    const slogansLista = document.getElementById('producto-slogans-lista');
    slogansLista.innerHTML = '';
    for (let i = 1; i < producto.slogans.length - 1; i++) {
        const li = document.createElement('li');
        li.textContent = producto.slogans[i];
        slogansLista.appendChild(li);
    }

    // Slogan final (el último del array, arriba del CTA)
    const ultimoSlogan = producto.slogans[producto.slogans.length - 1];
    document.getElementById('producto-slogan-final-texto').textContent = ultimoSlogan;

    // Descripción (convertir saltos de línea en <br> para mantener los párrafos)
    const descripcionFormateada = producto.descripcion.replace(/\n\n/g, '<br><br>');
    document.getElementById('producto-descripcion-texto').innerHTML = descripcionFormateada;

    // Ventajas (Badges)
    const ventajasContainer = document.getElementById('producto-ventajas-container');
    ventajasContainer.innerHTML = '';
    producto.ventajas.forEach(ventaja => {
        const badge = document.createElement('span');
        badge.className = 'ventaja-badge';
        badge.textContent = ventaja;
        ventajasContainer.appendChild(badge);
    });

    // VentajasCards (Grid)
    const cardsGrid = document.getElementById('producto-cards-grid');
    cardsGrid.innerHTML = '';
    producto.ventajasCards.forEach(cardTexto => {
        const card = document.createElement('div');
        card.className = 'ventaja-card';
        card.innerHTML = `
            <div class="ventaja-card-circulo"></div>
            <span class="ventaja-card-texto">${cardTexto}</span>
        `;
        cardsGrid.appendChild(card);
    });
}

/**
 * Muestra un mensaje de error y redirige a productos
 */
function mostrarError(mensaje) {
    console.error(mensaje);
    // Redirigir a la página de productos después de 2 segundos
    setTimeout(() => {
        window.location.href = 'productos.html';
    }, 2000);
}
