const modal = () => {
  const modal = document.querySelector('.popup')
  const buttons = document.querySelectorAll('.popup-btn')
  const closeBtn = modal.querySelector('.popup-close')
  const screenWidth = document.documentElement.offsetWidth

  modal.style.opacity = 0
  modal.style.visibility = 'hidden'
  modal.style.transition = '0.5s'

  const openModal = () => {
    if (screenWidth < 768) {
      modal.style.display = 'block'
      modal.style.visibility = 'visible'
      modal.style.opacity = 1
      modal.transition = '0.5s'
    } else {
      modal.style.display = 'block'

      setTimeout(() => {
        modal.style.visibility = 'visible'
        modal.style.opacity = 1
        modal.transition = '0.5s'
      }, 100);
    }
  }

  const closeModal = () => {
    if (screenWidth < 768) {
      modal.style.display = 'none'
      modal.style.opacity = 0
    }
    modal.style.opacity = 0

    setTimeout(() => {
      modal.style.visibility = 'hidden'
      modal.style.display = 'none'
    }, 500)
  }

  buttons.forEach(btn => btn.addEventListener('click', openModal))

  closeBtn.addEventListener('click', closeModal)


}

export default modal