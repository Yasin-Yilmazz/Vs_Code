const name = (document.querySelector("#myName").innerHTML = window.prompt());
const time = document.querySelector("#myClock");

const myDate = function () {
  let date = new Date();
  let day = date.getDay();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  switch (day) {
    case 1:
      day = "Pazartesi";
      break;
    case 2:
      day = "Salı";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
      break;
    case 7:
      day = "Pazar";
      break;
  }
  time.innerHTML = `${hours}:${minute}:${second}:${day}`;
};
setInterval(() => {
  myDate();
}, 1000);
myDate();
