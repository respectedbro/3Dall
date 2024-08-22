const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')

    const handlerMenu = (e) => {
        if (e.target.closest('.menu') || e.target.closest('.close-btn') || e.target.closest('ul>li>a')) {
            menu.classList.toggle('active-menu')
        } else if (!e.target.closest('menu') && menu.classList.contains('active-menu')) {
            menu.classList.toggle('active-menu');
        }
    }
    document.addEventListener('click', (e) => {
        console.log(e.target)
    })

    document.addEventListener('click', handlerMenu)

}

export default menu