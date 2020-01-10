const { io }  = require ('../server');


// *************************************************************
// *** 		'C O M I N I C A C I O N  D E L  B A C K E N D'    ***
// *************************************************************

io.on('connection', (client) => {

    console.log('Cliente conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienenido a la aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    // * E S C U C H A N D O  C L I E N T E 
    client.on('enviarMensaje', (data, callback) => {
			console.log(data);
			client.broadcast.emit('enviarMensaje',data);
			
			/*   if (mensaje.usuario) {
            callback({
                resp: 'Todo salio Bien'
            });
        } else {
            callback({
                resp: 'Todo salio Mal'
            });
        } */
    });
});
