export const whatsappProps = {
    phoneNumber: "573214290038", // Reemplaza con tu número de teléfono en formato internacional
    accountName: "Tienda Informatica", // Nombre que aparecerá en el widget
    avatar: '/images/logo2.png',
    statusMessage: "Normalmente responde en 5 minutos", // Mensaje de estado debajo del nombre de la cuenta
    chatMessage: "¡Hola! 🤝 ¿Cómo podemos ayudarte?", // Mensaje inicial en el cuadro de chat
    placeholder: "Escribe un mensaje...", // Placeholder del campo de entrada del chat
    messageDelay: 2, // Retraso en segundos antes de mostrar el mensaje de chat
    darkMode: false, // Estilo oscuro
    allowClickAway: false, // Permite cerrar el chat al hacer clic fuera del cuadro
    allowEsc: true, // Permite cerrar el chat al presionar la tecla Escape
    className: "fixed bottom-4 right-4 z-50", // Clase CSS para el contenedor del widget
    buttonClassName: "bg-green-500 hover:bg-green-600 text-white p-2 rounded-full", // Clase CSS para el botón
    style: { bottom: 20, right: 20 }, // Estilo en línea para el contenedor
    buttonStyle: { backgroundColor: '#25D366' }, // Estilo en línea para el botón
    chatboxHeight: 320, // Altura del cuadro de chat en píxeles
    chatboxClassName: "floating-whatsapp-chatbox", // Clase CSS para el cuadro de chat
    chatboxStyle: {}, // Estilo en línea para el cuadro de chat
    notification: true, // Habilita las notificaciones
    notificationDelay: 60, // Retraso entre notificaciones en segundos
    notificationSound: false,// Desactiva el sonido de notificación
    notificationSoundSrc: "https://example.com/notification-sound.mp3", // URL personalizada para el sonido de notificación
    notificationLoop: 0, // Número de veces que se repite el loop de notificaciones, 0 para infinito
    notificationStyle: {}, // Estilo en línea para el indicador de notificaciones
    notificationClassName: "floating-whatsapp-notification" // Clase CSS para el indicador de notificaciones
 // Clase CSS para el indicador de notificaciones
    
};