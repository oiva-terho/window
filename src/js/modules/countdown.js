export const countdown = (id, endtime) => {
    const clock = document.querySelector(id);
    const daysSpan = clock.querySelector('#days');
    const hoursSpan = clock.querySelector('#hours');
    const minutesSpan = clock.querySelector('#minutes');
    const secondsSpan = clock.querySelector('#seconds');
    const countdownDate = Date.parse(endtime);
    const t = () => {
        const now = parseInt((new Date().getTime()));
        const distance = countdownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        daysSpan.innerHTML = days;
        hoursSpan.innerHTML = ('0' + hours).slice(-2);
        minutesSpan.innerHTML = ('0' + minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + seconds).slice(-2);
        if (distance < 0) {
            document.querySelector('.sale').style.display = 'none';
        }
    };
    t();
    setInterval(t, 1000);
};
