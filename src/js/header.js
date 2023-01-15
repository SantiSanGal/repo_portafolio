const toggleMenuElement = document.getElementById('toggle_menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('main-menu--show');
});
