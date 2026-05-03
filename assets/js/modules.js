const MODULES = [
  {
    id: 1, title: "Conceptos Básicos", subtitle: "Fundamentos de redes",
    icon: "🌐", color: "#6366f1", rf: "RF01",
    description: "Aprende los conceptos fundamentales sobre redes de computadores y cómo funciona Internet en tu hogar.",
    lessons: [
      {
        id: 1, title: "¿Qué es una Red?", icon: "🔗",
        content: `<p>Una <strong>red de computadores</strong> es un conjunto de dispositivos (celulares, computadores, tablets) conectados entre sí para compartir información.</p><p>Piénsalo como las carreteras que conectan pueblos: las redes conectan dispositivos para que puedan comunicarse y compartir datos.</p><div class="info-box"><p>💡 <strong>Ejemplo:</strong> Cuando envías una foto por WhatsApp, viaja por la red hasta el celular de tu familiar.</p></div>`
      },
      {
        id: 2, title: "Tipos de Redes", icon: "📡",
        content: `<p>Existen diferentes tipos de redes según su tamaño y alcance:</p><ul class="checklist"><li><strong>Red Local (LAN):</strong> Conecta dispositivos en un espacio pequeño como tu hogar.</li><li><strong>Red Wi-Fi:</strong> Una red local que usa ondas de radio, sin necesidad de cables.</li><li><strong>Internet:</strong> La red global más grande, conecta millones de redes en el mundo.</li></ul>`
      },
      {
        id: 3, title: "Dispositivos de Red", icon: "📦",
        content: `<p>Los principales dispositivos en una red doméstica son:</p><ul class="step-list"><li><span class="step-num">1</span><div><strong>Módem:</strong> Traduce la señal del proveedor de internet a una que tus dispositivos entienden.</div></li><li><span class="step-num">2</span><div><strong>Router:</strong> Distribuye esa señal a todos tus dispositivos por Wi-Fi o cable.</div></li><li><span class="step-num">3</span><div><strong>Switch:</strong> Conecta múltiples dispositivos por cable en una misma red.</div></li></ul>`
      },
      {
        id: 4, title: "Tu Red Doméstica", icon: "🏠",
        content: `<p>Así funciona internet en tu hogar, paso a paso:</p><ul class="step-list"><li><span class="step-num">1</span><div>El proveedor lleva la señal de internet hasta tu casa por cable o fibra óptica.</div></li><li><span class="step-num">2</span><div>El <strong>módem/router</strong> recibe esa señal y la convierte.</div></li><li><span class="step-num">3</span><div>El router distribuye el internet a tu celular, TV, computador, etc.</div></li></ul><div class="info-box success"><p>✅ Con una buena configuración, todos los dispositivos en tu hogar pueden conectarse al mismo tiempo.</p></div>`
      }
    ],
    quiz: [
      { question: "¿Qué es una red de computadores?", options: ["Un solo computador muy potente","Un conjunto de dispositivos conectados para compartir información","Un cable de internet","Una aplicación de celular"], correct: 1, explanation: "Una red de computadores conecta múltiples dispositivos para que puedan comunicarse y compartir datos entre sí." },
      { question: "¿Qué dispositivo distribuye el internet a todos los aparatos de tu hogar?", options: ["El televisor","El switch","El router","El teclado"], correct: 2, explanation: "El router es el encargado de distribuir la señal de internet a todos los dispositivos del hogar, ya sea por Wi-Fi o cable." },
      { question: "¿Cómo se llama la red que conecta dispositivos dentro de tu hogar?", options: ["Red LAN","Internet","Red WAN","Red satelital"], correct: 0, explanation: "LAN (Local Area Network) es el tipo de red que conecta dispositivos en un espacio pequeño como un hogar o negocio." },
      { question: "¿Qué hace el módem en tu red doméstica?", options: ["Guarda tus fotos","Traduce la señal del proveedor de internet a una que tus dispositivos entienden","Envía correos automáticamente","Protege de virus"], correct: 1, explanation: "El módem actúa como traductor entre la señal de tu proveedor de internet y los dispositivos de tu hogar." }
    ]
  },
  {
    id: 2, title: "Configuración del Router", subtitle: "Paso a paso",
    icon: "⚙️", color: "#06b6d4", rf: "RF02",
    description: "Aprende a acceder y configurar tu router doméstico para una conexión óptima y segura.",
    lessons: [
      {
        id: 1, title: "¿Qué es el Router?", icon: "📡",
        content: `<p>El router es el <strong>"director de tráfico"</strong> de tu red doméstica. Sus funciones principales son:</p><ul class="checklist"><li>Recibir internet del proveedor.</li><li>Distribuirlo a todos tus dispositivos.</li><li>Proteger tu red del exterior.</li><li>Gestionar qué dispositivo recibe qué datos.</li></ul><div class="info-box"><p>💡 Aunque muchos llaman "módem" al router, técnicamente son dispositivos distintos. Hoy muchos proveedores ofrecen un aparato que cumple ambas funciones.</p></div>`
      },
      {
        id: 2, title: "Acceder al Panel de Administración", icon: "🔐",
        content: `<p>Todo router tiene un panel de control al que puedes acceder desde el navegador:</p><ul class="step-list"><li><span class="step-num">1</span><div>Conecta tu dispositivo al router por Wi-Fi o cable.</div></li><li><span class="step-num">2</span><div>Abre tu navegador (Chrome, Firefox, etc.).</div></li><li><span class="step-num">3</span><div>Escribe en la barra de dirección: <strong>192.168.1.1</strong> o <strong>192.168.0.1</strong></div></li><li><span class="step-num">4</span><div>Ingresa usuario y contraseña. Generalmente: <strong>admin / admin</strong>, o están en la etiqueta del router.</div></li></ul><div class="info-box warning"><p>⚠️ Si no puedes ingresar, revisa la etiqueta pegada en el router con los datos de acceso.</p></div>`
      },
      {
        id: 3, title: "Cambiar el Nombre de tu Red (SSID)", icon: "✏️",
        content: `<p>El <strong>SSID</strong> es el nombre que aparece cuando buscas redes Wi-Fi disponibles.</p><ul class="step-list"><li><span class="step-num">1</span><div>Ingresa al panel de administración del router.</div></li><li><span class="step-num">2</span><div>Busca la sección <strong>"Wireless"</strong> o <strong>"Red Inalámbrica"</strong>.</div></li><li><span class="step-num">3</span><div>Encuentra el campo <strong>"SSID"</strong> o <strong>"Nombre de Red"</strong>.</div></li><li><span class="step-num">4</span><div>Escribe un nombre personalizado. Evita usar tu nombre o dirección.</div></li><li><span class="step-num">5</span><div>Guarda los cambios y reconecta tus dispositivos.</div></li></ul>`
      },
      {
        id: 4, title: "Establecer Contraseña de Red", icon: "🔑",
        content: `<p>Una buena contraseña protege tu internet de uso no autorizado:</p><ul class="step-list"><li><span class="step-num">1</span><div>En la sección "Wireless", busca <strong>"Seguridad"</strong> o <strong>"Security"</strong>.</div></li><li><span class="step-num">2</span><div>Selecciona el tipo de seguridad: elige <strong>WPA2</strong> o <strong>WPA3</strong>.</div></li><li><span class="step-num">3</span><div>Escribe tu nueva contraseña (mínimo 12 caracteres).</div></li><li><span class="step-num">4</span><div>Guarda los cambios y reconecta todos tus dispositivos con la nueva clave.</div></li></ul><div class="info-box success"><p>✅ Usa una contraseña que mezcle letras, números y símbolos. Ejemplo: <strong>Velandia#2024!</strong></p></div>`
      }
    ],
    quiz: [
      { question: "¿Cuál es la dirección IP típica para acceder al panel del router?", options: ["192.168.1.1","127.0.0.1","8.8.8.8","10.0.0.254"], correct: 0, explanation: "La dirección 192.168.1.1 (o 192.168.0.1) es la puerta de enlace predeterminada de la mayoría de routers domésticos." },
      { question: "¿Qué es el SSID?", options: ["La contraseña de tu router","El nombre de tu red Wi-Fi","La dirección IP del router","El número de serie del dispositivo"], correct: 1, explanation: "SSID (Service Set Identifier) es el nombre visible de tu red Wi-Fi que aparece cuando buscas redes disponibles." },
      { question: "¿Qué tipo de seguridad se recomienda para proteger tu red?", options: ["WEP","Sin contraseña","WPA2 o WPA3","Solo filtrado MAC"], correct: 2, explanation: "WPA2 y WPA3 son los protocolos de seguridad más modernos y seguros para redes Wi-Fi domésticas." },
      { question: "¿Cuántos caracteres mínimo debe tener tu contraseña de red?", options: ["6 caracteres","8 caracteres","12 caracteres","4 caracteres"], correct: 2, explanation: "Se recomienda un mínimo de 12 caracteres para que la contraseña sea suficientemente segura y difícil de adivinar." }
    ]
  },
  {
    id: 3, title: "Optimización Wi-Fi", subtitle: "Mejora tu señal",
    icon: "📶", color: "#10b981", rf: "RF03",
    description: "Aprende a mejorar la cobertura y velocidad de tu señal Wi-Fi con consejos prácticos.",
    lessons: [
      {
        id: 1, title: "¿Por qué Varía la Señal?", icon: "📉",
        content: `<p>La señal Wi-Fi son <strong>ondas de radio</strong>. Varios factores la afectan:</p><ul class="checklist"><li><strong>Distancia:</strong> A mayor distancia del router, la señal es más débil.</li><li><strong>Paredes:</strong> Los muros de concreto bloquean las ondas de radio.</li><li><strong>Interferencias:</strong> Otros dispositivos electrónicos pueden interferir.</li><li><strong>Obstáculos:</strong> Muebles metálicos y electrodomésticos reflejan las ondas.</li></ul><div class="info-box"><p>💡 La frecuencia 2.4 GHz penetra mejor las paredes pero es más lenta. La frecuencia 5 GHz es más rápida pero tiene menos alcance.</p></div>`
      },
      {
        id: 2, title: "Mejor Ubicación del Router", icon: "📍",
        content: `<p>La ubicación del router es clave para una buena cobertura:</p><ul class="checklist"><li>Colócalo en el <strong>centro del hogar</strong> para distribución uniforme.</li><li>Ubícalo en un lugar <strong>alto</strong> (estante elevado).</li><li>Mantén las <strong>antenas verticales</strong>.</li><li>Déjalo en un lugar <strong>abierto y ventilado</strong>.</li></ul><ul class="checklist"><li class="bad">Evita colocarlo en esquinas extremas de la casa.</li><li class="bad">Evita meterlo en cajones o armarios cerrados.</li><li class="bad">Evita colocarlo cerca del microondas o televisor.</li><li class="bad">Evita colocarlo en el suelo.</li></ul>`
      },
      {
        id: 3, title: "Interferencias Comunes", icon: "⚡",
        content: `<p>Estos dispositivos pueden afectar tu señal Wi-Fi:</p><ul class="step-list"><li><span class="step-num">1</span><div><strong>Microondas:</strong> Opera en 2.4 GHz, la misma frecuencia de tu Wi-Fi.</div></li><li><span class="step-num">2</span><div><strong>Teléfonos inalámbricos:</strong> Usan frecuencias similares al Wi-Fi.</div></li><li><span class="step-num">3</span><div><strong>Routers de vecinos:</strong> Pueden estar en el mismo canal, causando interferencia.</div></li></ul><div class="info-box"><p>💡 <strong>Solución:</strong> Cambia el canal de tu router (del 1 al 11) en el panel de administración para reducir la interferencia.</p></div>`
      },
      {
        id: 4, title: "Consejos para Mejor Cobertura", icon: "💡",
        content: `<p>Aplica estos consejos para mantener una conexión óptima:</p><ul class="checklist"><li>Reinicia el router <strong>una vez por semana</strong> para refrescar la conexión.</li><li>Mantén el <strong>firmware actualizado</strong> (actualizaciones del software del router).</li><li>Si la casa es grande, considera usar un <strong>repetidor Wi-Fi</strong>.</li><li>Evita conectar demasiados dispositivos simultáneamente.</li><li>Desconecta dispositivos que no estés usando.</li></ul><div class="info-box success"><p>✅ Un router reiniciado semanalmente y bien ubicado puede mejorar la velocidad hasta un 30%.</p></div>`
      }
    ],
    quiz: [
      { question: "¿Cuál es la mejor ubicación para el router en tu hogar?", options: ["En una esquina del cuarto más pequeño","En el centro del hogar, en un lugar alto y abierto","Dentro de un cajón para protegerlo","Cerca del microondas"], correct: 1, explanation: "El centro del hogar permite que la señal se distribuya uniformemente. Un lugar alto y abierto evita obstáculos que bloqueen las ondas." },
      { question: "¿Qué electrodoméstico puede interferir con la señal Wi-Fi de 2.4 GHz?", options: ["La nevera","El microondas","El televisor LED","La lavadora"], correct: 1, explanation: "El microondas opera en la frecuencia de 2.4 GHz, la misma que usa el Wi-Fi, causando interferencia cuando está en uso." },
      { question: "¿Con qué frecuencia se recomienda reiniciar el router?", options: ["Cada hora","Una vez por día","Una vez por semana","Nunca"], correct: 2, explanation: "Reiniciar el router semanalmente refresca las conexiones, libera memoria y puede mejorar el rendimiento de la red." },
      { question: "¿Las paredes de concreto afectan la señal Wi-Fi?", options: ["Sí, las bloquean significativamente","No, las atraviesan sin problema","Solo si son muy delgadas","Solo de noche"], correct: 0, explanation: "El concreto y los materiales densos absorben y bloquean las ondas de radio del Wi-Fi, reduciendo significativamente la señal." }
    ]
  },
  {
    id: 4, title: "Solución de Problemas", subtitle: "Troubleshooting",
    icon: "🔧", color: "#f59e0b", rf: "RF04",
    description: "Aprende a diagnosticar y resolver los problemas más comunes de conectividad en tu red doméstica.",
    lessons: [
      {
        id: 1, title: "Problemas Comunes de Conectividad", icon: "❌",
        content: `<p>Estos son los problemas más frecuentes en redes domésticas:</p><ul class="step-list"><li><span class="step-num">1</span><div><strong>Sin internet:</strong> No hay conexión a ninguna página web o aplicación.</div></li><li><span class="step-num">2</span><div><strong>Conexión lenta:</strong> Las páginas tardan mucho en cargar o los videos se detienen.</div></li><li><span class="step-num">3</span><div><strong>Desconexiones frecuentes:</strong> La conexión se cae repetidamente.</div></li><li><span class="step-num">4</span><div><strong>No encuentra la red:</strong> El nombre de tu Wi-Fi no aparece en la lista.</div></li></ul>`
      },
      {
        id: 2, title: "Diagnóstico Básico", icon: "🔍",
        content: `<p>Antes de llamar al proveedor, verifica estos puntos:</p><ul class="checklist"><li>¿Las <strong>luces del router</strong> están encendidas? (debe haber luz de internet o WAN).</li><li>¿El problema afecta a <strong>todos los dispositivos</strong> o solo a uno?</li><li>¿Cuándo ocurrió el problema <strong>por primera vez</strong>?</li><li>¿Hay <strong>tormentas eléctricas</strong> en la zona?</li><li>¿Instalaste recientemente algún <strong>programa nuevo</strong>?</li></ul><div class="info-box"><p>💡 Si el problema es solo en un dispositivo, el problema es ese dispositivo. Si afecta a todos, el problema es el router o el proveedor.</p></div>`
      },
      {
        id: 3, title: "Reinicio del Router Paso a Paso", icon: "🔄",
        content: `<p>El reinicio resuelve el <strong>70% de los problemas</strong> de conectividad:</p><ul class="step-list"><li><span class="step-num">1</span><div>Desconecta el router del <strong>tomacorriente eléctrico</strong>.</div></li><li><span class="step-num">2</span><div>Espera exactamente <strong>30 segundos</strong>. Es importante aguardar este tiempo.</div></li><li><span class="step-num">3</span><div>Vuelve a conectar el router a la corriente.</div></li><li><span class="step-num">4</span><div>Espera <strong>2 minutos</strong> para que se estabilice completamente.</div></li><li><span class="step-num">5</span><div>Intenta conectarte nuevamente a tu red Wi-Fi.</div></li></ul><div class="info-box warning"><p>⚠️ El botón <strong>"Reset"</strong> del router es diferente: borra TODA la configuración. Úsalo solo como último recurso.</p></div>`
      },
      {
        id: 4, title: "¿Cuándo Llamar al Proveedor?", icon: "📞",
        content: `<p>Debes contactar a tu proveedor de internet cuando:</p><ul class="checklist"><li>El reinicio del router <strong>no resolvió el problema</strong>.</li><li>La <strong>luz de internet</strong> del router está apagada o de color rojo.</li><li>El problema <strong>persiste más de 24 horas</strong>.</li><li>Hay un <strong>corte masivo</strong> reportado en tu área.</li></ul><p>Antes de llamar, ten a la mano:</p><ul class="checklist"><li>Número de cliente o cuenta.</li><li>Dirección del servicio.</li><li>Descripción detallada del problema.</li></ul>`
      }
    ],
    quiz: [
      { question: "¿Cuánto tiempo debes esperar después de desconectar el router para reiniciarlo?", options: ["5 segundos","30 segundos","5 minutos","10 minutos"], correct: 1, explanation: "Esperar 30 segundos permite que los capacitores del router se descarguen completamente, logrando un reinicio efectivo." },
      { question: "¿Qué porcentaje de problemas de conectividad puede resolver un simple reinicio del router?", options: ["10%","30%","50%","70%"], correct: 3, explanation: "Se estima que el 70% de los problemas comunes de conectividad se resuelven con un reinicio correcto del router." },
      { question: "Si el problema de internet afecta a TODOS los dispositivos de tu hogar, ¿qué significa?", options: ["El problema está en tu celular","El problema está en el router o el proveedor","Debes reinstalar las aplicaciones","El Wi-Fi está apagado en cada dispositivo"], correct: 1, explanation: "Si todos los dispositivos fallan simultáneamente, el problema es el router o el servicio del proveedor, no los dispositivos individuales." },
      { question: "¿Cuándo debes presionar el botón 'Reset' del router?", options: ["Cada semana","Cuando hay conexión lenta","Solo como último recurso, ya que borra toda la configuración","Antes de apagarlo"], correct: 2, explanation: "El botón Reset restaura el router a valores de fábrica, borrando toda tu configuración personalizada. Solo úsalo si nada más funciona." }
    ]
  },
  {
    id: 5, title: "Seguridad Informática", subtitle: "Protege tu red",
    icon: "🔐", color: "#ef4444", rf: "RF05",
    description: "Aprende buenas prácticas para mantener tu red doméstica segura y protegida contra intrusos.",
    lessons: [
      {
        id: 1, title: "¿Por qué Proteger tu Red?", icon: "🛡️",
        content: `<p>Una red doméstica sin protección permite que personas ajenas:</p><ul class="checklist"><li class="bad">Usen tu internet sin pagar, <strong>robando tu ancho de banda</strong>.</li><li class="bad">Accedan a tus archivos compartidos en la red.</li><li class="bad">Espíen tu actividad en internet.</li><li class="bad">Usen tu conexión para actividades ilegales.</li></ul><div class="info-box warning"><p>⚠️ Si alguien usa tu internet para actividades ilegales, el rastro puede llevar hasta tu dirección. ¡Proteger tu red es protegerte a ti!</p></div>`
      },
      {
        id: 2, title: "Contraseñas Seguras", icon: "🔑",
        content: `<p>Características de una <strong>buena contraseña</strong>:</p><ul class="checklist"><li>Mínimo <strong>12 caracteres</strong>.</li><li>Mezcla letras <strong>mayúsculas y minúsculas</strong>.</li><li>Incluye <strong>números y símbolos</strong> (!, @, #, $).</li><li>No uses datos personales (nombre, fecha de nacimiento).</li><li>Diferente para cada servicio.</li></ul><ul class="checklist"><li class="bad"><strong>Inseguras:</strong> 12345678, contraseña, admin, mi nombre.</li></ul><div class="info-box success"><p>✅ <strong>Ejemplo seguro:</strong> Velandia#2024! — tiene mayúsculas, minúsculas, número y símbolo.</p></div>`
      },
      {
        id: 3, title: "Tipos de Cifrado Wi-Fi", icon: "🔒",
        content: `<p>El cifrado protege los datos que viajan por tu red:</p><ul class="step-list"><li><span class="step-num">❌</span><div><strong>WEP:</strong> Muy antiguo e inseguro. Nunca lo uses.</div></li><li><span class="step-num">⚠️</span><div><strong>WPA:</strong> Mejor que WEP, pero ya está desactualizado.</div></li><li><span class="step-num">✅</span><div><strong>WPA2:</strong> El estándar actual. Seguro y ampliamente compatible.</div></li><li><span class="step-num">🏆</span><div><strong>WPA3:</strong> El más moderno y seguro. Úsalo si tu router lo soporta.</div></li></ul><div class="info-box"><p>💡 Para cambiar el cifrado, ingresa al panel de administración de tu router y busca la sección de seguridad inalámbrica.</p></div>`
      },
      {
        id: 4, title: "Detectar Usuarios No Autorizados", icon: "👁️",
        content: `<p>Si sospechas que alguien está usando tu red sin permiso:</p><ul class="step-list"><li><span class="step-num">1</span><div>Ingresa al <strong>panel de administración</strong> del router (192.168.1.1).</div></li><li><span class="step-num">2</span><div>Busca <strong>"Dispositivos conectados"</strong> o <strong>"Connected Devices"</strong>.</div></li><li><span class="step-num">3</span><div>Revisa la lista y verifica si reconoces todos los dispositivos.</div></li><li><span class="step-num">4</span><div>Si hay uno desconocido, <strong>cambia inmediatamente tu contraseña Wi-Fi</strong>.</div></li></ul><div class="info-box success"><p>✅ Haz esta revisión mensualmente como parte de tu rutina de seguridad.</p></div>`
      }
    ],
    quiz: [
      { question: "¿Cuál es el tipo de cifrado Wi-Fi más seguro y moderno?", options: ["WEP","WPA","WPA2","WPA3"], correct: 3, explanation: "WPA3 es el protocolo de seguridad más moderno. Si tu router no lo soporta, WPA2 es la siguiente mejor opción." },
      { question: "¿Cuál de estas es una contraseña SEGURA para tu red?", options: ["12345678","admin","Velandia#2024!","micontraseña"], correct: 2, explanation: "Velandia#2024! cumple todos los requisitos: tiene más de 12 caracteres, mayúsculas, minúsculas, números y símbolos." },
      { question: "¿Cómo puedes saber si alguien no autorizado está usando tu red?", options: ["Buscando en Google","Revisando los dispositivos conectados en el panel del router","Llamando al proveedor","Desconectando el router"], correct: 1, explanation: "El panel de administración del router muestra una lista de todos los dispositivos conectados, permitiéndote identificar intrusos." },
      { question: "¿Qué pasa si alguien usa tu internet para actividades ilegales?", options: ["Nada, no es tu problema","El rastro puede llevar hasta tu dirección","Solo se reduce la velocidad","Se apaga el router automáticamente"], correct: 1, explanation: "La dirección IP que se rastrea en actividades ilegales es la del router, que está registrada a tu nombre. Por eso es vital proteger tu red." }
    ]
  }
];
