const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        document.body.classList.add('dark-mode');
        modeToggle.nextElementSibling.textContent = '';
    } else {
        document.body.classList.remove('dark-mode');
        modeToggle.nextElementSibling.textContent = '';
    }
});
