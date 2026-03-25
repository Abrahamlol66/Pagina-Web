// Configuración de Supabase (Reemplazar con tus credenciales reales)
const SUPABASE_URL = 'https://TU_PROYECTO.supabase.co';
const SUPABASE_ANON_KEY = 'TU_KEY_ANONIMA';

let supabaseClient;
if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

document.addEventListener('DOMContentLoaded', async () => {
    if (!supabaseClient) {
        console.error('Supabase library not loaded');
        return;
    }

    // Verificar si estamos en una página protegida o en el acceso secreto
    const path = window.location.pathname;
    const isProtected = path.includes('/admin/');
    const isSecretAccess = path.includes('/donas/');

    const { data: { session } } = await supabaseClient.auth.getSession();

    if (isProtected && !session) {
        // Redirigir al acceso secreto si no hay sesión y estamos en el panel admin
        window.location.href = '../../donas/index.html';
    }

    if (isSecretAccess && session) {
        // Redirigir al panel si ya hay sesión y estamos en el acceso secreto
        window.location.href = '../pages/admin/peticiones.html';
    }

    // Manejar el formulario de login si existe
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorMsg = document.getElementById('error-msg');

            const { error } = await supabaseClient.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                errorMsg.textContent = 'Acceso denegado: ' + error.message;
                errorMsg.style.display = 'block';
            } else {
                window.location.href = '../pages/admin/peticiones.html';
            }
        });
    }

    // Manejar el cierre de sesión si existe el botón
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            await supabaseClient.auth.signOut();
            window.location.href = '../../index.html';
        });
    }
});
