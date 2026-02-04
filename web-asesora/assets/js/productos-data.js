/**
 * Base de datos de productos
 * Cada producto tiene su propia página de detalle generada dinámicamente
 * 
 * INSTRUCCIONES:
 * 1. Copia la estructura del producto de ejemplo
 * 2. Cambia el ID (ej: 'gestion-sanitarios' → 'tu-producto')
 * 3. Llena todos los campos con la información de tu producto
 * 4. Las ventajasCards son solo texto simple que se mostrará en cards visuales
 */

const productosData = {
  // ID del producto (debe coincidir con el parámetro de la URL)
  //GESTIÓN DE SERVICIOS SANITARIOS RURALES
  'gestion-sanitarios': {
    titulo: 'Gestión de Servicios Sanitarios Rurales',
    slogans: [
      'Administra de forma fácil y profesional todos los procesos de tu Servicio Sanitario Rural',
      'TODO ES MÁS SIMPLE CON GESTIÓN SSR',
      'LOS PROCESOS DE TU EMPRESA MARCARÁN LA DIFERENCIA',
      'Somos la solución informática más completa y difundida en el país. Transforma tu Servicio de Agua Potable en una empresa moderna.'
    ],
    descripcion: 'Creamos sistemas informáticos para la gestión, desarrollo y crecimiento de los Servicios Sanitarios Rurales presentes en todo el territorio nacional. \n\nNuestro servicio cuenta con múltiples instrumentos de control para dar cumplimiento a los requisitos establecidos en la Ley 20.998, y a los informes exigidos por la Superintendencia de Servicios Sanitarios, la DOH (Subdirección) y la DAES (para las cooperativas). \n\nA su vez, facilita procesos de facturación, administración y gestión de servicios sanitarios rurales; reduciendo costos y minimizando errores.',
    ventajas: [
      'Atención Personalizada',
      'Configurable',
      'Rendimiento',
      'Seguro'
    ],
    ventajasCards: [
      'Aviso de Folios Disponibles',
      'Soporte Especializado en Línea',
      'Despacho Automático de Boletas',
      'Facturación Electrónica de Consumos'
    ],
    imagen: 'assets/images/productos/gestion-sanitarios.png'
  },

  //GESTIÓN DE DOCUMENTOS TRIBUTARIOS ELECTRÓNICOS
  'gestion-documentos':{
    titulo: 'Gestión de Documentos Tributarios Electrónicos',
    slogans: [
      'Una solución que aporta valor a tu empresa',
      'NO TE PIERDAS MOMENTOS, GESTIÓN DTE TE SIGUE A TODAS PARTES',
      'RESPALDO Y SERVICIO COMPLETO',
      'Conoce todo lo que podrás hacer con Gestión DTE.'
    ],
    descripcion: 'Emite de forma simple y efectiva los Documentos Tributarios Electrónicos que requieras para el desarrollo de tu organización a través de nuestros sistemas informáticos automatizados.\n\nFacturas electrónicas, facturas electrónicas exentas, boletas afectas y exentas, notas de crédito, notas de débito, guías de despacho y más son los documentos que podrás emitir dentro de tu organización con nuestra gestión de Documentos Tributarios Electrónicos.\n\nContamos con una plataforma de apoyo que te ayudará a gestionar tu información tributaria, te notificará de los CAF inválidos y vencimientos de folios, te permitirá aceptar o rechazar DTE recibidos, cesión de facturas y mucho más.\n\nRecuerda que, en la actualidad, ser facturador electrónico es una obligación para todos los Servicios Sanitarios Rurales del país.',
    ventajas: [
      'Reducción de costos',
      'Confidencialdiad de los datos',
      'Conservación de la información',
      'Trazabilidad de los DTE'
    ],
    ventajasCards: [
      'Avisos de Folios Disponibles',
      'Filtro de CAF Inválidos',
      '100% Web',
      'Trazabilidad de los DTE'
    ],
    imagen: 'assets/images/productos/gestion-documentos.png'
  },
  //GESTIÓN DE INVENTARIO
  'gestion-inventario':{
    titulo: 'Gestión de Inventario',
    slogans: [
      'Gestiona el estado del inventario de tus bodegas',
      'MODERNO, FÁCIL, ADMINISTRABLE',
      'CUENTA CON TODO EL RESPALDO Y SERVICIO QUE NECESITAS',
      'Gestiona todos los movimientos de bodega'
    ],
    descripcion: 'Gestiona de forma fácil y rápida el estado del inventario de tus bodegas a través nuestros sistemas informáticos autónomos y personalizados.\n\nGeneración de estadísticas, visualización de stock en tiempo real y conservación de información son algunas de las ventajas que genera nuestra gestión de inventario en el desarrollo y crecimiento de tu organización.',
    ventajas: [
      'Stock Real',
      'Ahorra Tiempo',
      'Conservación de la información',
      'Amigable y fácil de usar'
    ],
    ventajasCards: [
      'Ágil, seguro, eficiente',
      'Integridad y Seguridad',
      'Soporte especializado en línea',
      'Minimiza errores'
    ],
    imagen: 'assets/images/productos/gestion-documentos.png'
  },
  //GESTIÓN DE CONTABILIDAD
  'gestion-contabilidad':{
    titulo: 'Gestión de Contabilidad',
    slogans: [
      'Emite y recibe todos tus DTE desde un solo lugar',
      'MODERNO, FÁCIL, ADMINISTRABLE',
      'AHORRA TIEMPO Y MEJORA LA PRODUCTIVIDAD',
      'Administra tus recursos financieros eficientemente, incorporando seguridad y confiabilidad para cada una de tus transacciones.'
    ],
    descripcion: 'Mantener el control de los Ingresos y Egresos, así como la Administración de los Recursos Financieros, es una labor que requiere máxima rigurosidad en la gestión empresarial. Respondiendo a esta necesidad, nuestra empresa desarrolló el Sistema de Información Financiero (SIF), un moderno Software de Contabilidad para APR y pequeñas empresas, 100% en línea y totalmente seguro, que entrega informes detallados de las diferentes transacciones realizadas por la organización, permitiendo efectuar cruces de información para validar los reportes y procedimientos realizados por los usuarios. SIF es una herramienta confiable y segura para respaldar la toma de decisiones en la empresa.',
    ventajas: [
      'Carga Masiva de Datos',
      '100% Web',
      'Soporte Especializado en Línea',
      'Amigable y fácil de usar'
    ],
    ventajasCards: [
      'Multi-Empresa',
      'Carga Masiva de Datos',
      'Administra Usuarios',
      'Soporte Especializado en Línea'
    ],
    imagen: 'assets/images/productos/gestion-documentos.png'
  },
  //TOMA DE LECTURAS
  'toma-lecturas':{
    titulo: 'Toma de Lecturas',
    slogans: [
      'Flexibilidad y diversidad en la toma de estados',
      'TOMA DE LECTURAS SEGURA, RÁPIDA Y EFICIENTE',
      'LA TECNOLOGÍA A TU SERVICIO',
      'Mejora la gestión de tus datos, disminuye tiempos y recursos. CAPDROID es lo que necesitas.'
    ],
    descripcion: 'Realiza de forma segura y rápida el proceso de toma de lecturas a través de nuestra aplicación móvil: Capdroid.\n\nNuestra aplicación, permite automatizar el proceso de toma de estados, minimizando errores en el ingreso de la información y generando importantes mejoras en la calidad, recopilación y transcripción de los datos procesados.\n\nApp disponible solo para dispositivos Android (celulares y tablets).',
    ventajas: [
      'Ahorra tiempo',
      'Captura y registra',
      'Capacidad de almacenamiento',
      'Pequeño y sencillo'
    ],
    ventajasCards: [
      'Aplicación Portátil para Android  ',
      'Minimiza errores',
      'Ágil, seguro, y eficiente',
      'Imagen de Apoyo a Lectura'
    ],
    imagen: 'assets/images/productos/gestion-documentos.png'
  },
  //WEB CLIENTES
  'web-clientes':{
    titulo: 'Web Clientes',
    slogans: [
      'Tus clientes informados estén donde estén',
      'ASIGNE VALOR A TU EMPRESA CON NUEVOS CANALES DE COMUNICACIÓN',
      'MANTÉN LA CERCANÍA CON TUS CLIENTES',
      'Tu imagen corporativa y tu página web son la cara visible de tu empresa.'
    ],
    descripcion: 'Administra de forma eficiente y totalmente en línea tu Servicio Sanitario Rural a través de nuestra página web exclusiva para clientes.\n\nNuestra web, facilita la comunicación fluida con tus clientes e incorpora herramientas adicionales como consultas de boletas y pagos online (Web Pay), las que te ayudarán con la gestión y administración de tu empresa.\n\nEsta solución informática, además de estar a la vanguardia en tecnología y eficiencia, también trae mejoras significativas en el servicio y la atención a los usuarios.',
    ventajas: [
      'Ahorra tiempo',
      'Captura y registra',
      'Capacidad de almacenamiento',
      'Pequeño y sencillo'
    ],
    ventajasCards: [
      'Aplicación Portátil para Android  ',
      'Minimiza errores',
      'Ágil, Seguro, y Eficiente',
      'Imagen de Apoyo a Lectura'
    ],
    imagen: 'assets/images/productos/gestion-documentos.png'
  },
  //LIBROS CONTABLES ELECTRÓNICOS
  'libros-contables-electronicos':{
    titulo: 'Libros Contables Electrónicos',
    slogans: [
      'Emite y recibe todos tus DTE desde un solo lugar',
      'SOMOS TU PARTNER EN EL DESARROLLO TECNOLÓGICO DE TUS IDEAS',
      'CONVIERTE TU INTERCONEXIÓN EN INGRESOS',
      'Desarrollamos procesos de interconexión entre tu solución de ingeniería y nuestros productos de servicio, para ayudarte a resolver y monitorear los retos de control derivados de una infraestructura digital cada vez más distribuida.'
    ],
    descripcion: 'Reduce costos de operación, aumenta la productividad y maximiza la competitividad de tu organización a través de la Contabilidad Electrónica.\n\nNuestros libros contables electrónicos, además de contribuir con el ahorro de papel, optimizan la gestión tributaria y agilizan la dirección administrativa de tu organización.\n\nA su vez, la integración tecnológica en tus procesos de contabilidad hará más fácil y eficiente la toma de decisiones dentro de tu empresa, disminuyendo costos y aumentando los niveles de productividad.',
    ventajas: [
      'Interactua con otras Empresas',
      'Mejorar Procesos',
      'Crea nuevos canales',
      'Tu información Asegurada'
    ],
    ventajasCards: [
      'Integración de Procesos',
      'Generación de Interfaz Sencilla',
      'Interacción Entre ERP',
      'Comunicación Entre Sistemas'
    ],
    imagen: 'assets/images/productos/gestion-documentos.png'
  },
  //ANALISIS DE POWER BI
  'analisis-power-bi':{
    titulo: 'Análisis de Power BI',
    slogans: [
      'Información valiosa, lo que ayuda a tomar decisiones más informadas y estratégicas',
      'En palabras simples, el carnet de identidad virtual de cada persona',
      'CERTIFICADO DIGITAL, EL GRAN PILAR DE LA NUEVA ADMINISTRACIÓN',
      'Entrega un nivel adicional de seguridad y privacidad al contribuyente en la realización de los trámites y transacciones por internet'
    ],
    descripcion: 'Visualiza de forma rápida y optimizada la facturación mensual de tu organización a través de nuestro sistema inteligente: Asesora Analytics.\n\nDicho sistema, basado en Power BI, ofrece una visión completa y detallada de la facturación mensual de tu empresa, brindando acceso a gráficos interactivos y reportes personalizados.\n\nCon Asesora Analytics, podrás monitorear tendencias, identificar áreas de crecimiento, realizar comparaciones mensuales y tomar decisiones informadas para la correcta gestión financiera de tu organización.',
    ventajas: [
      'Firmar electrónicamente',
      'Clave Privada',
      'Autenticación y firma',
      'Seguro'
    ],
    ventajasCards: [
      'Integridad y Seguridad',
      'Compatible con todos los navegadores',
      'Acreditación de identidad',
      'Firmar DTE'
    ],
    imagen: 'assets/images/productos/gestion-documentos.png'
  },
  //SISTEMA DE GEOLOCALIZACIÓN
  'geolocalizacion': {
    titulo: 'Sistema de Geolocalización',
    slogans: [
      'por definir',
      'por definir',
      'por definir',
      'por definir'
    ],
    descripcion: 'por definir',
    ventajas: [
      'por definir',
      'por definir',
      'por definir',
      'por definir'
    ],
    ventajasCards: [
      'por definir',
      'por definir',
      'por definir',
      'por definir'
    ],
    imagen: 'assets/images/productos/gestion-documentos.png'
  },
  //ASESORA GPT
  'asesora-gpt': {
    titulo: 'Asesora GPT',
    slogans: [
      'por definir',
      'por definir',
      'por definir',
      'por definir'
    ],
    descripcion: 'por definir',
    ventajas: [
      'por definir',
      'por definir',
      'por definir',
      'por definir'
    ],
    ventajasCards: [
      'por definir',
      'por definir',
      'por definir',
      'por definir'
    ],
    imagen: 'assets/images/productos/gestion-documentos.png'
  },
  //GESTIÓN DE ATENCIÓN A CLIENTES
  'atencion-clientes': {
    titulo: 'Gestión de Atención a Clientes',
    slogans: [
      'por definir',
      'por definir',
      'por definir',
      'por definir'
    ],
    descripcion: 'por definir',
    ventajas: [
      'por definir',
      'por definir',
      'por definir',
      'por definir'
    ],
    ventajasCards: [
      'por definir',
      'por definir',
      'por definir',
      'por definir'
    ],
    imagen: 'assets/images/productos/gestion-documentos.png'
  },

};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = productosData;
}
