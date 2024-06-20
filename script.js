document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navibar = document.querySelector('.navibar');

    menuIcon.addEventListener('click', function() {
        navibar.classList.toggle('active');
  
        menuIcon.classList.toggle('bx-x');
    });
});
