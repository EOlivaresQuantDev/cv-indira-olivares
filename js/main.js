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

    // 2. Visor de PDF adaptativo (Móvil + Desktop)
    const modal = document.getElementById('pdf-viewer-modal');
    const pdfFrame = document.getElementById('pdf-frame');
    const closeModal = document.getElementById('close-modal');
    const previewButtons = document.querySelectorAll('.btn-preview');

    // Detección de dispositivos móviles
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    previewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pdfPath = button.getAttribute('data-pdf');

            if (isMobile) {
                // En celulares abre el PDF en una pestaña nueva limpia utilizando el visor del sistema
                window.open(pdfPath, '_blank');
            } else {
                // En computadora despliega la ventana modal interactiva
                pdfFrame.src = pdfPath;
                modal.classList.remove('hidden');
            }
        });
    });

    // Cerrar modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
            pdfFrame.src = '';
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                pdfFrame.src = '';
            }
        });
    }
});
