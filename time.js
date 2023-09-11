// let seconds = 0;
// let minutes = 0;
// let hours = 0;
// let time = document.getElementById("time");
// time.innerHTML = `0${hours}:0${minutes}:0${seconds}`;

// setInterval(function () {
//   seconds--;
//   time.innerHTML = `0${hours}:0${minutes}:0${seconds}`;
//   if (seconds > 59) {
//     minutes++;
//     seconds = 1;
//   }
//   if (seconds > 9) {
//     time.innerHTML = `0${hours}:0${minutes}:${seconds}`;
//   }
//   if (minutes > 9) {
//     time.innerHTML = `0${hours}:${minutes}:${seconds}`;
//     time.innerHTML = `${minutes}:${seconds}`;
//   }
//   if (hours > 9) {
//     time.innerHTML = `${hours}:${minutes}:${seconds}`;
//   }
// }, 1000); 