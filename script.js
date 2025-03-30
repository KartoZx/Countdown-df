const countdownElement = document.getElementById('countdown');
const targetDate = new Date('2025-04-22T09:00:00+07:00'); // เวลาเป้าหมายตาม GMT+7

function updateCountdown() {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now = new Date().toLocaleString('en-US', { timeZone: userTimeZone });
    const currentDate = new Date(now);

    const difference = targetDate - currentDate;

    if (difference <= 0) {
        countdownElement.textContent = "Countdown Complete!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);