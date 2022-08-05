const time = document.querySelector('.time')
const days = ['Sunday', 'Monday', 'Thusday', 'Wensday', 'thursday', 'Friday', 'Saterday']
let string_day = '';
const day = new Date().getDay()


// Get the current day
days.forEach((d, i) => {
    if (i === parseInt(day)) {
        string_day = days[i]
    }
})

document.querySelector('.day').innerHTML = `${string_day}`

// add zero in front of numbers < 10
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}



const updateTimer = () => {
    const timer = new Date()
    let hours = timer.getHours() % 12 || 12,
        minutes = timer.getMinutes(),
        seconds = timer.getSeconds();

    time.innerHTML = `${checkTime(hours)}:${checkTime(minutes)}:${checkTime(seconds)} <span class="type">${hours > 12 ? 'PM' : 'AM'}</span>`
}

setInterval(() => {
    updateTimer()
}, 1000)



