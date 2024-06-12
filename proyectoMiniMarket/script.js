const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        document.body.classList.add('dark-mode');
        modeToggle.nextElementSibling.textContent = 'Modo Claro';
    } else {
        document.body.classList.remove('dark-mode');
        modeToggle.nextElementSibling.textContent = 'Modo Oscuro';
    }
});
