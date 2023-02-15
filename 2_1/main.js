const count = document.querySelector("#count")
const message = document.querySelector(".message")

let counter = 10
let interval
const countdown = () => {
    interval = setInterval(() => {
        counter--
        count.innerHTML = `${counter}`
        if(counter > 0){
            count.innerHTML = `${counter}`
        }else{
            clearInterval(interval)
            message.style.display="none"
        }
    },1000)
}
window.onload = countdown()
