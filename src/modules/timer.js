const timer = (deadline) => {
    const timeHours = document.getElementById('timer-hours')
    const timeMinutes = document.getElementById('timer-minutes')
    const timeSeconds = document.getElementById('timer-seconds')

    let idInterval

    const addTimeZero = (time) => {
        if(time < 10) {
            return '0' + time
        } else {
            return time
        }
    }

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime()
        const dateNow = new Date().getTime()
        const timeRemaining = (dateStop - dateNow) / 1000
        const hours = Math.floor(timeRemaining / 60 / 60)
        const minutes = Math.floor((timeRemaining / 60) % 60)
        const seconds = Math.floor(timeRemaining % 60)

        return {timeRemaining, hours, minutes, seconds }
    }

    const updateClock = () => {
        const getTime = getTimeRemaining()

        timeHours.textContent = addTimeZero(getTime.hours)
        timeMinutes.textContent = addTimeZero(getTime.minutes)
        timeSeconds.textContent = addTimeZero(getTime.seconds)

        if(getTime.timeRemaining < 0) {
            timeHours.textContent = '00'
            timeMinutes.textContent = '00'
            timeSeconds.textContent = '00'
            clearInterval(idInterval)
        }
        
    }

    updateClock()

    idInterval = setInterval(updateClock, 1000)
}

export default timer