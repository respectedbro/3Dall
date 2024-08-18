const calculator = () => {
    const calcNumberInputs = document.querySelectorAll('.calc-block > input')

    calcNumberInputs.forEach(elem => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, '')
        })

    })
}

export default calculator