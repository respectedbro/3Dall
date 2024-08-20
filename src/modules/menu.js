const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')

    const handlerMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menu.addEventListener('click', (e) => {
        if (e.target === menuBtn || e.target === closeBtn) {
            menu.classList.toggle('active-menu');
        } else if (e.target.closest('ul>li>a')) {
            menu.classList.remove('active-menu');
        }
    })

    // menuBtn.addEventListener('click', handlerMenu)
    // closeBtn.addEventListener('click', handlerMenu)

    menuItems.forEach(menuItem => menuItem.addEventListener('click', handlerMenu))

}

export default menu