const minutesInput = document.querySelector("#minutes")
const time = document.querySelector("#time")

let minutes
let seconds = 60

let intervalSeconds
let intervalMinutes

const startMinCountdown = () => {
    minutes = parseInt(minutesInput.value-1)

    
    intervalSeconds = setInterval(() => {
        seconds--
        if(seconds < 0 && minutes > 0 ){seconds += 59}
        if(seconds < 10 ){
            time.innerHTML = `${minutes}:0${seconds}`
        }
        else{
            time.innerHTML = `${minutes}:${seconds}`
        }
        if(seconds < 1 ) {
            clearInterval(intervalSeconds)
        }
        console.log(seconds)
    },1000)

    intervalMinutes = setInterval(() => {
        minutes--
        time.innerHTML = `${minutes}:${seconds}`
    },60000)
    
    if (minutes < 1 ) {
        clearInterval(intervalMinutes)
    }

}   

const pauseMinCountdown = () => {
    clearInterval(intervalMinutes)
    clearInterval(intervalSeconds)
}

const restartMinCountdown = () => {
    startMinCountdown()
}