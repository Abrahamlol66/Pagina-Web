document.getElementById('form-contacto')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.textContent;
    const estado = document.getElementById('estado');

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;

    btn.textContent = 'Procesando...';
    btn.disabled = true;

    // Usar la función de peticiones.js para crear el Usuario
    crearUsuarioConApi(nombre, email, servicio, mensaje)
        .then((usuario) => {
            console.log('Objeto Usuario creado:', usuario);
            console.log('Fecha y hora de registro:', usuario.horaRegistro());
            
            // La persistencia se realizará a través del backend en el futuro.
            // Por ahora, solo simulamos el éxito en la UI.
            guardarPeticion(usuario); 

            // Simular éxito visual en la UI
            btn.textContent = originalText;
            btn.disabled = false;
            estado.textContent = `Gracias ${usuario.nombre}, tu petición ha sido registrada el ${usuario.fechaPeticion} a las ${usuario.horaPeticion}.`;
            estado.className = 'estado exito';
            e.target.reset();
        })
        .catch((error) => {
            console.error(error);
            btn.textContent = originalText;
            btn.disabled = false;
            estado.textContent = 'Hubo un error al procesar tu solicitud.';
            estado.className = 'estado error';
        });
});
