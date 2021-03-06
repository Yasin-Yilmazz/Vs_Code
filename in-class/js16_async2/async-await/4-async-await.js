//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asyn hale getirmek icin fonksiyon keyword'nun onune
//* asyn keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

let err = false;
const getUser = async () => {
  try {
    const res = await fetch("https://api.github.com/users");
    if (!res.ok) {
      err = true;
      //   throw new Error(`Something went wrong:${res.status}`);
    }

    const data = await res.json();
    updateDom(data);
  } catch (error) {
    console.log(error);
  }
};

getUser();

const updateDom = (data) => {
  const userDiv = document.querySelector(".users");

  if (err) {
    userDiv.innerHTML = `<h1 class="text-danger">Data can not be fetched</h1>`;
  } else {
    data.forEach((user) => {
      const { login, avatar_url, html_url } = user;
      userDiv.innerHTML += `
<h2 class="text-danger">NAME: ${login}</h2>
<img src="${avatar_url}" width = "50%" alt=""/>

  `;
    });
  }
};
