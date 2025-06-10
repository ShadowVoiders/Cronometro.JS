const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const milisecondsEl = document.querySelector("#miliseconds")
const startbtnEl = document.querySelector("#startbtn")
const pausebtnEl = document.querySelector("#pausebtn")
const resumebtnEl= document.querySelector("#resumebtn")
const resetbtnEl = document.querySelector("#resetbtn")

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let ispaused = false;

startbtn.addEventListener("click", startTimer)
pausebtn.addEventListener("click", pauseTimer)
resumebtn.addEventListener("click", resumeTimer)
resetbtn.addEventListener("click", resetTimer)

function startTimer() {
    
    interval = setInterval(() => {

        if (!ispaused) {
            miliseconds += 10;

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;                
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

           minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime (seconds)
            milisecondsEl.textContent = formatmiliseconds (miliseconds)
        }
    }, 10)

    startbtn.style.display = "none"//Tiramos o Botão iniciar
    pausebtn.style.display = "block"//Trocamos pelo Botão Pausar
}
function pauseTimer () {//Botão de Pause
    ispaused = true
    pausebtn.style.display = "none"
    resumebtn.style.display = "block"
}

function resumeTimer () {//Botão de Continuar
    ispaused = false
    resumebtn.style.display = "none"
    pausebtn.style.display = "block"
}

function resetTimer () {//Botão de Resetar
    clearInterval(interval)
    miliseconds = 0,
    seconds = 0,
    minutes = 0, 

    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    milisecondsEl.textContent = "000"

    startbtn.style.display = "block"
    pausebtn.style.display = "none"
    resumebtn.style.display = "none"
   }

function formatTime(time) {//Fazer os formatos dos numeros minutos e segundos ser "00"
    return time < 10 ? `0${time}` : time;
}

function formatmiliseconds (time) {//Fazer os formatos dos numeros dos milesegundos ser "000"
    return time <100 ? `${time}`.padStart(3, "0") : time;
}

