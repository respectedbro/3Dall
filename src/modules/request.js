const request = () => {
    const userNameInputs = document.querySelectorAll('.form-name')
    const userEmailInputs = document.querySelectorAll('.form-email')
    const userPhoneInputs = document.querySelectorAll('.form-phone')

    const footerNameInput = document.getElementById('form2-name')
    const footerMessageInput = document.getElementById('form2-message')

    const nameHandler = e => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s\-]/, "");
    };

    userNameInputs.forEach(elem => {
        elem.addEventListener('input', (e) => {
            nameHandler(e)
        })
    })

    userEmailInputs.forEach(elem => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9@_.!~*']/g, '')
        })
    })

    userPhoneInputs.forEach(elem => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9()\-+]/g, '')
        })
    })

    footerNameInput.addEventListener('input', (e) => {
        nameHandler(e)
    })

    footerMessageInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z0-9,.:;!]/, "");
    })

}

export default request
