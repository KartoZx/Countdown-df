// เวลานับถอยหลัง: 26 พฤษภาคม 2025 เวลา 00:00 GMT+7
const targetDate = new Date("2025-05-26T00:07:00+07:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "หมดเวลาแล้ว!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${days} วัน ${hours} ชม. ${minutes} นาที ${seconds} วินาที`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
