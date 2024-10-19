document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.remove('active');
});