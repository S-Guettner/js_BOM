console.log("Start")

setTimeout( () => {
    console.log("End after 3 seconds")
    countdown()
    } , 3000)

let count = 11
let interval

const countdown = () => {
    interval = setInterval(() => {
        count--
        if(count > 0){
            console.log(count)
        }else{
            console.log("Feierabend!")
            clearInterval(interval)
        }
        
    }, 1000)
}

