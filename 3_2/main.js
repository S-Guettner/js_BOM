const minutesInput = document.querySelector("#minutes")
const time = document.querySelector("#time")

let minutes
let seconds = 60
let counter
let interval

const startMinCountdown = () => {
    minutes = Number(minutesInput.value)

    intervalSeconds = setInterval(() => {
        seconds--
        counter++
        time.innerHTML = `${minutes}:${seconds}`
        console.log(`${minutes}:${seconds}`)
    }, 1000);
    intervalMinutes = setInterval(() => {
        minutes--
        time.innerHTML = `${minutes}:${seconds}`
        console.log(`${minutes}:${seconds}`)
    }, 60000);
}   