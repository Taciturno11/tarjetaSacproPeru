document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const cardSections = document.querySelectorAll('.card section');

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

    // Mostrar la sección PERFIL al cargar (por defecto)
    showSection('#perfil');
});