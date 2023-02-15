const time = document.querySelector(".zeit")
const btn = document.querySelector("#btn")

let percent = 100
let interval 

btn.addEventListener('click', () => {
    interval = setInterval(() => {
        percent--
        percent >= 0 ? time.innerHTML=`${percent}%` : clearInterval(interval)
    },100)
})