console.log("**** app.js *******");

const dilInput = document.querySelector(".diller");
const silBtn = document.getElementById("sil");
const ekleBtn = document.getElementById("ekle");

const dilSection = document.querySelector("#dil-section");

const ul = document.createElement("ul");
dilSection.appendChild(ul);

console.log(dilSection.children[0]);
console.log(dilSection.parentNode.parentNode);

const h1 = ul.closest(".container").firstElementChild;
console.log(h1);

h1.style.color = "red";

//? container classı içindeki btn classına ait olan elementleri arar

const buttons = ul.closest(".container").querySelectorAll(".btn");
console.log(buttons);

//*************************************************** */

ekleBtn.onclick = function () {
  if (!dilInput.value) {
    alert("Lütfen bir dil giriniz");
  } else {
    ul.innerHTML += `<li>${dilInput.value}</li>`;
    dilInput.value = "";
    javascriptKontrol();
  }
};

const javascriptKontrol = () => {
  document.querySelectorAll("ul li").forEach((dil) => {
    const kucukHarf = dil.textContent.toLocaleLowerCase();
    if (kucukHarf === "javascript") {
      //   dil.className = "red";
      //? Alternatif
      dil.setAttribute("class", "red row");
    }
  });
};

silBtn.onclick = function () {
  ul.childElementCount > 0
    ? ul.removeChild(ul.lastChild)
    : alert("silinecek dil kalmadı");
};

dilInput.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.code === "Enter") {
    ekleBtn.click();
  }
  if (e.code === "Delete") {
    silBtn.onclick();
  }
});

window.onload = () => {
  javascriptKontrol();
  dilInput.focus();
};
