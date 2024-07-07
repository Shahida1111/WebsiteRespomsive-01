const toggleBtn = document.querySelector('.toggle_menu i');
const navMenu = document.querySelector('.nav_menu ul');

toggleBtn.addEventListener('click', function(){
    navMenu.classList.toggle('show');
});