const modal = () => {
  const modal = document.querySelector('.popup')
  const buttons = document.querySelectorAll('.popup-btn')
  const closeBtn = modal.querySelector('.popup-close')
  const popupMenu = document.querySelector('popup-content')

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block'
    })
  })

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
  })
  

}

export default modal