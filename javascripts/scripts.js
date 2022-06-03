const menu = document.getElementById('menu')

const navToggleHandler = ()=>{
    // add the 'open' class to the menu button when it is clicked
    menuButton.classList.toggle('open') // the toggle will allow you to toggle the open class on or off
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}

// Bind the id menu-btn to the variable menuButton
const menuButton = document.getElementById('menu-btn')
menuButton.addEventListener('click', navToggleHandler)

