const menu = () => {
    const menu = document.querySelector('menu')

    const handlerMenu = (e) => {
        if (e.target.closest('.menu') || e.target.closest('.close-btn') || e.target.closest('ul>li>a')) {
            menu.classList.toggle('active-menu')
        } else if (!e.target.closest('menu') && menu.classList.contains('active-menu')) {
            menu.classList.toggle('active-menu');
        }
    }

    document.addEventListener('click', handlerMenu)

}

export default menu