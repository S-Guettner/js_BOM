const minutesInput = document.querySelector("#minutes")
const time = document.querySelector("#time")

let minutes = 0
let seconds = 0

let intervalSeconds
let intervalMinutes

const startMinCountdown = () => {
    minutes = Number(minutesInput.value)

    if(seconds === 0 ){
        time.innerHTML = `${minutes}:00`
        seconds += 60
        minutes--
    }
    intervalSeconds = setInterval(() => {
        seconds--
        if(minutes === 0 && seconds === 0){
            clearInterval(intervalSeconds)
        }
        if(seconds == 0 ){
            time.innerHTML = `${minutes}:00`
            seconds += 60
            minutes--
        }else if(seconds < 10){
            time.innerHTML = `${minutes}:0${seconds}`
        }
        else{
            time.innerHTML = `${minutes}:${seconds}`
        }
    },1000)
}

const pauseMinCountdown = () => {
    clearInterval(intervalSeconds)
}

const restartMinCountdown = () => {
    startMinCountdown()
}