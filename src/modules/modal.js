import {animate} from "./helpers";

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const screenWidth = document.documentElement.offsetWidth

    modal.style.opacity = 0
    modal.style.visibility = 'hidden'

    const animateOnModal = () => {
        let opacity = 0
        const animateOn = () => {
            opacity += 0.04
            modal.style.opacity = opacity;
            if (opacity < 1) {
                requestAnimationFrame(animateOn)
            }
        }
        modal.style.display = 'block'
        modal.style.visibility = 'visible'
        animateOn()
    }

    const openModal = () => {
        if (screenWidth < 768) {
            modal.style.display = 'block'
            modal.style.visibility = 'visible'
            modal.style.opacity = 1
        } else {
            animateOnModal()
        }
    }

    const animateOutModal = () => {
        let opacity = 1
        const animateOut = () => {
            opacity -= 0.04
            modal.style.opacity = opacity;
            if (opacity > 0) {
                requestAnimationFrame(animateOut)
            } else {
                modal.style.visibility = 'hidden'
                modal.style.display = 'none'
            }
        }
        animateOut()
    }

    const closeModal = () => {
        if (screenWidth < 768) {
            modal.style.display = 'none'
        }
        animateOutModal()
    }

    buttons.forEach(btn => btn.addEventListener('click', openModal))

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            closeModal()
        }
    })
}

export default modal;