const request = () => {
    const headerForm = document.getElementById('form1')
    const headerFormName = document.getElementById('form1-name') // type=text
    const headerFormEmail = document.getElementById('form1-email') //type=email
    const headerFormPhone = document.getElementById('form1-phone') //type=tel

    const footerForm = document.getElementById('form2')
    const footerFormName = document.getElementById('form2-name') // type=text
    const footerFormEmail = document.getElementById('form2-email') //type=email
    const footerFormPhone = document.getElementById('form2-phone') //type=tel
    const footerFormMessage = document.getElementById('form2-message') //placeholder="Ваше сообщение"


    headerForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let isError = false
        if (/[^а-яА-Я\s\-]/.test(headerFormName.value)) {
            isError = true
        }

        if (/[^a-zA-Z0-9@_.!~*']/g.test(headerFormEmail.value)) {
            isError = true
        }
        if (/[^0-9()\-]/g.test(headerFormPhone.value)) {
            isError = true
        }

        if(!isError) {
            form1.submit();
        }
    })

    footerForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let isError = false
        if (/[^а-яА-Я\s\-]/.test(footerFormName.value)) {
            isError = true
        }

        if (/[^a-zA-Z0-9@_.!~*']/g.test(footerFormEmail.value)) {
            isError = true
        }
        if (/[^0-9()\-]/g.test(footerFormPhone.value)) {
            isError = true
        }

        if (/[^а-яА-Я\s-]/.test(footerFormMessage.value)) {
            isError = true
        }

        if(!isError) {
            form2.submit();
        }
    })
}

export default request

