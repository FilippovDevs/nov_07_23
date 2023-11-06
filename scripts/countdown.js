// Установка даты события
const countDownDate = new Date("Nov 4, 2023 23:59:59").getTime();

// Обновление таймера каждую секунду
let x = setInterval(function() {

    // Получение текущего времени
    let now = new Date().getTime();

    // Расчёт оставшегося времени
    let distance = countDownDate - now;

    // Расчёт дней, часов, минут и секунд
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Отображение результата
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Если таймер достиг конечной точки
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Событие началось!";
    }
}, 1000);
