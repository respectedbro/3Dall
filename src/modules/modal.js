import {animate} from "./helpers";

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const screenWidth = document.documentElement.offsetWidth

    modal.style.opacity = 0
    modal.style.visibility = 'hidden'
    modal.style.display = 'none';

    const animateOnModal = () => {
        modal.style.display = 'block';
        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modal.style.opacity = progress
                modal.style.visibility = 'visible'
            }
        });
    }

    const animateOutModal = () => {
        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modal.style.opacity = 1 - progress
                if(progress === 1) {
                    modal.style.visibility = 'hidden'
                    modal.style.display = 'none'
                }

            }
        });
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

export default modal