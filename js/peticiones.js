// Función para obtener la hora y fecha desde la API
async function ObtenerDatos() {
    try {
        // Usamos timeapi.io que es gratuito y fiable
        const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=America/Mexico_City');
        
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }

        const datos = await response.json();
        return datos; // Devuelve objeto con campos year, month, day, time, etc.
    } catch (error) {
        console.error('Error obteniendo la hora:', error);
        // Fallback local por si falla la API
        const now = new Date();
        return {
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString()
        };
    }
}

// Clase Usuario diseñada según las necesidades de la página
class Usuario {
    constructor(nombre, correo, servicio, mensaje, fecha, hora) {
        this.id = Date.now().toString(36) + Math.random().toString(36).substr(2); // ID único
        this.nombre = nombre;
        this.correo = correo;
        this.servicio = servicio;
        this.desarrolloProyecto = mensaje; // "Desarrollo del Proyecto"
        this.fechaPeticion = fecha;
        this.horaPeticion = hora;
    }

    horaRegistro() {
        return `${this.fechaPeticion} ${this.horaPeticion}`;
    }
}

// Función asíncrona para crear el objeto Usuario con los datos de la API
async function crearUsuarioConApi(nombre, correo, servicio, mensaje) {
    const datos = await ObtenerDatos();
    
    // La API timeapi.io devuelve 'date' (MM/DD/YYYY) y 'time' (HH:MM)
    // Si falla y usamos fallback local, devuelve formato local.
    const fecha = datos.date || `${datos.day}/${datos.month}/${datos.year}`;
    const hora = datos.time;

    return new Usuario(nombre, correo, servicio, mensaje, fecha, hora);
}

// Funciones para persistencia de datos (LocalStorage)
function guardarPeticion(usuario) {
    const peticiones = obtenerPeticiones();
    peticiones.push(usuario);
    localStorage.setItem('peticiones_arbt', JSON.stringify(peticiones));
}

function obtenerPeticiones() {
    const data = localStorage.getItem('peticiones_arbt');
    let peticiones = data ? JSON.parse(data) : [];
    
    // Migración: Asignar ID a registros antiguos que no lo tengan
    let huboCambios = false;
    peticiones = peticiones.map(p => {
        if (!p.id) {
            p.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
            huboCambios = true;
        }
        return p;
    });

    if (huboCambios) {
        localStorage.setItem('peticiones_arbt', JSON.stringify(peticiones));
    }

    return peticiones;
}

function eliminarPeticionPorId(id) {
    let peticiones = obtenerPeticiones();
    peticiones = peticiones.filter(p => p.id !== id);
    localStorage.setItem('peticiones_arbt', JSON.stringify(peticiones));
}
