var socket = io();

// * E S C U C H A R  E V E N T O S

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Se perdio la conexion al servidor');
});

// * E N V I A R  I N F O R  M A C I O N
socket.emit('enviarMensaje', {
    usuario: 'Luis',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('Respuesta Serer:', resp);
});

// * E S C U C H A N D O  I N F  O R M A C I O N
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);

});
