const minutesInput = document.querySelector("#minutes")
const time = document.querySelector("#time")

let minutes = 0
let seconds = 60

let intervalSeconds
let intervalMinutes

const startMinCountdown = () => {
    minutes = Number(minutesInput.value-1)
    console.log(minutes)

    intervalSeconds = setInterval(() => {
        seconds--
        console.log(seconds)
        console.log(minutes)
        if(seconds == 0 ){
            time.innerHTML = `${minutes}:00`
            minutes--
            seconds += 60
        }else if(seconds < 10){
            time.innerHTML = `${minutes}:0${seconds}`
        }
        else{
            time.innerHTML = `${minutes}:${seconds}`
        }
    },1000)
}

const pauseMinCountdown = () => {
    clearInterval(intervalMinutes)
    clearInterval(intervalSeconds)
}

const restartMinCountdown = () => {
    startMinCountdown()
}