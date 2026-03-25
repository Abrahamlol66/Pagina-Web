document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('lista-peticiones');
    const noData = document.getElementById('no-data');
    const peticiones = obtenerPeticiones();

    if (!peticiones || peticiones.length === 0) {
        noData.style.display = 'block';
        noData.textContent = 'Las peticiones locales han sido desactivadas. Próximamente se mostrarán datos desde el backend (Supabase).';
        return;
    }

    // Ordenar por fecha más reciente (asumiendo que se agregan al final, invertimos)
    peticiones.reverse().forEach(p => {
        // Reconstruir instancia para usar métodos si es necesario
        // const usuario = new Usuario(p.nombre, p.correo, p.servicio, p.desarrolloProyecto, p.fechaPeticion, p.horaPeticion);
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div style="color: white;">${p.fechaPeticion}</div>
                <div style="font-size: 0.8rem; opacity: 0.7;">${p.horaPeticion}</div>
            </td>
            <td>${p.nombre}</td>
            <td>${p.correo}</td>
            <td><span class="badge-servicio">${formatServicio(p.servicio)}</span></td>
            <td>
                <div style="max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${p.desarrolloProyecto}">
                    ${p.desarrolloProyecto}
                </div>
            </td>
            <td>
                <button class="btn-borrar" onclick="borrarPeticion('${p.id}')" title="Eliminar petición">
                    &times;
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
});

function borrarPeticion(id) {
    if (confirm('¿Estás seguro de que deseas eliminar esta petición?')) {
        eliminarPeticionPorId(id);
        location.reload(); // Recargar para actualizar la tabla
    }
}

function formatServicio(slug) {
    const map = {
        'desarrollo': 'Desarrollo Web',
        'hosting': 'Hosting',
        'servidores': 'Servidores',
        'modificacion': 'Modificación',
        'otro': 'Otro'
    };
    return map[slug] || slug;
}
