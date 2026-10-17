document.addEventListener('DOMContentLoaded', () => {
    // 1. Navegación por pestañas
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');

            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // 2. Visualización nativa de PDFs en nueva pestaña (100% compatible)
    const previewButtons = document.querySelectorAll('.btn-preview');

    previewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pdfPath = button.getAttribute('data-pdf');
            if (pdfPath) {
                window.open(pdfPath, '_blank');
            }
        });
    });
});
