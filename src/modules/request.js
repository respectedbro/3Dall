const request = () => {
    const headerFormName = document.querySelectorAll('.form-name') // type=text
    const headerFormEmail = document.querySelectorAll('.form-email') //type=email
    const headerFormPhone = document.querySelectorAll('.form-phone') //type=tel

    const footerFormName = document.getElementById('form2-name')
    const footerFormMessage = document.getElementById('form2-message') //placeholder="Ваше сообщение"


    headerFormName.forEach(elem => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\s\-]/, '')
        })
    })

    headerFormEmail.forEach(elem => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9@_.!~*']/g, '')
        })
    })

    headerFormPhone.forEach(elem => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9()\-]/g, '')
        })
    })

    footerFormName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s\-]/, '')
    })

    footerFormMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s\-]/, '')
    })


}

export default request
