const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')

    const handlerMenu = (e) => {
        if (e.target.closest('.menu') || e.target.closest('.close-btn') || e.target.closest('ul>li>a')) {
            menu.classList.toggle('active-menu')
        }
    }

    document.addEventListener('click', handlerMenu)

    // menuBtn.addEventListener('click', handlerMenu)
    // closeBtn.addEventListener('click', handlerMenu)

    // menuItems.forEach(menuItem => menuItem.addEventListener('click', handlerMenu))

}

export default menu