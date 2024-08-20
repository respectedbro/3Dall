const request = () => {
    const userNameInputs = document.querySelectorAll('.form-name') // type=text
    const userEmailInputs = document.querySelectorAll('.form-email') //type=email
    const userPhoneInputs = document.querySelectorAll('.form-phone') //type=tel

    const footerNameInput = document.getElementById('form2-name')
    const footerMessageInput = document.getElementById('form2-message') //placeholder="Ваше сообщение"

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
            e.target.value = e.target.value.replace(/[^0-9()\-]/g, '')
        })
    })

    footerNameInput.addEventListener('input', (e) => {
        nameHandler(e)
    })

    footerMessageInput.addEventListener('input', (e) => {
        nameHandler(e)
    })

}

export default request
