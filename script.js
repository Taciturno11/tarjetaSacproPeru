document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const cardSections = document.querySelectorAll('.card section');
    const darkModeToggle = document.querySelector('.fa-moon');

    function showSection(targetId) {
        // 1. Ocultar todas las secciones
        cardSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // 2. Mostrar solo la sección objetivo
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

    // Función para alternar modo oscuro
    function toggleDarkMode() {
        const body = document.body;
        const isDark = body.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            // Cambiar a modo claro
            body.setAttribute('data-theme', 'light');
            darkModeToggle.classList.remove('fa-sun');
            darkModeToggle.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            // Cambiar a modo oscuro
            body.setAttribute('data-theme', 'dark');
            darkModeToggle.classList.remove('fa-moon');
            darkModeToggle.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Cargar tema guardado
    function loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            darkModeToggle.classList.remove('fa-moon');
            darkModeToggle.classList.add('fa-sun');
        } else {
            document.body.setAttribute('data-theme', 'light');
            darkModeToggle.classList.remove('fa-sun');
            darkModeToggle.classList.add('fa-moon');
        }
    }

    // Manejar clics en la barra de navegación
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remover 'active' de todos los botones
            navItems.forEach(i => i.classList.remove('active'));
            
            // Añadir 'active' al botón clickeado
            item.classList.add('active');
            
            const targetId = item.getAttribute('href');
            showSection(targetId);
        });
    });

    // Manejar clic en el botón de modo oscuro
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // Cargar tema guardado al inicio
    loadSavedTheme();

    // Mostrar la sección PERFIL al cargar (por defecto)
    showSection('#perfil');
});